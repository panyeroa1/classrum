const firebaseConfig = {
  apiKey: "AIzaSyDVw2Xt1gf52xXgx4E5TMKf2007AyQwBfQ",
  authDomain: "impactful-ring-469323-e5.firebaseapp.com",
  databaseURL: "https://impactful-ring-469323-e5.europe-west1.firebasedatabase.app",
  projectId: "impactful-ring-469323-e5",
  storageBucket: "impactful-ring-469323-e5.firebasestorage.app",
  messagingSenderId: "316842561818",
  appId: "1:316842561818:web:8e580f90d4c766832c5ca3"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const $ = id => document.getElementById(id);

let currentUser = null;
let recorder = null;
let recordChunks = [];
let recordedBlob = null;
let recordingStream = null;
let selectedMicId = '';

const statusEl = $('status');

function setStatus(msg, type=''){
  statusEl.textContent = msg;
  statusEl.className = 'status' + (type ? ' ' + type : '');
}

function getSessionId(){
  const key = 'trainingSessionId';
  let id = localStorage.getItem(key);
  if(!id){
    id = 'sess_' + Math.random().toString(36).slice(2,10);
    localStorage.setItem(key, id);
  }
  return id;
}

function historyKey(uid){ return `trainingHistory_${uid}`; }
function queueKey(uid){ return `trainingQueue_${uid}`; }

function loadLocalHistory(uid){
  try{
    return JSON.parse(localStorage.getItem(historyKey(uid)) || '[]');
  }catch{ return []; }
}

function saveLocalHistory(uid, item){
  const history = loadLocalHistory(uid);
  history.unshift(item);
  localStorage.setItem(historyKey(uid), JSON.stringify(history.slice(0, 50)));
  renderLocalSamples(history);
}

function loadQueue(uid){
  try{ return JSON.parse(localStorage.getItem(queueKey(uid)) || '[]'); }catch{ return []; }
}

function saveQueue(uid, queue){
  localStorage.setItem(queueKey(uid), JSON.stringify(queue));
}

function addToQueue(uid, item){
  const queue = loadQueue(uid);
  queue.push(item);
  saveQueue(uid, queue);
}

async function trySyncQueue(){
  if(!currentUser) return;
  const queue = loadQueue(currentUser.uid);
  if(queue.length === 0) return;

  const remaining = [];
  for(const item of queue){
    try{
      await db.ref(`/training/${currentUser.uid}/${item.id}`).set(item);
    }catch(e){
      remaining.push(item);
    }
  }
  saveQueue(currentUser.uid, remaining);
  if(remaining.length === 0) setStatus('All offline samples synced.', 'success');
  else setStatus(`Synced some items, ${remaining.length} remaining offline.`, 'error');
}

async function enumerateMics(){
  try{
    const devices = await navigator.mediaDevices.enumerateDevices();
    const mics = devices.filter(d => d.kind === 'audioinput');
    $('micSelect').innerHTML = mics.map((d,i)=>`<option value="${d.deviceId}">${d.label || 'Microphone ' + (i+1)}</option>`).join('');
    selectedMicId = $('micSelect').value || '';
  }catch{
    $('micSelect').innerHTML = '<option value="">Unknown</option>';
  }
}

function bindRecording(){
  $('recordBtn').addEventListener('click', async ()=>{
    if(recorder && recorder.state === 'recording'){
      recorder.stop();
      return;
    }
    try{
      recordingStream = await navigator.mediaDevices.getUserMedia({audio: selectedMicId ? {deviceId:{exact:selectedMicId}} : true});
      recordChunks = [];
      recorder = new MediaRecorder(recordingStream);
      recorder.ondataavailable = e => { if(e.data.size) recordChunks.push(e.data); };
      recorder.onstop = () => {
        recordedBlob = new Blob(recordChunks, {type: recorder.mimeType || 'audio/webm'});
        $('audioPreview').src = URL.createObjectURL(recordedBlob);
        $('recordStatus').textContent = 'Recorded';
        recordingStream.getTracks().forEach(t=>t.stop());
      };
      recorder.start();
      $('recordStatus').textContent = 'Recording...';
    }catch(e){
      setStatus('Microphone access failed.', 'error');
    }
  });
}

async function blobToDataUrl(blob){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function renderLocalSamples(history){
  const list = $('localSamples');
  list.innerHTML = '';
  const items = history.slice(0, 10);
  if(items.length === 0){
    list.innerHTML = '<div class="sample-item">No local samples yet.</div>';
    return;
  }
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'sample-item';
    div.innerHTML = `
      <strong>${item.id}</strong>
      <span>${new Date(item.createdAt).toLocaleString()}</span>
      <span>STT: ${item.sttSourceLang} → Translation: ${item.translationTargetLang}</span>
      <span>${item.groundTruth?.slice(0,80) || 'No text provided'}</span>
    `;
    list.appendChild(div);
  });
}

$('micSelect').addEventListener('change', e=>{
  selectedMicId = e.target.value;
});

$('audioFile').addEventListener('change', e=>{
  const file = e.target.files?.[0];
  if(file){
    recordedBlob = file;
    $('audioPreview').src = URL.createObjectURL(file);
  }
});

$('syncNowBtn').addEventListener('click', ()=>{
  trySyncQueue();
});

$('dataForm').addEventListener('submit', async e=>{
  e.preventDefault();
  if(!currentUser){
    setStatus('You must be signed in.', 'error');
    return;
  }

  const audioFile = $('audioFile').files?.[0] || null;
  const blob = recordedBlob || audioFile || null;
  let audioDataUrl = null;
  if(blob){
    audioDataUrl = await blobToDataUrl(blob);
  }

  const sample = {
    id: 'sample_' + Date.now() + '_' + Math.random().toString(36).slice(2,7),
    uid: currentUser.uid,
    sessionId: getSessionId(),
    createdAt: Date.now(),
    locale: navigator.language || '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    device: navigator.userAgent || '',
    micId: selectedMicId || '',
    micLabel: $('micSelect').selectedOptions?.[0]?.textContent || '',
    sttSourceLang: $('sttLang').value,
    translationTargetLang: $('translationLang').value,
    groundTruth: $('groundTruth').value.trim(),
    correctedTranscript: $('correctedTranscript').value.trim(),
    pronunciationHints: $('pronunciationHints').value.trim(),
    preferredTtsOutput: $('preferredTts').value.trim(),
    notes: $('metadataNotes').value.trim(),
    audio: blob ? {
      name: blob.name || 'recording',
      type: blob.type || 'audio/webm',
      size: blob.size || 0,
      dataUrl: audioDataUrl
    } : null
  };

  saveLocalHistory(currentUser.uid, sample);
  addToQueue(currentUser.uid, sample);

  try{
    await db.ref(`/training/${currentUser.uid}/${sample.id}`).set(sample);
    const queue = loadQueue(currentUser.uid).filter(item => item.id !== sample.id);
    saveQueue(currentUser.uid, queue);
    setStatus('Sample saved and synced.', 'success');
  }catch(e){
    setStatus('Saved locally. Sync will retry when online.', 'error');
  }

  $('dataForm').reset();
  $('audioPreview').removeAttribute('src');
  recordedBlob = null;
  $('recordStatus').textContent = 'Not recording';
});

window.addEventListener('online', () => trySyncQueue());

function initForm(){
  $('localeInput').value = navigator.language || '';
  enumerateMics();
  bindRecording();
}

function initForUser(){
  initForm();
  renderLocalSamples(loadLocalHistory(currentUser.uid));
  trySyncQueue();
}

auth.onAuthStateChanged(user => {
  if(!user){
    window.location.href = 'auth.html';
    return;
  }
  currentUser = user;
  initForUser();
});
