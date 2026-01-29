/* =========================
   Firebase Config
========================= */
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
const auth = firebase.auth(), db = firebase.database();
const $ = id => document.getElementById(id);

const loadingOverlay = $('loadingOverlay');
const loadingTitle = $('loadingTitle');
const loadingMessage = $('loadingMessage');
const loadingActions = $('loadingActions');

function showLoading(title, message, showActions=false){
  if(title) loadingTitle.textContent = title;
  if(message) loadingMessage.textContent = message;
  loadingActions.classList.toggle('is-hidden', !showActions);
  loadingOverlay.classList.remove('hidden');
}
function hideLoading(){ loadingOverlay.classList.add('hidden'); }

/* =========================
   Stream Video Configuration
========================= */
const STREAM_API_KEY = 'pnh7nmt84ebm';
const STREAM_SECRET_KEY = 'ycewy9r3x5597e39j7ay7q5v7fw2vsybqb65gfu2n6nrzab7vw4q63bdkyh8f3f6';
const USER_TOKEN_EXPIRY_HOURS = 24;

/* =========================
   Voice Mapping (unchanged from your file)
========================= */
const UNIVERSAL_VOICE = 'a0e99841-438c-4a64-b679-ae501e7d6091';
const FLEMISH_TTS_VOICE_ID = 'eded3658-4f70-4420-b021-1e70e14a8203';
const FLEMISH_TTS_MODEL_ID = 'sonic-3-latest';
const FLEMISH_TTS_LANGUAGE = 'nl';
const FLEMISH_TTS_LANGS = new Set(['nl-BE','nl','vls']);
const VOICES = {
  'en':'a0e99841-438c-4a64-b679-ae501e7d6091','en-US':'a0e99841-438c-4a64-b679-ae501e7d6091','en-GB':'a0e99841-438c-4a64-b679-ae501e7d6091','en-AU':'a0e99841-438c-4a64-b679-ae501e7d6091','en-CA':'a0e99841-438c-4a64-b679-ae501e7d6091',
  'es':'846d6cb0-2301-48b6-9571-6d4e2685d80c','es-ES':'846d6cb0-2301-48b6-9571-6d4e2685d80c','es-MX':'846d6cb0-2301-48b6-9571-6d4e2685d80c','es-AR':'846d6cb0-2301-48b6-9571-6d4e2685d80c','es-CO':'846d6cb0-2301-48b6-9571-6d4e2685d80c','es-CL':'846d6cb0-2301-48b6-9571-6d4e2685d80c',
  'fr':'a8a1eb38-5f15-4c1d-8722-7ac0f329f8f3','fr-FR':'a8a1eb38-5f15-4c1d-8722-7ac0f329f8f3','fr-CA':'a8a1eb38-5f15-4c1d-8722-7ac0f329f8f3','fr-BE':'a8a1eb38-5f15-4c1d-8722-7ac0f329f8f3','fr-CH':'a8a1eb38-5f15-4c1d-8722-7ac0f329f8f3',
  'de':'3f6e78a8-5283-42aa-b5e7-af82e8bb310c','de-DE':'3f6e78a8-5283-42aa-b5e7-af82e8bb310c','de-AT':'3f6e78a8-5283-42aa-b5e7-af82e8bb310c','de-CH':'3f6e78a8-5283-42aa-b5e7-af82e8bb310c',
  'it':'03496517-369a-4db1-8236-3d3ae459ddf7','it-IT':'03496517-369a-4db1-8236-3d3ae459ddf7','it-CH':'03496517-369a-4db1-8236-3d3ae459ddf7',
  'pt':'700d1ee3-a641-4018-ba6e-899dcadc9e2b','pt-PT':'700d1ee3-a641-4018-ba6e-899dcadc9e2b','pt-BR':'700d1ee3-a641-4018-ba6e-899dcadc9e2b',
  'nl':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','nl-NL':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','nl-BE':FLEMISH_TTS_VOICE_ID,'vls':FLEMISH_TTS_VOICE_ID,
  'zh':'eda5bbff-1ff1-4886-8ef1-4e69a77640a0','zh-CN':'eda5bbff-1ff1-4886-8ef1-4e69a77640a0','zh-TW':'eda5bbff-1ff1-4886-8ef1-4e69a77640a0','zh-HK':'eda5bbff-1ff1-4886-8ef1-4e69a77640a0',
  'byv':UNIVERSAL_VOICE,'byv-CM':UNIVERSAL_VOICE,
  'ja':'2b568345-1d48-4047-b25f-7baccf842eb0','ja-JP':'2b568345-1d48-4047-b25f-7baccf842eb0',
  'ko':'029c3c7a-b6d9-44fb-a9b9-e91c9c7b3a6e','ko-KR':'029c3c7a-b6d9-44fb-a9b9-e91c9c7b3a6e',
  'ar':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2','ar-SA':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2','ar-EG':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2','ar-AE':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2','ar-MA':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2',
  'hi':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','hi-IN':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'ru':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7','ru-RU':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7',
  'tr':'d46abd1d-2d02-43e8-819f-51fb652c1c61','tr-TR':'d46abd1d-2d02-43e8-819f-51fb652c1c61',
  'pl':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e','pl-PL':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e',
  'vi':'41534e16-2966-4c6b-9670-111411def906','vi-VN':'41534e16-2966-4c6b-9670-111411def906',
  'th':'3b554273-4299-48b9-9aaf-eefd438e3941','th-TH':'3b554273-4299-48b9-9aaf-eefd438e3941',
  'id':'bf991597-6c13-47e4-8411-91ec2de5c466','id-ID':'bf991597-6c13-47e4-8411-91ec2de5c466',
  'tl':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','fil':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','tl-PH':'daf747c6-6bc2-4083-bd59-aa94dce23f5d',
  'sv':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','sv-SE':'daf747c6-6bc2-4083-bd59-aa94dce23f5d',
  'da':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','da-DK':'daf747c6-6bc2-4083-bd59-aa94dce23f5d',
  'no':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','nb':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','nn':'daf747c6-6bc2-4083-bd59-aa94dce23f5d',
  'fi':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','fi-FI':'daf747c6-6bc2-4083-bd59-aa94dce23f5d',
  'cs':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e','cs-CZ':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e',
  'sk':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e','sk-SK':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e',
  'hu':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e','hu-HU':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e',
  'ro':'03496517-369a-4db1-8236-3d3ae459ddf7','ro-RO':'03496517-369a-4db1-8236-3d3ae459ddf7',
  'el':'03496517-369a-4db1-8236-3d3ae459ddf7','el-GR':'03496517-369a-4db1-8236-3d3ae459ddf7',
  'bg':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7','bg-BG':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7',
  'uk':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7','uk-UA':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7',
  'he':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2','he-IL':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2',
  'fa':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2','fa-IR':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2',
  'ur':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','ur-PK':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'bn':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','bn-BD':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','bn-IN':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'ta':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','ta-IN':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','ta-LK':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'te':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','te-IN':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'mr':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','mr-IN':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'gu':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','gu-IN':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'kn':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','kn-IN':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'ml':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','ml-IN':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'si':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','si-LK':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'ms':'bf991597-6c13-47e4-8411-91ec2de5c466','ms-MY':'bf991597-6c13-47e4-8411-91ec2de5c466',
  'my':'3b554273-4299-48b9-9aaf-eefd438e3941','my-MM':'3b554273-4299-48b9-9aaf-eefd438e3941',
  'km':'3b554273-4299-48b9-9aaf-eefd438e3941','km-KH':'3b554273-4299-48b9-9aaf-eefd438e3941',
  'lo':'3b554273-4299-48b9-9aaf-eefd438e3941','lo-LA':'3b554273-4299-48b9-9aaf-eefd438e3941',
  'ka':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7','ka-GE':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7',
  'hy':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7','hy-AM':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7',
  'az':'d46abd1d-2d02-43e8-819f-51fb652c1c61','az-AZ':'d46abd1d-2d02-43e8-819f-51fb652c1c61',
  'kk':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7','kk-KZ':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7',
  'uz':'d46abd1d-2d02-43e8-819f-51fb652c1c61','uz-UZ':'d46abd1d-2d02-43e8-819f-51fb652c1c61',
  'sw':'a0e99841-438c-4a64-b679-ae501e7d6091','sw-KE':'a0e99841-438c-4a64-b679-ae501e7d6091','sw-TZ':'a0e99841-438c-4a64-b679-ae501e7d6091',
  'am':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2','am-ET':'cfa77df6-e0a1-4c8a-a239-7e8deb0d1cb2',
  'zu':'a0e99841-438c-4a64-b679-ae501e7d6091','zu-ZA':'a0e99841-438c-4a64-b679-ae501e7d6091',
  'af':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','af-ZA':'daf747c6-6bc2-4083-bd59-aa94dce23f5d',
  'sr':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7','sr-RS':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7',
  'hr':'03496517-369a-4db1-8236-3d3ae459ddf7','hr-HR':'03496517-369a-4db1-8236-3d3ae459ddf7',
  'bs':'03496517-369a-4db1-8236-3d3ae459ddf7','bs-BA':'03496517-369a-4db1-8236-3d3ae459ddf7',
  'sl':'03496517-369a-4db1-8236-3d3ae459ddf7','sl-SI':'03496517-369a-4db1-8236-3d3ae459ddf7',
  'mk':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7','mk-MK':'2d8c8d5f-6bb3-44a6-afd2-a5e05d2caca7',
  'sq':'03496517-369a-4db1-8236-3d3ae459ddf7','sq-AL':'03496517-369a-4db1-8236-3d3ae459ddf7',
  'et':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','et-EE':'daf747c6-6bc2-4083-bd59-aa94dce23f5d',
  'lv':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','lv-LV':'daf747c6-6bc2-4083-bd59-aa94dce23f5d',
  'lt':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e','lt-LT':'f9836c6e-a0bd-460e-9d3c-f7a1a84d2d4e',
  'is':'daf747c6-6bc2-4083-bd59-aa94dce23f5d','is-IS':'daf747c6-6bc2-4083-bd59-aa94dce23f5d',
  'mt':'03496517-369a-4db1-8236-3d3ae459ddf7','mt-MT':'03496517-369a-4db1-8236-3d3ae459ddf7',
  'ca':'846d6cb0-2301-48b6-9571-6d4e2685d80c','ca-ES':'846d6cb0-2301-48b6-9571-6d4e2685d80c',
  'gl':'846d6cb0-2301-48b6-9571-6d4e2685d80c','gl-ES':'846d6cb0-2301-48b6-9571-6d4e2685d80c',
  'eu':'846d6cb0-2301-48b6-9571-6d4e2685d80c','eu-ES':'846d6cb0-2301-48b6-9571-6d4e2685d80c',
  'cy':'a0e99841-438c-4a64-b679-ae501e7d6091','cy-GB':'a0e99841-438c-4a64-b679-ae501e7d6091',
  'ga':'a0e99841-438c-4a64-b679-ae501e7d6091','ga-IE':'a0e99841-438c-4a64-b679-ae501e7d6091',
  'ne':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','ne-NP':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e',
  'pa':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e','pa-IN':'4a19f17c-eedc-4cf6-b89b-3efb5c8c8a4e'
};

function getVoice(l){
  if(VOICES[l]) return VOICES[l];
  const base = (l||'').split('-')[0];
  if(VOICES[base]) return VOICES[base];
  return UNIVERSAL_VOICE;
}

/* =========================
   State
========================= */
let currentUser=null,userProfile=null,currentRoom=null,roomConfig=null,userLanguage='en',languagesList=[];
let sttSourceLang='auto',translationTargetLang='en';
let localStream=null,screenStream=null,selectedMicId=null,selectedCamId=null,selectedSpeakerId=null;

let isTranscribing=false,wsDeepgram=null,audioCtx=null,sentenceBuffer='',flushTimeout=null;
let autoPlayTTS=false,ttsQueue=[],isPlayingTTS=false,currentAudio=null,processedIds=new Set();

let participants=new Map(),pinnedUserId=null,meetingStartTime=null,meetingTimerInterval=null;

let isWhiteboardActive=false,whiteboardTool='pen',whiteboardCtx=null,isDrawing=false;
let prejoinStream=null,prejoinMicEnabled=true,prejoinCamEnabled=true;
let mediaRecorder=null,recordedChunks=[],isRecording=false;

let presenceRef=null,participantsRef=null;

// Stream.io Video SDK
let streamClient = null;
let streamCall = null;
let streamParticipantMap = new Map();

// Quiz
const CEREBRAS_API_KEY='csk-pprwh4v2dkey9cjx94mj3xx4wmm32rhc6yjcvwx8nfh2h2mh';
let quizLink=null,quizTranscripts=[];
const FLUSH_DELAY=1200;

/* Teacher meta */
let teacherUserId = null;
let roomMetaTeacherRef = null;

/* Transcript listener guard */
let transcriptsListenerAttached = false;

/* STT robustness */
let sttSourceNode = null;
let sttProcNode = null;
let sttZeroGain = null;
let sttReconnectTimer = null;
let sttReconnectAttempt = 0;
let sttStopRequested = false;
let sttLanguage = 'multi';
let sttKeyterms = [];
let sttDatasetSource = null;
let flemishLexicon = [];
let flemishLexiconSource = null;
let sttProvider = null;
let openaiWs = null;
let openaiSessionReady = false;
let openaiConnectTimer = null;
let openaiTranscriptBuffer = new Map();
let visualizerCtx = null;
let micAnalyser = null;
let outAnalyser = null;
let micSourceNode = null;
let outSourceNode = null;
let visualizerRaf = null;

const STT_FLEMISH_DATASET_URL = 'assets/stt/flemish-keyterms.txt';
const FLEMISH_LEXICON_URL = 'assets/llm/flemish-lexicon.txt';
const FLEMISH_STT_LANGS = new Set(['nl-BE','nl']);
const OPENAI_REALTIME_URL = 'wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2025-06-03';
const OPENAI_STT_MODEL = 'gpt-4o-transcribe';

/* =========================
   Utils
========================= */
function showToast(m,d=2500){
  const t=$('toast');
  t.textContent=m;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),d);
}
function generateId(){const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let id='';for(let i=0;i<6;i++)id+=c.charAt(Math.floor(Math.random()*c.length));return id}
function formatTime(s){const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sec=s%60;if(h>0)return`${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;return`${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`}

/* =========================
   Auth
========================= */
auth.onAuthStateChanged(async u=>{
  if(u){
    currentUser=u;
    await loadUserProfile(u);
    await loadLanguages();
    hideLoading();
    showPrejoinScreen();
  }else{
    showLoading('Not signed in','Redirecting you to the sign-in page...');
    setTimeout(()=>{window.location.href='auth.html';},600);
  }
});

if(location.protocol === 'file:'){
  showLoading('Local file detected','Please open this app via a local web server (http://localhost) or a hosted URL. Firebase auth will not work on file://',true);
}

async function loadUserProfile(u){
  const snap=await db.ref(`/users/${u.uid}`).once('value');
  let p=snap.val();
  if(!p||!p.personalId){
    const pid=generateId();
    p={name:u.displayName||u.email?.split('@')[0]||'User',email:u.email,personalId:pid,language:'en',createdAt:p?.createdAt||Date.now()};
    if(u.photoURL)p.photoURL=u.photoURL;
    await db.ref(`/users/${u.uid}`).set(p);
  }
  userProfile=p;
  translationTargetLang = p.translationTargetLang || p.language || 'en';
  sttSourceLang = p.sttSourceLang || p.language || 'auto';
  userLanguage = translationTargetLang;
}

/* =========================
   Languages
========================= */
const DEFAULT_LANGUAGES = [
  {code:'en',name:'English'},
  {code:'nl-BE',name:'Dutch (Flemish)'},
  {code:'fr',name:'French'},
  {code:'de',name:'German'},
  {code:'es',name:'Spanish'},
  {code:'tr',name:'Turkish'},
  {code:'tl',name:'Filipino/Tagalog'},
  {code:'byv',name:'Medumba'}
];

function ensureLanguage(code, name){
  if(!code) return;
  const existing = languagesList.find(l=>l.code===code);
  if(existing){
    if(!existing.name) existing.name = name;
    if(code === 'nl-BE' && !/flemish/i.test(existing.name || '')) existing.name = 'Dutch (Flemish)';
    if(code === 'byv' && !existing.name) existing.name = 'Medumba';
    return;
  }
  languagesList.push({code, name});
}

function ensureVoiceCoverage(){
  languagesList.forEach(l=>{
    const code = (l.code || '').trim();
    if(!code) return;
    if(VOICES[code]) return;
    const base = code.split('-')[0];
    VOICES[code] = VOICES[base] || UNIVERSAL_VOICE;
  });
}

function finalizeLanguages(){
  ensureLanguage('nl-BE','Dutch (Flemish)');
  ensureLanguage('byv','Medumba');
  ensureVoiceCoverage();
}

async function loadLanguages(){
  try{
    const snap=await db.ref('/languages').once('value');
    const d=snap.val();
    languagesList=[];
    if(d){
      if(Array.isArray(d)) languagesList=d.map(l=>({code:l.code,name:l.name}));
      else for(const[k,v] of Object.entries(d)) languagesList.push({code:v.code||k,name:v.name||v});
    }else{
      languagesList=[...DEFAULT_LANGUAGES];
    }
    finalizeLanguages();
    populateLangSelects();
  }catch(e){
    languagesList=[...DEFAULT_LANGUAGES];
    finalizeLanguages();
    populateLangSelects();
  }
}

function populateLangSelects(){
  const opts=languagesList.map(l=>`<option value="${l.code}">${l.name}</option>`).join('');
  const sttOpts = `<option value="auto">Auto (Multilingual)</option>` + opts;
  if($('userLanguageSelect')) $('userLanguageSelect').innerHTML=opts;
  if($('settingsLanguageSelect')) $('settingsLanguageSelect').innerHTML=opts;
  if($('translationLangSelect')) $('translationLangSelect').innerHTML=opts;
  if($('sttLangSelect')) $('sttLangSelect').innerHTML=sttOpts;

  setSelectValueIfExists($('userLanguageSelect'), translationTargetLang);
  setSelectValueIfExists($('settingsLanguageSelect'), translationTargetLang);
  setSelectValueIfExists($('translationLangSelect'), translationTargetLang);
  setSelectValueIfExists($('sttLangSelect'), sttSourceLang);

  updateLanguageDisplay();
}

function updateLanguageDisplay(){
  const name = languagesList.find(l=>l.code===translationTargetLang)?.name || translationTargetLang;
  if($('displayUserLang')) $('displayUserLang').textContent = name || '';
}

function syncLanguageSelects(){
  setSelectValueIfExists($('userLanguageSelect'), translationTargetLang);
  setSelectValueIfExists($('settingsLanguageSelect'), translationTargetLang);
  setSelectValueIfExists($('translationLangSelect'), translationTargetLang);
  setSelectValueIfExists($('sttLangSelect'), sttSourceLang);
  updateLanguageDisplay();
}

function setTranslationTarget(code, persist=true){
  const next = (code || '').trim();
  if(!next) return;
  translationTargetLang = next;
  userLanguage = next;
  if(userProfile){
    userProfile.language = next;
    userProfile.translationTargetLang = next;
  }
  syncLanguageSelects();
  if(persist && currentUser){
    db.ref(`/users/${currentUser.uid}/language`).set(next);
    db.ref(`/users/${currentUser.uid}/translationTargetLang`).set(next);
  }
}

function setSttSource(code, persist=true){
  const next = (code || '').trim() || 'auto';
  sttSourceLang = next;
  sttLanguage = resolveSttLanguage(sttSourceLang);
  if(userProfile) userProfile.sttSourceLang = sttSourceLang;
  syncLanguageSelects();
  if(persist && currentUser){
    db.ref(`/users/${currentUser.uid}/sttSourceLang`).set(sttSourceLang);
  }
  if(isTranscribing){
    stopTranscription(true);
    startTranscription();
  }
}

/* =========================
   Prejoin
========================= */
$('btnLogout').addEventListener('click',()=>auth.signOut());

async function showPrejoinScreen(){
  $('prejoinOverlay').classList.add('active');
  const name=userProfile?.name||currentUser.displayName||'User';
  $('prejoinName').textContent=name;
  $('prejoinEmail').textContent=userProfile?.email||currentUser.email||'';
  $('displayNameInput').value=name;
  $('prejoinAvatar').textContent=name.charAt(0).toUpperCase();
  if(userProfile?.photoURL||currentUser.photoURL) $('prejoinAvatar').innerHTML=`<img src="${userProfile?.photoURL||currentUser.photoURL}"/>`;
  const p=new URLSearchParams(location.search);
  if(p.get('room')) $('roomIdInput').value=p.get('room').toUpperCase();
  await enumerateDevices();
  await startPreviewStream();
}

$('displayNameInput').addEventListener('input',e=>{
  const val=e.target.value.trim();
  if(val){
    $('prejoinName').textContent=val;
    if(!userProfile?.photoURL && !currentUser?.photoURL){
      $('prejoinAvatar').textContent=val.charAt(0).toUpperCase();
    }
  }
});

if($('userLanguageSelect')){
  $('userLanguageSelect').addEventListener('change',e=>{
    const val = e.target.value;
    setTranslationTarget(val, true);
    if(!sttSourceLang || sttSourceLang === 'auto') setSttSource(val, true);
  });
}

async function enumerateDevices(){
  try{
    const devs=await navigator.mediaDevices.enumerateDevices();
    const mics=devs.filter(d=>d.kind==='audioinput'),
          cams=devs.filter(d=>d.kind==='videoinput'),
          spks=devs.filter(d=>d.kind==='audiooutput');

    $('micSelect').innerHTML=mics.map((d,i)=>`<option value="${d.deviceId}">${d.label||('Microphone '+(i+1))}</option>`).join('');
    $('camSelect').innerHTML=cams.map((d,i)=>`<option value="${d.deviceId}">${d.label||('Camera '+(i+1))}</option>`).join('');
    $('speakerSelect').innerHTML=spks.map((d,i)=>`<option value="${d.deviceId}">${d.label||('Speaker '+(i+1))}</option>`).join('');

    $('settingsMicSelect').innerHTML=$('micSelect').innerHTML;
    $('settingsCamSelect').innerHTML=$('camSelect').innerHTML;
    $('settingsSpeakerSelect').innerHTML=$('speakerSelect').innerHTML;
    if($('transcriptMicSelect')) $('transcriptMicSelect').innerHTML=$('micSelect').innerHTML;
    syncMicSelects();
  }catch(e){console.error('Enum devices:',e)}
}

async function startPreviewStream(){
  try{
    prejoinStream=await navigator.mediaDevices.getUserMedia({
      video:$('camSelect').value?{deviceId:{exact:$('camSelect').value}}:true,
      audio:$('micSelect').value?{deviceId:{exact:$('micSelect').value}}:true
    });
    $('prejoinVideo').srcObject=prejoinStream;
    $('prejoinVideoOff').classList.add('hidden');
    await enumerateDevices();
  }catch(e){
    console.error('Preview:',e);
    $('prejoinVideoOff').classList.remove('hidden');
  }
}

$('prejoinMicToggle').addEventListener('click',()=>{
  prejoinMicEnabled=!prejoinMicEnabled;
  $('prejoinMicToggle').classList.toggle('off',!prejoinMicEnabled);
  $('prejoinMicToggle').innerHTML=`<i class="fas fa-microphone${prejoinMicEnabled?'':'-slash'}"></i>`;
  if(prejoinStream) prejoinStream.getAudioTracks().forEach(t=>t.enabled=prejoinMicEnabled);
});
$('prejoinCamToggle').addEventListener('click',()=>{
  prejoinCamEnabled=!prejoinCamEnabled;
  $('prejoinCamToggle').classList.toggle('off',!prejoinCamEnabled);
  $('prejoinCamToggle').innerHTML=`<i class="fas fa-video${prejoinCamEnabled?'':'-slash'}"></i>`;
  $('prejoinVideoOff').classList.toggle('hidden',prejoinCamEnabled);
  if(prejoinStream) prejoinStream.getVideoTracks().forEach(t=>t.enabled=prejoinCamEnabled);
});

$('micSelect').addEventListener('change',startPreviewStream);
$('camSelect').addEventListener('change',startPreviewStream);
$('roomIdInput').addEventListener('input',e=>{e.target.value=e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,'')});
$('btnJoinRoom').addEventListener('click',joinRoom);
$('roomIdInput').addEventListener('keypress',e=>{if(e.key==='Enter')joinRoom()});

/* =========================
   Teacher meta helpers
========================= */
function getPinnedOrTeacherId(){
  if(pinnedUserId && participants.has(pinnedUserId)) return pinnedUserId;
  if(teacherUserId && participants.has(teacherUserId)) return teacherUserId;
  if(currentUser?.uid && participants.has(currentUser.uid)) return currentUser.uid;
  for(const [id] of participants) return id;
  return null;
}

async function ensureTeacherRole(){
  if(!currentRoom || !currentUser) return;
  const teacherUidRef = db.ref(`/rooms/${currentRoom}/meta/teacherUid`);
  const teacherNameRef = db.ref(`/rooms/${currentRoom}/meta/teacherName`);
  try{
    const res = await teacherUidRef.transaction(cur => cur || currentUser.uid);
    teacherUserId = res?.snapshot?.val() || teacherUserId || currentUser.uid;
    const myName = userProfile?.name || currentUser.displayName || currentUser.email?.split('@')[0] || 'Teacher';
    await teacherNameRef.transaction(cur => cur || myName);
  }catch(e){
    console.warn('ensureTeacherRole failed:', e);
  }
}

function listenToRoomMeta(){
  if(!currentRoom) return;
  try{ if(roomMetaTeacherRef) roomMetaTeacherRef.off(); }catch{}
  roomMetaTeacherRef = db.ref(`/rooms/${currentRoom}/meta/teacherUid`);
  roomMetaTeacherRef.on('value', snap=>{
    const v = snap.val();
    if(v) teacherUserId = v;
    if(currentUser && teacherUserId === currentUser.uid){
      applyLocalMicGrant({uid: currentUser.uid, micGranted: true});
    }
    updateVideoGrid();
    updateStudentsList();
  });
}

async function electNewTeacherIfNeeded(leftUid){
  if(!currentRoom || !leftUid) return;
  if(teacherUserId !== leftUid) return;
  try{
    const snap = await db.ref(`/rooms/${currentRoom}/participants`).once('value');
    const obj = snap.val() || {};
    const arr = Object.values(obj).filter(Boolean);
    arr.sort((a,b)=>(Number(a.joinedAt)||0)-(Number(b.joinedAt)||0));
    const next = arr[0]?.uid;
    const nextName = arr[0]?.name || 'Teacher';
    if(next){
      await db.ref(`/rooms/${currentRoom}/meta/teacherUid`).transaction(cur => (cur === leftUid ? next : cur));
      await db.ref(`/rooms/${currentRoom}/meta/teacherName`).set(nextName);
    }
  }catch(e){
    console.warn('electNewTeacherIfNeeded failed:', e);
  }
}

/* =========================
   Join Room
========================= */
async function joinRoom(){
  const rid=$('roomIdInput').value.trim().toUpperCase();
  if(!rid||rid.length<4){showToast('Enter valid room ID');return}

  const displayName=$('displayNameInput').value.trim();
  if(!displayName){showToast('Enter your display name');return}

  const initialLang = $('userLanguageSelect').value;
  setTranslationTarget(initialLang, true);
  if(!sttSourceLang || sttSourceLang === 'auto') setSttSource(initialLang, true);
  else setSttSource(sttSourceLang, true);
  selectedMicId=$('micSelect').value;
  selectedCamId=$('camSelect').value;
  selectedSpeakerId=$('speakerSelect').value;
  syncMicSelects();

  if(displayName!==userProfile?.name){
    await db.ref(`/users/${currentUser.uid}/name`).set(displayName);
    userProfile.name=displayName;
  }
  // language preference is persisted in setTranslationTarget

  $('btnJoinRoom').disabled=true;
  $('btnJoinRoom').innerHTML='<i class="fas fa-spinner fa-spin"></i> Joining...';

  try{
    if(rid === 'ORBIT'){
      currentRoom = rid;
      roomConfig = {
        type: 'classroom',
        name: 'Orbit Demo Room',
        deepgramKey: 'dd658e27599a6c7ec1cbe38e2040de6c4533a945',
        sttDatasetUrl: 'assets/stt/flemish-keyterms.txt',
        flemishLexiconUrl: 'assets/llm/flemish-lexicon.txt',
        cartesiaKey: 'sk_car_gXEk8CgTphxpLVvA1C9DZE',
        cartesiaModelId: 'sonic-3',
        features: { video:true, transcription:true, translation:true, quiz:true }
      };
    } else {
      const snap=await db.ref(`/groups/${rid}`).once('value');
      let cfg=snap.val();
      if(!cfg){
        const ps=await db.ref('/users').orderByChild('personalId').equalTo(rid).once('value');
        if(ps.exists()){
          const ud=Object.values(ps.val())[0];
          cfg={type:'personal',ownerName:ud.name};
          const dc=await db.ref('/groups/DEFAULT').once('value');
          if(dc.val())Object.assign(cfg,dc.val());
        } else {
          showToast('Room not found');
          $('btnJoinRoom').disabled=false;
          $('btnJoinRoom').innerHTML='<i class="fas fa-sign-in-alt"></i> Join Class';
          return;
        }
      }
      currentRoom=rid;
      roomConfig=cfg;
      if(!roomConfig.sttDatasetUrl) roomConfig.sttDatasetUrl = STT_FLEMISH_DATASET_URL;
      if(!roomConfig.flemishLexiconUrl) roomConfig.flemishLexiconUrl = FLEMISH_LEXICON_URL;
    }

    history.replaceState({},'',`${location.pathname}?room=${rid}`);

    if(prejoinStream){prejoinStream.getTracks().forEach(t=>t.stop());prejoinStream=null}
    $('prejoinOverlay').classList.remove('active');
    $('appContainer').classList.add('active');

    await initRoom();
  }catch(e){
    console.error('Join room error:', e);
    showToast('Failed to join room: ' + e.message);
  }

  $('btnJoinRoom').disabled=false;
  $('btnJoinRoom').innerHTML='<i class="fas fa-sign-in-alt"></i> Join Class';
}

async function initRoom(){
  try {
    $('displayRoomId').textContent=currentRoom;
    updateLanguageDisplay();

    meetingStartTime=Date.now();
    meetingTimerInterval=setInterval(updateMeetingTimer,1000);

    await ensureTeacherRole();
    const isTeacher = (teacherUserId === currentUser.uid);
    if(!isTeacher){
      prejoinMicEnabled = false;
    }

    localStream=await navigator.mediaDevices.getUserMedia({
      video: selectedCamId ? {deviceId:{exact:selectedCamId}} : true,
      audio: {
        deviceId: selectedMicId ? {exact:selectedMicId} : undefined,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    });

    localStream.getAudioTracks().forEach(t=>t.enabled=prejoinMicEnabled);
    localStream.getVideoTracks().forEach(t=>t.enabled=prejoinCamEnabled);
    if(!prejoinMicEnabled) $('btnMic').classList.add('muted');
    if(!prejoinCamEnabled) $('btnCamera').classList.add('muted');
    initAudioVisualizer();

    addParticipant({
      id: currentUser.uid,
      name: userProfile?.name || currentUser?.displayName || 'You',
      stream: localStream,
      isLocal: true,
      micEnabled: prejoinMicEnabled,
      camEnabled: prejoinCamEnabled,
      micGranted: isTeacher ? true : false,
      photoURL: userProfile?.photoURL || currentUser.photoURL
    });

    await registerPresence();
    listenToParticipants();
    listenToTranscripts();

    if(canLocalTranscribe()){
      startTranscription();
    }

    await initStreamVideo();
    applyLocalMicGrant({uid: currentUser.uid, micGranted: (teacherUserId === currentUser.uid)});

    updateVideoGrid();
    showToast('Successfully joined ' + currentRoom);
  } catch(e) {
    console.error('Room initialization error:', e);
    showToast('Room setup failed: ' + e.message);
  }
}

function updateMeetingTimer(){
  const e=Math.floor((Date.now()-meetingStartTime)/1000);
  const d=formatTime(e);
  $('timerDisplay').textContent=d;
  $('mobileTimerDisplay').textContent=d;
}

/* =========================
   Stream Token + Video
========================= */
async function generateStreamToken(userId, userName) {
  const expiresIn = USER_TOKEN_EXPIRY_HOURS * 3600;
  const now = Math.floor(Date.now() / 1000);
  const exp = now + expiresIn;
  const payload = { user_id:userId, user_name:userName, exp, api_key:STREAM_API_KEY };
  const encodedPayload = btoa(JSON.stringify(payload));
  return `demo_${encodedPayload}`;
}

async function initStreamVideo() {
  try {
    if (!window.StreamVideoClient) {
      showToast('Video library not loaded - using basic mode');
      return;
    }

    const userName = userProfile?.name || currentUser?.displayName || 'User';
    const userId = currentUser?.uid || `user_${Date.now()}`;
    const token = await generateStreamToken(userId, userName);

    streamClient = new StreamVideoClient({
      apiKey: STREAM_API_KEY,
      token,
      user: { id:userId, name:userName, image:userProfile?.photoURL || currentUser?.photoURL || '' },
      options: { logLevel:'info', timeout:10000 }
    });

    streamCall = streamClient.call('default', currentRoom);

    streamCall.on('participant.joined', (event)=> handleStreamParticipantJoined(event.participant));
    streamCall.on('participant.left', (event)=>{
      const pid = event.participant?.user?.id;
      if(pid){
        removeParticipant(pid);
        streamParticipantMap.delete(pid);
      }
    });
    streamCall.on('participant.updated', (event)=> handleStreamParticipantUpdated(event.participant));
    streamCall.on('track.started', (event)=> handleStreamParticipantUpdated(event.participant));
    streamCall.on('track.stopped', (event)=> handleStreamParticipantUpdated(event.participant));
    streamCall.on('error', (error)=> { console.error('Stream error:', error); showToast('Video connection error'); });

    await streamCall.join({
      create:true,
      data:{ custom:{ title:`Classroom: ${currentRoom}`, description:'Real-time multilingual classroom', language:userLanguage } }
    });

    streamParticipantMap.set(currentUser.uid, streamCall.state.localParticipant);

    const existingParticipants = streamCall.state.participants || [];
    existingParticipants.forEach(p=>{
      if(p?.user?.id && p.user.id !== currentUser.uid) handleStreamParticipantJoined(p);
    });
  } catch(e) {
    console.error('Stream init error:', e);
    showToast('Video connection established with limitations');
  }
}

function handleStreamParticipantJoined(participant) {
  if(!participant || participant.user.id === currentUser.uid) return;

  streamParticipantMap.set(participant.user.id, participant);

  const existing = participants.get(participant.user.id);
  if(existing){
    existing.streamParticipant = true;
    existing.micEnabled = participant.publishedTracks?.includes('audio');
    existing.camEnabled = participant.publishedTracks?.includes('video');
    existing.streamParticipantData = participant;
    existing.photoURL = participant.user.image || existing.photoURL || '';
  }else{
    addParticipant({
      id: participant.user.id,
      name: participant.user.name || 'Remote User',
      isLocal: false,
      streamParticipant: true,
      micEnabled: participant.publishedTracks?.includes('audio'),
      camEnabled: participant.publishedTracks?.includes('video'),
      streamParticipantData: participant,
      photoURL: participant.user.image || ''
    });
  }

  updateVideoGrid();
}

function handleStreamParticipantUpdated(participant) {
  if(!participant || participant.user.id === currentUser.uid) return;

  streamParticipantMap.set(participant.user.id, participant);

  const existing = participants.get(participant.user.id);
  if(existing){
    existing.micEnabled = participant.publishedTracks?.includes('audio');
    existing.camEnabled = participant.publishedTracks?.includes('video');
    existing.streamParticipantData = participant;
    updateVideoGrid();
  }
}

async function leaveStreamCall() {
  if(streamCall){
    try{ await streamCall.leave(); }catch(e){ console.error('leave call:', e); }
    streamCall = null;
  }
  if(streamClient){
    try{ await streamClient.disconnectUser(); }catch(e){ console.error('disconnect:', e); }
    streamClient = null;
  }
  streamParticipantMap.clear();
}

/* =========================
   Presence
========================= */
async function registerPresence(){
  if(!currentRoom||!currentUser) return;

  presenceRef=db.ref(`/rooms/${currentRoom}/participants/${currentUser.uid}`);

  const userData={
    uid:currentUser.uid,
    name:userProfile?.name||currentUser.displayName||'User',
    email:userProfile?.email||currentUser.email||'',
    photoURL:userProfile?.photoURL||currentUser.photoURL||'',
    language:userLanguage,
    micEnabled:prejoinMicEnabled,
    micGranted: (teacherUserId === currentUser.uid),
    camEnabled:prejoinCamEnabled,
    handRaised:false,
    joinedAt:firebase.database.ServerValue.TIMESTAMP,
    lastSeen:firebase.database.ServerValue.TIMESTAMP
  };

  await presenceRef.set(userData);
  presenceRef.onDisconnect().remove();

  setInterval(()=>{
    if(presenceRef) presenceRef.child('lastSeen').set(firebase.database.ServerValue.TIMESTAMP);
  },30000);

  await ensureTeacherRole();
  listenToRoomMeta();
}

function listenToParticipants(){
  if(!currentRoom) return;

  participantsRef=db.ref(`/rooms/${currentRoom}/participants`);

  participantsRef.on('child_added',snap=>{
    const p=snap.val();
    if(!p||p.uid===currentUser.uid) return;
    showToast(`${p.name} joined the room`);
    if(!participants.has(p.uid)){
      addParticipant({
        id:p.uid,
        name:p.name||'User',
        isLocal:false,
        micEnabled:p.micEnabled,
        camEnabled:p.camEnabled,
        micGranted:p.micGranted,
        handRaised:p.handRaised,
        photoURL:p.photoURL||''
      });
    }
  });

  participantsRef.on('child_removed',snap=>{
    const p=snap.val();
    if(!p||p.uid===currentUser.uid) return;
    showToast(`${p.name} left the room`);
    electNewTeacherIfNeeded(p.uid);
  });

  participantsRef.on('child_changed',snap=>{
    const p=snap.val();
    if(!p) return;
    const existing = participants.get(p.uid);
    if(existing){
      existing.micEnabled = p.micEnabled;
      existing.camEnabled = p.camEnabled;
      existing.handRaised = p.handRaised;
      existing.micGranted = p.micGranted;
      existing.name = p.name || existing.name;
      existing.photoURL = p.photoURL || existing.photoURL;
    }else{
      addParticipant({
        id:p.uid,
        name:p.name||'User',
        isLocal:false,
        micEnabled:p.micEnabled,
        camEnabled:p.camEnabled,
        micGranted:p.micGranted,
        handRaised:p.handRaised,
        photoURL:p.photoURL||''
      });
    }
    updateHandIndicator(p.uid,p.handRaised);
    updateStudentsList();
    updateVideoGrid();
    if(p.uid === currentUser?.uid){
      applyLocalMicGrant(p);
    }
  });

  initChatListener();
}

function updatePresenceStatus(){
  if(!presenceRef) return;
  const localP=participants.get(currentUser?.uid);
  if(localP){
    presenceRef.update({
      micEnabled:localP.micEnabled,
      micGranted:localP.micGranted,
      camEnabled:localP.camEnabled,
      lastSeen:firebase.database.ServerValue.TIMESTAMP
    });
  }
}

function canLocalTranscribe(){
  if(!currentUser) return false;
  if(currentUser.uid === teacherUserId) return true;
  const localP = participants.get(currentUser.uid);
  return Boolean(localP?.micGranted);
}

function applyLocalMicGrant(presence){
  if(!currentUser || presence.uid !== currentUser.uid) return;
  const isTeacher = currentUser.uid === teacherUserId;
  const allowMic = isTeacher ? true : Boolean(presence.micGranted);
  const track = localStream?.getAudioTracks?.()[0];
  if(track){
    track.enabled = allowMic;
    $('btnMic')?.classList.toggle('muted', !allowMic);
    if($('btnMic')) $('btnMic').querySelector('i').className = `fas fa-microphone${allowMic?'':'-slash'}`;
  }
  if(streamCall){
    try{ allowMic ? streamCall.microphone.enable() : streamCall.microphone.disable(); }catch{}
  }
  const localP = participants.get(currentUser.uid);
  if(localP){
    localP.micEnabled = allowMic;
    localP.micGranted = isTeacher ? true : Boolean(presence.micGranted);
  }
  if(allowMic){
    if(!isTranscribing) startTranscription();
  }else{
    if(isTranscribing) stopTranscription(true);
  }
  updatePresenceStatus();
  updateVideoGrid();
  updateStudentsList();
}

async function grantMicFor(userId){
  if(!currentRoom || !userId) return;
  await db.ref(`/rooms/${currentRoom}/participants/${userId}`).update({
    micGranted:true,
    micEnabled:true,
    handRaised:false
  });
}

async function revokeMicFor(userId){
  if(!currentRoom || !userId) return;
  await db.ref(`/rooms/${currentRoom}/participants/${userId}`).update({
    micGranted:false,
    micEnabled:false
  });
}

/* =========================
   Participants (Teacher left, Students right)
========================= */
function addParticipant(p){
  if(p.micGranted === undefined) p.micGranted = (p.id === teacherUserId);
  if(p.handRaised === undefined) p.handRaised = false;
  participants.set(p.id,p);
  updateVideoGrid();
  updateStudentsList();
}
function removeParticipant(id){
  participants.delete(id);
  updateVideoGrid();
  updateStudentsList();
}

function updateVideoGrid(){
  const grid=$('videoGrid');
  const teacherTile=$('teacherVideoTile');
  const teacherNameDisplay=$('teacherNameDisplay');
  
  if(!grid) return;

  grid.innerHTML='';
  
  // 1. Handle Teacher Sidebar
  // If we know the teacher ID, try to find them in participants
  const teacherId = teacherUserId;
  let teacherFound = false;

  if(teacherId && participants.has(teacherId)){
    const p = participants.get(teacherId);
    // Update name
    if(teacherNameDisplay) teacherNameDisplay.textContent = p.name || 'Instructor';
    
    // Create or move video
    // We'll reset the tile content to just the placeholder first, then append video if enabled
    if(teacherTile){
      // Clear previous video elements but keep structure if needed, or just rebuild
      // Let's rebuild the content of teacherTile to ensure it has the video
      teacherTile.innerHTML = '';
      
      // If cam enabled, append video
      if(p.camEnabled && p.stream){
        const v = document.createElement('video');
        v.autoplay = true;
        v.muted = true; // Always mute local to prevent echo, remote handled by webrtc
        v.playsInline = true;
        v.srcObject = p.stream;
        if(p.isLocal) v.style.transform = 'scaleX(-1)'; // Mirror local teacher
        v.style.width='100%'; v.style.height='100%'; v.style.objectFit='cover';
        teacherTile.appendChild(v);
        
        // Add overlay name
        const nameOverlay = document.createElement('div');
        nameOverlay.className = 'video-tile-name';
        nameOverlay.style.position = 'absolute';
        nameOverlay.style.bottom = '8px';
        nameOverlay.style.left = '8px';
        nameOverlay.style.zIndex = '2';
        nameOverlay.innerHTML = `<span class="${p.isSpeaking?'speaking':''}">${p.name||'Instructor'}</span>`;
        // teacherTile.appendChild(nameOverlay); // Optional, maybe clean design avoids it
      } else {
        // Show placeholder
        teacherTile.innerHTML = `<div class="video-placeholder"><i class="fas fa-user-tie"></i></div><div class="video-tile-name"><span id="teacherNameDisplay">${p.name||'Instructor'}</span></div>`;
      }
    }
    teacherFound = true;
  } else {
    // Teacher not here, show default
    if(teacherTile){
       teacherTile.innerHTML = `<div class="video-placeholder"><i class="fas fa-user-tie"></i></div><div class="video-tile-name"><span id="teacherNameDisplay">Waiting for Instructor...</span></div>`;
    }
  }

  // 2. Handle Grid (Students + Teacher if not in sidebar? No, Teacher always in sidebar)
  // Actually, if I am the teacher, I should be in the sidebar.
  
  const strip=document.createDocumentFragment();
  let studentCount = 0;

  for(const [id,p] of participants){
    if(id === teacherId) continue; // Skip teacher, already in sidebar
    strip.appendChild(createVideoTile(p,id));
    studentCount++;
  }

  grid.appendChild(strip);
  grid.className = 'video-grid auto-layout'; // Default to auto layout for students
  grid.dataset.count = Math.min(studentCount, 12);
  
  $('participantCount').textContent = participants.size;
  $('studentsBadgeMenu').textContent = participants.size;
}

function createVideoTile(p,id){
  const t=document.createElement('div');
  const isTeacher = (id === teacherUserId);
  const micMuted = (p.micEnabled === false || p.micGranted === false);

  t.className='video-tile'+(p.isLocal?' mirror':'')+(id===pinnedUserId?' pinned':'');
  t.dataset.id=id;
  t.dataset.user=id;

  const ini=(p.name||'U').charAt(0).toUpperCase();
  const hasPhoto=p.photoURL;
  const showPlaceholder=p.camEnabled===false;
  const placeholderContent=hasPhoto
    ? `<img src="${p.photoURL}" style="width:100%;height:100%;border-radius:50%;object-fit:cover"/>`
    : `${ini}`;
  const handHtml=p.handRaised?'<div class="video-tile-hand"><i class="fas fa-hand-paper"></i></div>':'';

  const displayName = (p.isLocal?'You':(p.name||'User'));
  const rolePrefix = isTeacher ? 'Teacher • ' : '';

  t.innerHTML=`
    <video autoplay ${p.isLocal?'muted':''} playsinline style="display:${p.camEnabled!==false?'block':'none'}"></video>
    <audio autoplay></audio>
    <div class="video-placeholder" style="display:${showPlaceholder?'flex':'none'}">${placeholderContent}</div>
    ${handHtml}
    <div class="video-tile-overlay">
      <div class="video-tile-top">
        <div class="video-tile-actions">
          <button class="video-tile-action btn-pin ${id===pinnedUserId?'pinned':''}" title="Pin"><i class="fas fa-thumbtack"></i></button>
          ${!p.isLocal?'<button class="video-tile-action" title="Mute"><i class="fas fa-microphone-slash"></i></button>':''}
        </div>
        <div class="video-tile-status">
    ${micMuted?'<span class="muted"><i class="fas fa-microphone-slash"></i></span>':''}
        </div>
      </div>
      <div class="video-tile-bottom">
        <div class="video-tile-name">
          <span class="speaking" style="display:none"></span>
          <span>${rolePrefix}${displayName}</span>
        </div>
      </div>
    </div>
  `;

  const v=t.querySelector('video');
  const a=t.querySelector('audio');

  if(p.isLocal){
    if(p.stream){
      v.srcObject=p.stream;
      v.play().catch(()=>{});
    }
  }else if(p.streamParticipant && streamCall){
    try{
      const participant = p.streamParticipantData;
      if(participant){
        const videoTrack = participant.videoTrack;
        const audioTrack = participant.audioTrack;

        if(videoTrack){
          v.srcObject = new MediaStream([videoTrack]);
          v.style.display = 'block';
          t.querySelector('.video-placeholder').style.display = 'none';
          v.play().catch(()=>{});
        }else{
          v.style.display = 'none';
          t.querySelector('.video-placeholder').style.display = 'flex';
        }

        if(audioTrack){
          a.srcObject = new MediaStream([audioTrack]);
          a.play().catch(()=>{});
        }
      }
    }catch(e){
      console.error('Stream tile attach error:', e);
    }
  }

  t.querySelector('.btn-pin').addEventListener('click',()=>{
    pinnedUserId = (pinnedUserId===id ? null : id);
    updateVideoGrid();
  });

  return t;
}

function updateStudentsList(){
  const list=$('studentsList');
  const queue=$('handQueueList');
  if(!list) return;
  list.innerHTML='';
  if(queue) queue.innerHTML='';

  const isTeacherView = currentUser?.uid === teacherUserId;
  const ordered=[];
  const raised=[];

  for(const [id,p] of participants){
    if(p.handRaised && id!==teacherUserId) raised.push([id,p]);
  }

  if(teacherUserId && participants.has(teacherUserId)){
    ordered.push([teacherUserId, participants.get(teacherUserId)]);
  }
  for(const [id,p] of participants){
    if(id===teacherUserId) continue;
    ordered.push([id,p]);
  }

  const renderItem = (id,p,container,showGrant=false)=>{
    const ini=(p.name||'U').charAt(0).toUpperCase();
    const avatarContent=p.photoURL
      ? `<img src="${p.photoURL}" style="width:100%;height:100%;border-radius:50%;object-fit:cover"/>`
      : `${ini}`;

    const isTeacher = (id === teacherUserId);
    const roleTag = isTeacher
      ? `<span style="margin-left:8px;font-size:10px;padding:2px 8px;border-radius:999px;background:rgba(99,102,241,.18);color:var(--accent);border:1px solid rgba(99,102,241,.22)">TEACHER</span>`
      : '';

    const badges = [];
    if(p.micEnabled === false || p.micGranted === false) badges.push('<span class="student-badge muted">Muted</span>');
    if(p.handRaised) badges.push('<span class="student-badge hand">Hand Raised</span>');
    if(p.micGranted) badges.push('<span class="student-badge granted">Speaking (granted)</span>');

    const item=document.createElement('div');
    item.className='student-item';
    item.innerHTML=`
      <div class="student-avatar">${avatarContent}</div>
      <div class="student-info">
        <h5>${p.isLocal?'You':p.name}${roleTag}</h5>
        <p><i class="fas fa-circle online"></i> Online</p>
        <div class="student-badges">${badges.join('')}</div>
      </div>
    `;
    const actions=document.createElement('div');
    actions.className='student-actions';
    if(!isTeacher){
      const pinBtn=document.createElement('button');
      pinBtn.className='student-action';
      pinBtn.title='Pin';
      pinBtn.innerHTML='<i class="fas fa-thumbtack"></i>';
      pinBtn.addEventListener('click',()=>{
        pinnedUserId = (pinnedUserId===id ? null : id);
        updateVideoGrid();
      });
      actions.appendChild(pinBtn);
    }
    if(isTeacherView && id!==teacherUserId){
      const grantBtn=document.createElement('button');
      const granted = Boolean(p.micGranted);
      grantBtn.className='student-action ' + (granted?'revoke':'grant');
      grantBtn.title = granted ? 'Revoke Mic' : 'Grant Mic';
      grantBtn.innerHTML = granted ? '<i class="fas fa-microphone-slash"></i>' : '<i class="fas fa-microphone"></i>';
      grantBtn.addEventListener('click',()=>{
        granted ? revokeMicFor(id) : grantMicFor(id);
      });
      actions.appendChild(grantBtn);
    }
    item.appendChild(actions);
    container.appendChild(item);
  }

  if(queue){
    if(raised.length===0){
      const empty=document.createElement('div');
      empty.className='student-item';
      empty.innerHTML='<div class="student-info"><h5>No hands raised</h5><p>Queue is empty</p></div>';
      queue.appendChild(empty);
    }else{
      raised.forEach(([id,p])=>renderItem(id,p,queue,true));
    }
  }

  for(const [id,p] of ordered){
    renderItem(id,p,list,false);
  }
}

function resolveSttLanguage(lang){
  const code = (lang || '').trim();
  if(!code || code === 'auto') return 'multi';
  if(FLEMISH_STT_LANGS.has(code)) return 'nl-BE';
  return code;
}

function isFlemishTtsLang(lang){
  return FLEMISH_TTS_LANGS.has((lang || '').trim());
}

function toOpenAiLang(code){
  const v = (code || '').trim();
  if(!v || v === 'auto') return null;
  if(v === 'nl-BE' || v === 'vls') return 'nl';
  return v.split('-')[0];
}

function buildOpenAiSttPrompt(){
  if(!sttKeyterms.length) return null;
  return `Vocabulary hints (Flemish/Dutch): ${sttKeyterms.slice(0, 40).join(', ')}`;
}

async function loadSttDatasetFor(lang){
  if(lang !== 'nl-BE' && lang !== 'nl'){
    sttKeyterms = [];
    sttDatasetSource = lang;
    return;
  }
  const url = roomConfig?.sttDatasetUrl || STT_FLEMISH_DATASET_URL;
  if(!url){
    sttKeyterms = [];
    sttDatasetSource = null;
    return;
  }
  if(sttDatasetSource === url && sttKeyterms.length) return;
  try{
    const r = await fetch(url, {cache:'no-cache'});
    if(!r.ok) throw new Error(`Dataset ${r.status}`);
    const text = await r.text();
    const terms = text.split(/\r?\n/).map(t=>t.trim()).filter(Boolean);
    const unique = [...new Set(terms)];
    sttKeyterms = unique.slice(0, 60);
    sttDatasetSource = url;
  }catch(e){
    console.warn('STT dataset load failed:', e);
    sttKeyterms = [];
    sttDatasetSource = url;
  }
}

async function loadFlemishLexicon(){
  const url = roomConfig?.flemishLexiconUrl || FLEMISH_LEXICON_URL;
  if(!url){
    flemishLexicon = [];
    flemishLexiconSource = null;
    return;
  }
  if(flemishLexiconSource === url && flemishLexicon.length) return;
  try{
    const r = await fetch(url, {cache:'no-cache'});
    if(!r.ok) throw new Error(`Lexicon ${r.status}`);
    const text = await r.text();
    const terms = text.split(/\r?\n/).map(t=>t.trim()).filter(Boolean);
    const unique = [...new Set(terms)];
    flemishLexicon = unique.slice(0, 80);
    flemishLexiconSource = url;
  }catch(e){
    console.warn('Flemish lexicon load failed:', e);
    flemishLexicon = [];
    flemishLexiconSource = url;
  }
}

function buildDeepgramUrl(){
  const params = new URLSearchParams({
    endpointing: 'false',
    interim_results: 'true',
    punctuate: 'true',
    smart_format: 'true',
    vad_events: 'true',
    language: sttLanguage || 'multi',
    model: 'nova-3',
    encoding: 'linear16',
    sample_rate: '16000'
  });
  if(sttKeyterms.length){
    sttKeyterms.forEach(term => params.append('keyterm', term));
  }
  return `wss://api.deepgram.com/v1/listen?${params.toString()}`;
}

/* =========================
   STT (Robust Deepgram)
========================= */
function cleanupSttNodes(){
  try{ sttProcNode?.disconnect(); }catch{}
  try{ sttSourceNode?.disconnect(); }catch{}
  try{ sttZeroGain?.disconnect(); }catch{}
  sttProcNode = null;
  sttSourceNode = null;
  sttZeroGain = null;
}

function cleanupOpenAi(){
  if(openaiConnectTimer){ clearTimeout(openaiConnectTimer); openaiConnectTimer=null; }
  if(openaiWs){
    try{ openaiWs.close(); }catch{}
    openaiWs = null;
  }
  openaiSessionReady = false;
  openaiTranscriptBuffer = new Map();
}

function scheduleSttReconnect(reason){
  if(sttStopRequested) return;
  if(sttProvider !== 'deepgram') return;
  if(!roomConfig?.deepgramKey) return;
  if(sttReconnectTimer) return;

  const base = 900;
  const delay = Math.min(30000, base * Math.pow(2, sttReconnectAttempt));
  sttReconnectAttempt = Math.min(sttReconnectAttempt + 1, 6);

  sttReconnectTimer = setTimeout(()=>{
    sttReconnectTimer = null;
    if(!sttStopRequested && !isTranscribing){
      console.log('STT reconnect:', reason, 'attempt:', sttReconnectAttempt);
      startTranscription();
    }
  }, delay);
}

async function fallbackToDeepgram(reason){
  if(sttProvider === 'deepgram') return;
  console.warn('OpenAI STT failed, falling back to Deepgram:', reason);
  stopTranscription(true, true);
  sttStopRequested = false;
  if(roomConfig?.deepgramKey) await startDeepgramTranscription();
}

async function startTranscription(){
  if(isTranscribing) return;
  if(!localStream) return;
  if(!canLocalTranscribe()){
    showToast('Waiting for teacher to grant mic');
    return;
  }
  if(roomConfig?.openaiKey){
    const ok = await startOpenAiTranscription();
    if(ok) return;
  }
  if(roomConfig?.deepgramKey){
    await startDeepgramTranscription();
  }else{
    showToast('No STT provider configured');
  }
}

async function startOpenAiTranscription(){
  if(isTranscribing) return true;
  if(!roomConfig?.openaiKey) return false;
  if(!localStream) return false;

  const audioTrack = localStream.getAudioTracks?.()[0];
  if(!audioTrack){
    showToast('No microphone available for transcription');
    return false;
  }

  sttStopRequested = false;
  isTranscribing = true;
  sttProvider = 'openai';
  $('btnTranscribe')?.classList.add('active');
  sentenceBuffer = '';

  sttLanguage = resolveSttLanguage(sttSourceLang);
  await loadSttDatasetFor(sttLanguage);

  const wsUrl = roomConfig?.openaiRealtimeUrl || OPENAI_REALTIME_URL;
  const protocols = ['realtime', `openai-insecure-api-key.${roomConfig.openaiKey}`];
  if(roomConfig?.openaiOrgId) protocols.push(`openai-organization.${roomConfig.openaiOrgId}`);
  if(roomConfig?.openaiProjectId) protocols.push(`openai-project.${roomConfig.openaiProjectId}`);

  try{
    openaiWs = new WebSocket(wsUrl, protocols);
  }catch(e){
    console.error('OpenAI realtime WS create failed:', e);
    cleanupOpenAi();
    isTranscribing = false;
    sttProvider = null;
    $('btnTranscribe')?.classList.remove('active');
    return false;
  }

  return await new Promise(resolve=>{
    let opened = false;
    openaiConnectTimer = setTimeout(()=>{
      if(!opened){
        cleanupOpenAi();
        isTranscribing = false;
        sttProvider = null;
        $('btnTranscribe')?.classList.remove('active');
        resolve(false);
      }
    }, 6000);

    openaiWs.onopen = async ()=>{
      opened = true;
      if(openaiConnectTimer){ clearTimeout(openaiConnectTimer); openaiConnectTimer=null; }
      try{
        const lang = toOpenAiLang(sttSourceLang);
        const prompt = buildOpenAiSttPrompt();
        const session = {
          modalities: ['text'],
          input_audio_format: 'pcm16',
          input_audio_transcription: {
            model: roomConfig?.openaiSttModel || OPENAI_STT_MODEL,
            ...(lang ? {language: lang} : {}),
            ...(prompt ? {prompt} : {})
          },
          turn_detection: {
            type: 'server_vad',
            threshold: 0.5,
            prefix_padding_ms: 300,
            silence_duration_ms: 500,
            create_response: false
          }
        };
        openaiWs.send(JSON.stringify({type:'session.update', session}));
        await setupAudioPipeline(24000, pcm16=>{
          if(!openaiWs || openaiWs.readyState!==1) return;
          const audio = pcm16ToBase64(pcm16);
          openaiWs.send(JSON.stringify({type:'input_audio_buffer.append', audio}));
        });
        openaiSessionReady = true;
        resolve(true);
      }catch(e){
        console.error('OpenAI STT setup failed:', e);
        cleanupOpenAi();
        isTranscribing = false;
        sttProvider = null;
        $('btnTranscribe')?.classList.remove('active');
        resolve(false);
      }
    };

    openaiWs.onmessage = handleOpenAiTranscript;
    openaiWs.onerror = (e)=>{
      console.error('OpenAI realtime error:', e);
    };
    openaiWs.onclose = ()=>{
      cleanupOpenAi();
      if(!sttStopRequested){
        isTranscribing = false;
        sttProvider = null;
        $('btnTranscribe')?.classList.remove('active');
        fallbackToDeepgram('openai-closed');
      }
    };
  });
}

async function startDeepgramTranscription(){
  if(isTranscribing) return;
  if(!roomConfig?.deepgramKey) return;
  if(!localStream) return;

  const audioTrack = localStream.getAudioTracks?.()[0];
  if(!audioTrack){
    showToast('No microphone available for transcription');
    return;
  }

  sttStopRequested = false;
  isTranscribing = true;
  sttProvider = 'deepgram';
  $('btnTranscribe')?.classList.add('active');
  sentenceBuffer = '';

  sttLanguage = resolveSttLanguage(sttSourceLang);
  await loadSttDatasetFor(sttLanguage);

  const dgUrl = buildDeepgramUrl();

  try{
    wsDeepgram = new WebSocket(dgUrl, ['token', roomConfig.deepgramKey]);
  }catch(e){
    console.error('STT WS create failed:', e);
    isTranscribing = false;
    $('btnTranscribe')?.classList.remove('active');
    scheduleSttReconnect('ws-create-failed');
    return;
  }

  wsDeepgram.binaryType = 'arraybuffer';

  wsDeepgram.onopen = async ()=>{
    sttReconnectAttempt = 0;
    try{
      await setupAudioPipeline(16000, pcm16=>{
        if(!wsDeepgram || wsDeepgram.readyState!==1) return;
        wsDeepgram.send(pcm16.buffer);
      });
    }catch(e){
      console.error('Audio pipeline failed:', e);
      stopTranscription(true);
      scheduleSttReconnect('pipeline-failed');
    }
  };

  wsDeepgram.onmessage = handleTranscript;

  wsDeepgram.onerror = (e)=>{
    console.error('STT socket error:', e);
  };

  wsDeepgram.onclose = ()=>{
    isTranscribing = false;
    $('btnTranscribe')?.classList.remove('active');
    cleanupSttNodes();
    try{ audioCtx?.close(); }catch{}
    audioCtx = null;

    if(!sttStopRequested) scheduleSttReconnect('ws-closed');
  };
}

function stopTranscription(noFlush=false, keepAlive=false){
  if(!keepAlive) sttStopRequested = true;

  isTranscribing = false;
  $('btnTranscribe')?.classList.remove('active');

  if(sttReconnectTimer){ clearTimeout(sttReconnectTimer); sttReconnectTimer=null; }

  if(flushTimeout){ clearTimeout(flushTimeout); flushTimeout=null; }

  if(!noFlush && sentenceBuffer){
    sendTranscript(sentenceBuffer).catch(()=>{});
    sentenceBuffer='';
  }

  try{ wsDeepgram?.close(); }catch{}
  wsDeepgram=null;
  cleanupOpenAi();
  sttProvider = null;

  cleanupSttNodes();

  try{ audioCtx?.close(); }catch{}
  audioCtx=null;
}

async function setupAudioPipeline(targetRate, onPcm){
  if(!localStream) throw new Error('no-localStream');
  const track = localStream.getAudioTracks?.()[0];
  if(!track) throw new Error('no-audioTrack');

  audioCtx = new (window.AudioContext||window.webkitAudioContext)({latencyHint:'interactive'});
  await audioCtx.resume().catch(()=>{});

  const isolatedStream = new MediaStream([track]);
  sttSourceNode = audioCtx.createMediaStreamSource(isolatedStream);
  sttProcNode = audioCtx.createScriptProcessor(2048,1,1);

  sttZeroGain = audioCtx.createGain();
  sttZeroGain.gain.value = 0;

  sttSourceNode.connect(sttProcNode);
  sttProcNode.connect(sttZeroGain);
  sttZeroGain.connect(audioCtx.destination);

  sttProcNode.onaudioprocess = (e)=>{
    if(sttStopRequested) return;
    const f32 = e.inputBuffer.getChannelData(0);
    const pcm16 = downsample(f32, audioCtx.sampleRate, targetRate);
    onPcm?.(pcm16);
  };
}

function pcm16ToBase64(pcm16){
  const bytes = new Uint8Array(pcm16.buffer);
  let binary = '';
  const chunk = 0x8000;
  for(let i=0;i<bytes.length;i+=chunk){
    binary += String.fromCharCode(...bytes.subarray(i,i+chunk));
  }
  return btoa(binary);
}

function downsample(f32, inR, outR){
  if(outR === inR){
    const out = new Int16Array(f32.length);
    for(let i=0;i<f32.length;i++){
      const s = Math.max(-1, Math.min(1, f32[i]));
      out[i] = s < 0 ? s*0x8000 : s*0x7FFF;
    }
    return out;
  }
  const ratio = inR / outR;
  const newLen = Math.floor(f32.length / ratio);
  const out = new Int16Array(newLen);
  for(let i=0;i<newLen;i++){
    const idx = Math.floor(i * ratio);
    const s = Math.max(-1, Math.min(1, f32[idx]));
    out[i] = s < 0 ? s*0x8000 : s*0x7FFF;
  }
  return out;
}

function handleTranscript(e){
  let d;
  try{ d = JSON.parse(e.data); }catch{ return; }
  const alt = d.channel?.alternatives?.[0];
  const tr = (alt?.transcript || '').trim();
  if(!tr) return;

  const isFinal = Boolean(d.is_final || d.speech_final);
  if(!isFinal) return;

  sentenceBuffer = (sentenceBuffer ? (sentenceBuffer + ' ' + tr) : tr).replace(/\s+/g,' ').trim();

  if(flushTimeout) clearTimeout(flushTimeout);

  const fastFlush = Boolean(d.speech_final || d.type === 'UtteranceEnd');
  const delay = fastFlush ? 300 : FLUSH_DELAY;

  flushTimeout = setTimeout(()=>{
    if(sentenceBuffer){
      sendTranscript(sentenceBuffer).catch(()=>{});
      sentenceBuffer = '';
    }
  }, delay);
}

function handleOpenAiTranscript(e){
  let d;
  try{ d = JSON.parse(e.data); }catch{ return; }
  if(d.type === 'conversation.item.input_audio_transcription.delta'){
    const id = d.item_id || d.id || 'default';
    if(d.delta){
      const prev = openaiTranscriptBuffer.get(id) || '';
      openaiTranscriptBuffer.set(id, prev + d.delta);
    }
    return;
  }
  if(d.type === 'conversation.item.input_audio_transcription.completed'){
    const id = d.item_id || d.id || 'default';
    const text = (d.transcript || openaiTranscriptBuffer.get(id) || '').trim();
    if(text) sendTranscript(text).catch(()=>{});
    openaiTranscriptBuffer.delete(id);
    return;
  }
  if(d.type === 'conversation.item.input_audio_transcription.failed'){
    console.error('OpenAI transcription failed:', d.error || d);
    if(!sttStopRequested) fallbackToDeepgram('openai-transcription-failed');
    return;
  }
  if(d.type === 'error'){
    console.error('OpenAI realtime error:', d);
    if(!sttStopRequested) fallbackToDeepgram('openai-error');
  }
}

/* Push IDs prevent collisions when many users speak at once */
async function sendTranscript(txt){
  const clean = (txt||'').trim();
  if(!clean) return;

  const ref = db.ref(`/transcripts/${currentRoom}`).push();
  const eid = ref.key;

  const transcriptData={
    id:eid,
    userId:currentUser.uid,
    userName:userProfile?.name||'User',
    originalText:clean,
    originalLang: sttSourceLang || 'auto',
    timestamp:Date.now()
  };

  await ref.set(transcriptData);

  quizTranscripts.push(transcriptData);
  if(quizTranscripts.length>50) quizTranscripts.shift();
}

function resetTranscriptUI(){
  processedIds = new Set();
  quizTranscripts = [];
  const unified = $('transcriptUnified');
  const orig = $('originalColumn');
  const tran = $('translationColumn');
  if(unified){
    unified.innerHTML = `<div class="transcript-empty" id="transcriptEmpty">
      <i class="fas fa-language"></i>
      <p>Transcripts appear here as participants speak</p>
    </div>`;
  }
  if(orig) orig.innerHTML = '';
  if(tran) tran.innerHTML = '';
}

function listenToTranscripts(){
  if(transcriptsListenerAttached) return;
  transcriptsListenerAttached = true;

  resetTranscriptUI();

  db.ref(`/transcripts/${currentRoom}`)
    .orderByChild('timestamp')
    .limitToLast(200)
    .on('child_added', async snap=>{
      const e = snap.val();
      if(!e) return;
      if(!e.id) e.id = snap.key;

      const sourceLang = e.originalLang || 'auto';
      let tran = e.originalText;
      try{ tran = await translateText(e.originalText, sourceLang, translationTargetLang); }
      catch(x){ console.error('Translate error:', x); }

      addTranscriptEntry({...e, translation: tran});
    });
}

/* =========================
   Translation + Transcript UI + TTS (kept as your logic)
========================= */
const OPENAI_TRANSLATE_MODEL = 'gpt-4.1-mini';

async function openAITranslate(t, sl='auto', tl='en'){
  const apiKey = roomConfig?.openaiKey;
  if(!apiKey) throw new Error('Missing OpenAI API key');
  const targetName = languagesList.find(l=>l.code===tl)?.name || tl;
  const sourceName = sl && sl !== 'auto' ? (languagesList.find(l=>l.code===sl)?.name || sl) : 'auto-detected';
  const isFlemish = (tl === 'nl-BE' || tl === 'nl');
  if(isFlemish) await loadFlemishLexicon();

  const lexiconHint = isFlemish && flemishLexicon.length
    ? `Use Belgian Dutch (Flemish) wording. Prefer these Flemish terms when appropriate: ${flemishLexicon.slice(0, 40).join(', ')}.`
    : '';

  const systemPrompt = [
    'You are a translation engine optimized for text-to-speech output.',
    `Translate the user text to ${targetName} (${tl}).`,
    `Source language is ${sourceName}.`,
    'Make the output sound natural when spoken by a native voice.',
    'Keep meaning, intent, and tone. Use idiomatic phrasing for the target locale.',
    'Use punctuation to guide prosody (commas, pauses), but avoid excessive punctuation.',
    'Expand ambiguous abbreviations and keep proper names intact.',
    'Do not censor, sanitize, or soften content; translate faithfully even if the text is sensitive or contains strong language.',
    'If the input contains SSML tags, preserve them; otherwise do not add SSML.',
    'Return only the translated text with no extra commentary.',
    lexiconHint
  ].join(' ');

  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: OPENAI_TRANSLATE_MODEL,
      temperature: 0,
      messages: [
        { role: 'developer', content: systemPrompt },
        { role: 'user', content: t }
      ]
    })
  });

  if(!r.ok){
    let msg = `OpenAI ${r.status}`;
    try{
      const err = await r.json();
      if(err?.error?.message) msg = err.error.message;
    }catch{}
    throw new Error(msg);
  }
  const d = await r.json();
  const out = d?.choices?.[0]?.message?.content;
  if(!out) throw new Error('OpenAI empty response');
  return out.trim();
}

async function translateText(t, sl='auto', tl='en'){
  if(!t || !t.trim()) return t;
  try{
    return await openAITranslate(t, sl, tl);
  }catch(e){
    console.warn('OpenAI translate failed, falling back to Google:', e);
    return await googleTranslate(t, sl, tl);
  }
}

async function googleTranslate(t,sl='auto',tl='en'){
  const q=encodeURIComponent(t);
  const r=await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${q}`);
  if(!r.ok) throw new Error(`Trans ${r.status}`);
  const d=await r.json();
  return (d?.[0]||[]).filter(x=>Array.isArray(x)&&typeof x[0]==='string').map(x=>x[0]).join('').trim();
}

function addTranscriptEntry(e){
  const isNew=!processedIds.has(e.id);
  processedIds.add(e.id);

  if(isNew){
    quizTranscripts.push(e);
    if(quizTranscripts.length>50) quizTranscripts.shift();
    const qBtn=$('btnQuiz');
    if(quizTranscripts.length>=3){
      qBtn.classList.add('ready');
      qBtn.title=`Generate Quiz (${quizTranscripts.length} transcripts)`;
    }
  }

  const isSelf=e.userId===currentUser?.uid;
  const ini=(e.userName||'U').charAt(0).toUpperCase();
  const time=new Date(e.timestamp).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});

  const empty=$('transcriptEmpty');
  if(empty) empty.remove();

  const unified=$('transcriptUnified');
  const el=document.createElement('div');
  el.className='transcript-entry';
  el.dataset.id=e.id;
  el.innerHTML=`
    <div class="transcript-entry-header">
      <div class="transcript-entry-avatar">${ini}</div>
      <span class="transcript-entry-name">${isSelf?'You':e.userName}</span>
      <span class="transcript-entry-time">${time}</span>
    </div>
    <div class="transcript-entry-original">${e.originalText}</div>
    <div class="transcript-entry-translation">${e.translation}</div>
    <div class="transcript-entry-actions">
      <button class="btn-play-entry" data-text="${encodeURIComponent(e.translation)}"><i class="fas fa-volume-up"></i> Play</button>
    </div>
  `;
  unified.appendChild(el);
  unified.scrollTop=unified.scrollHeight;

  const origCol=$('originalColumn'),transCol=$('translationColumn');

  const ol=document.createElement('div');
  ol.className='transcript-line';
  ol.innerHTML=`
    <div class="transcript-line-header">
      <div class="transcript-line-avatar">${ini}</div>
      <span class="transcript-line-name">${isSelf?'You':e.userName}</span>
      <span class="transcript-line-time">${time}</span>
    </div>
    <div class="transcript-line-text">${e.originalText}</div>
  `;
  origCol.appendChild(ol);
  origCol.scrollTop=origCol.scrollHeight;

  const tl=document.createElement('div');
  tl.className='transcript-line';
  tl.innerHTML=`
    <div class="transcript-line-header">
      <div class="transcript-line-avatar">${ini}</div>
      <span class="transcript-line-name">${isSelf?'You':e.userName}</span>
      <span class="transcript-line-time">${time}</span>
    </div>
    <div class="transcript-line-text">${e.translation}</div>
  `;
  transCol.appendChild(tl);
  transCol.scrollTop=transCol.scrollHeight;

  if(autoPlayTTS && isNew) queueTTS({id:e.id,text:e.translation,lang:translationTargetLang});
}

function toggleAutoTTS(){
  autoPlayTTS=!autoPlayTTS;
  $('btnAutoTTS').classList.toggle('active',autoPlayTTS);
  $('btnAutoTTSMenu').classList.toggle('active',autoPlayTTS);
  $('toggleAutoTTS').classList.toggle('active',autoPlayTTS);
  if(autoPlayTTS) showToast('Auto-play enabled');
  else { ttsQueue=[]; updateQueueBadge(); }
}
$('btnAutoTTS').addEventListener('click',toggleAutoTTS);
$('btnAutoTTSMenu').addEventListener('click',()=>{toggleAutoTTS();$('headerMenu').classList.remove('active')});
$('toggleAutoTTS').addEventListener('click',toggleAutoTTS);

function queueTTS(i){ ttsQueue.push(i); updateQueueBadge(); processTTSQueue(); }
function updateQueueBadge(){ const b=$('ttsQueueBadge'); b.textContent=ttsQueue.length; b.classList.toggle('show',ttsQueue.length>0); }

async function processTTSQueue(){
  if(isPlayingTTS||ttsQueue.length===0) return;
  isPlayingTTS=true;
  const i=ttsQueue.shift();
  updateQueueBadge();
  const btn=document.querySelector(`.transcript-entry[data-id="${i.id}"] .btn-play-entry`);
  if(btn) btn.classList.add('playing');
  try{ await playTTSAudio(i.text,i.lang); }catch(e){ console.error('TTS:',e); }
  if(btn) btn.classList.remove('playing');
  isPlayingTTS=false;
  if(ttsQueue.length>0) processTTSQueue();
}

async function playTTSAudio(txt,lang){
  return new Promise(async(res,rej)=>{
    const isFlemish = isFlemishTtsLang(lang);
    const vid = isFlemish ? (roomConfig?.cartesiaFlemishVoiceId || FLEMISH_TTS_VOICE_ID) : getVoice(lang);
    const modelId = isFlemish ? (roomConfig?.cartesiaFlemishModelId || FLEMISH_TTS_MODEL_ID) : (roomConfig?.cartesiaModelId || 'sonic-3');
    const payload = {
      transcript: txt,
      model_id: modelId,
      voice: {mode:'id', id: vid},
      output_format: {container:'wav', encoding:'pcm_f32le', sample_rate:44100}
    };
    if(isFlemish){
      payload.language = roomConfig?.cartesiaFlemishLanguage || FLEMISH_TTS_LANGUAGE;
      payload.speed = roomConfig?.cartesiaFlemishSpeedLabel || 'normal';
      payload.generation_config = {
        speed: roomConfig?.cartesiaFlemishSpeed ?? 1,
        volume: roomConfig?.cartesiaFlemishVolume ?? 1,
        emotion: roomConfig?.cartesiaFlemishEmotion ?? 'neutral'
      };
      if(roomConfig?.flemishPronunciationDictId){
        payload.pronunciation_dict_id = roomConfig.flemishPronunciationDictId;
      }
    }
    try{
      const r=await fetch('https://api.cartesia.ai/tts/bytes',{
        method:'POST',
        headers:{
          'Cartesia-Version':'2025-04-16',
          'X-API-Key':roomConfig.cartesiaKey,
          'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
      });
      if(!r.ok) throw new Error(`TTS ${r.status}`);
      const blob=await r.blob(), url=URL.createObjectURL(blob);
      if(currentAudio){ currentAudio.pause(); currentAudio=null; }
      const a=new Audio(url); currentAudio=a;
      attachOutputAnalyser(a);
      if(selectedSpeakerId && a.setSinkId) try{ await a.setSinkId(selectedSpeakerId); }catch{}
      a.onended=()=>{ currentAudio=null; URL.revokeObjectURL(url); res(); };
      a.onerror=(e)=>{ currentAudio=null; URL.revokeObjectURL(url); rej(e); };
      await a.play();
    }catch(e){ rej(e); }
  });
}
document.addEventListener('click',e=>{
  const b=e.target.closest('.btn-play-entry');
  if(b){
    const t=decodeURIComponent(b.dataset.text);
    b.classList.add('playing');
    playTTSAudio(t,translationTargetLang).finally(()=>b.classList.remove('playing'));
  }
});

/* =========================
   Chat
========================= */
let unreadChatCount=0;
function updateChatBadge(){
  const b=$('chatBadgeMenu');
  if(unreadChatCount>0){ b.textContent=unreadChatCount; b.style.display='inline'; }
  else{ b.style.display='none'; }
}
$('btnSendChat').addEventListener('click',sendChatMessage);
$('chatInput').addEventListener('keypress',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChatMessage()}});

function sendChatMessage(){
  const input=$('chatInput');
  const msg=input.value.trim();
  if(!msg||!currentRoom) return;
  db.ref(`/chats/${currentRoom}`).push({
    userId:currentUser.uid,
    name:currentUser.displayName||userProfile?.name||'User',
    message:msg,
    timestamp:Date.now()
  });
  input.value='';
}
function escapeHtml(t){ const d=document.createElement('div'); d.textContent=t; return d.innerHTML; }

function initChatListener(){
  if(!currentRoom) return;
  db.ref(`/chats/${currentRoom}`).orderByChild('timestamp').limitToLast(100).on('child_added',snap=>{
    const m=snap.val(); if(!m) return;
    $('chatEmpty').style.display='none';
    const div=document.createElement('div');
    div.className='chat-message '+(m.userId===currentUser.uid?'sent':'received');
    const time=new Date(m.timestamp).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    div.innerHTML=m.userId!==currentUser.uid
      ? `<div class="chat-message-header"><span class="sender">${escapeHtml(m.name||'User')}</span><span class="time">${time}</span></div>${escapeHtml(m.message)}`
      : `${escapeHtml(m.message)}`;
    $('chatMessages').appendChild(div);
    $('chatMessages').scrollTop=$('chatMessages').scrollHeight;
    if(m.userId!==currentUser.uid && !$('chatPanel').classList.contains('open')){
      unreadChatCount++; updateChatBadge();
    }
  });
}

/* =========================
   Raise Hand
========================= */
let handRaised=false;
$('btnRaiseHand').addEventListener('click',()=>{
  handRaised=!handRaised;
  $('btnRaiseHand').classList.toggle('hand-raised',handRaised);
  if(currentRoom&&currentUser){
    db.ref(`/rooms/${currentRoom}/participants/${currentUser.uid}/handRaised`).set(handRaised);
  }
  showToast(handRaised?'Hand raised':'Hand lowered');
});

function updateHandIndicator(userId,raised){
  const tile=document.querySelector(`.video-tile[data-user="${userId}"]`);
  if(!tile) return;
  let indicator=tile.querySelector('.video-tile-hand');
  if(raised&&!indicator){
    indicator=document.createElement('div');
    indicator.className='video-tile-hand';
    indicator.innerHTML='<i class="fas fa-hand-paper"></i>';
    tile.appendChild(indicator);
  }else if(!raised&&indicator){
    indicator.remove();
  }
}

/* =========================
   Panels + Controls
========================= */
function isMobileOrTablet(){return window.innerWidth <= 1024 && window.matchMedia('(orientation: portrait)').matches}

function toggleCenterPanel(){
  const main = $('mainContent');
  if(!main) return;
  const collapsed = main.classList.toggle('center-collapsed');
  const btn = $('btnToggleCenter');
  if(btn) btn.innerHTML = `<i class=\"fas fa-${collapsed?'plus':'minus'}\"></i>`;
}

$('btnStudentsMenu').addEventListener('click',()=>{
  $('chatPanel').classList.remove('open');
  $('headerMenu').classList.remove('active');
  // On desktop it's static, on mobile we might need to toggle overlay
  if(window.innerWidth <= 1024) $('studentsPanel').classList.toggle('open');
});

if($('btnParticipantsToggle')){
  $('btnParticipantsToggle').addEventListener('click', ()=>{
     // In 3-panel desktop mode, this might just highlight, or maybe toggle right panel visibility?
     // User "must have" this button. Let's make it toggle the right panel visibility if desired, or just act as a visual hook.
     // For now, let's make it toggle the overlay on mobile, or just blink on desktop.
     // Actually, let's support toggling the right column for more space?
     // Simpler: Just ensure it works for mobile overlay if we had one, or just ignore on desktop static.
     // But let's act helpful:
     if(window.innerWidth <= 1024) {
       // Mobile logic (not fully implemented in HTML for overlay right now, but existing CSS supports .students-panel.open mostly)
       // Our CSS change hid .right-panel on mobile. We might need to handle mobile differently later.
       showToast('Participants list is on the right');
     } else {
       // Desktop: Toggle right panel?
       const rp = document.querySelector('.right-panel');
       if(rp) {
         rp.style.display = rp.style.display === 'none' ? 'flex' : 'none';
         // Main grid will auto-adjust 1fr
         const mc = document.querySelector('.main-content');
         mc.style.gridTemplateColumns = rp.style.display === 'none' ? '280px 1fr 0px' : '280px 1fr 280px';
       }
     }
  });
}

$('btnChat').addEventListener('click',()=>{
  $('chatPanel').classList.toggle('open');
  $('mainContent')?.classList.remove('center-collapsed');
  unreadChatCount=0;
  updateChatBadge();
});
$('btnChatMenu').addEventListener('click',()=>{
  $('chatPanel').classList.toggle('open');
  $('mainContent')?.classList.remove('center-collapsed');
  $('headerMenu').classList.remove('active');
  unreadChatCount=0;
  updateChatBadge();
});
$('btnCloseChat').addEventListener('click',()=> $('chatPanel').classList.remove('open'));

$('btnTranscript').addEventListener('click',()=>{
  toggleCenterPanel();
});

$('btnTranscribe').addEventListener('click',()=>{
  $('mainContent')?.classList.remove('center-collapsed');
  if(isTranscribing) stopTranscription(); else startTranscription();
},{capture:true});

if($('btnToggleCenter')){
  $('btnToggleCenter').addEventListener('click',toggleCenterPanel);
}
if($('transcriptMicSelect')){
  $('transcriptMicSelect').addEventListener('change',async e=>{
    const newMicId = e.target.value;
    await applyDeviceChange(newMicId, selectedCamId);
  });
}
if($('sttLangSelect')){
  $('sttLangSelect').addEventListener('change',e=>{
    setSttSource(e.target.value, true);
  });
}
if($('translationLangSelect')){
  $('translationLangSelect').addEventListener('change',e=>{
    setTranslationTarget(e.target.value, true);
  });
}
$('btnExpandTranscript').addEventListener('click',()=>{
  $('transcriptPanel').classList.toggle('expanded');
  $('btnExpandTranscript').innerHTML=`<i class="fas fa-${$('transcriptPanel').classList.contains('expanded')?'compress':'expand'}-alt"></i>`;
});
document.querySelectorAll('.transcript-view-toggle button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.transcript-view-toggle button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  if(b.dataset.view==='unified'){
    $('transcriptUnified').classList.remove('hidden');
    $('transcriptSplit').classList.remove('active');
  }else{
    $('transcriptUnified').classList.add('hidden');
    $('transcriptSplit').classList.add('active');
  }
}));

$('btnHeaderMenu').addEventListener('click',e=>{e.stopPropagation();$('headerMenu').classList.toggle('active')});
document.addEventListener('click',e=>{if(!e.target.closest('.header-menu-container'))$('headerMenu').classList.remove('active')});

$('btnPiPMenu').addEventListener('click',async()=>{
  $('headerMenu').classList.remove('active');
  const vids=document.querySelectorAll('.video-tile video');
  if(vids.length>0 && document.pictureInPictureEnabled){
    try{ await vids[0].requestPictureInPicture(); showToast('Picture-in-Picture enabled'); }catch{ showToast('PiP not available'); }
  }
});

function setSelectValueIfExists(el, value){
  if(!el || !value) return;
  const has = Array.from(el.options || []).some(o=>o.value===value);
  if(has) el.value = value;
}

function syncMicSelects(){
  setSelectValueIfExists($('micSelect'), selectedMicId);
  setSelectValueIfExists($('settingsMicSelect'), selectedMicId);
  setSelectValueIfExists($('transcriptMicSelect'), selectedMicId);
}

function getAudioConstraints(micId){
  const constraints = {
    echoCancellation: $('toggleEcho')?.classList.contains('active'),
    noiseSuppression: $('toggleNoise')?.classList.contains('active'),
    autoGainControl: $('toggleGain')?.classList.contains('active')
  };
  if(micId) constraints.deviceId = {exact: micId};
  return constraints;
}

function getVideoConstraints(camId){
  return camId ? {deviceId:{exact: camId}} : true;
}

async function applyDeviceChange(newMicId, newCamId){
  const micChanged = newMicId && newMicId !== selectedMicId;
  const camChanged = newCamId && newCamId !== selectedCamId;
  if(!micChanged && !camChanged) return;

  if(micChanged) selectedMicId = newMicId;
  if(camChanged) selectedCamId = newCamId;

  syncMicSelects();

  if(localStream){
    localStream.getTracks().forEach(t=>t.stop());
    try{
      localStream=await navigator.mediaDevices.getUserMedia({
        video: getVideoConstraints(selectedCamId),
        audio: getAudioConstraints(selectedMicId)
      });
      const p=participants.get(currentUser.uid);
      if(p){ p.stream=localStream; updateVideoGrid(); }
      initAudioVisualizer();
      if(isTranscribing){ stopTranscription(true); startTranscription(); }
    }catch(e){ console.error('Device switch error:', e); }
  }
}

function initAudioVisualizer(){
  const canvas = $('audioVisualizer');
  if(!canvas) return;
  if(!localStream) return;
  
  try{
    if(!visualizerCtx) visualizerCtx = new (window.AudioContext||window.webkitAudioContext)();
    if(visualizerCtx.state === 'suspended') visualizerCtx.resume().catch(()=>{});

    if(micSourceNode) micSourceNode.disconnect();
    micAnalyser = visualizerCtx.createAnalyser();
    micAnalyser.fftSize = 256;
    micSourceNode = visualizerCtx.createMediaStreamSource(localStream);
    micSourceNode.connect(micAnalyser);

    const ctx = canvas.getContext('2d');
    const bufferLength = micAnalyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      visualizerRaf = requestAnimationFrame(draw);
      
      micAnalyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--surface2') || '#1e1e1e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for(let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2; // Scale down

        // Gradient based on height
        ctx.fillStyle = `rgb(${barHeight + 100}, 50, 200)`; // Purple-ish
        if(barHeight > 80) ctx.fillStyle = 'rgb(250,50,50)'; // Red clipping

        // Draw bar
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    };

    if(visualizerRaf) cancelAnimationFrame(visualizerRaf);
    draw();
  }catch(e){
    console.warn('Audio visualizer init failed:', e);
  }
}

function attachOutputAnalyser(audioEl){
  if(!visualizerCtx || !outAnalyser || !audioEl) return;
  try{
    if(outSourceNode) outSourceNode.disconnect();
    outSourceNode = visualizerCtx.createMediaElementSource(audioEl);
    outSourceNode.connect(outAnalyser);
    outAnalyser.connect(visualizerCtx.destination);
  }catch(e){
    console.warn('Output analyser attach failed:', e);
  }
}

/* Settings */
$('btnSettingsMenu').addEventListener('click',()=>{$('settingsOverlay').classList.add('open');$('headerMenu').classList.remove('active')});
$('btnCloseSettings').addEventListener('click',()=> $('settingsOverlay').classList.remove('open'));
document.querySelectorAll('.settings-tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.settings-tab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.settings-section').forEach(s=>s.classList.remove('active'));
  t.classList.add('active');
  document.querySelector(`.settings-section[data-section="${t.dataset.tab}"]`).classList.add('active');
}));
document.querySelectorAll('.toggle-switch').forEach(t=>{
  if(t.id==='toggleAutoTTS') return;
  t.addEventListener('click',()=>t.classList.toggle('active'));
});
$('btnSaveSettings').addEventListener('click',async()=>{
  const lang = $('settingsLanguageSelect').value;
  setTranslationTarget(lang, true);

  const nm=$('settingsMicSelect').value, nc=$('settingsCamSelect').value;
  selectedSpeakerId=$('settingsSpeakerSelect').value;

  await applyDeviceChange(nm, nc);

  $('settingsOverlay').classList.remove('open');
  showToast('Settings saved');
});

/* Mic/Cam controls */
$('btnMic').addEventListener('click',()=>{
  if(!localStream) return;
  if(!canLocalTranscribe()){
    showToast('Mic locked until teacher grants access');
    return;
  }
  const t=localStream.getAudioTracks()[0];
  if(!t) return;
  t.enabled=!t.enabled;
  $('btnMic').classList.toggle('muted',!t.enabled);
  $('btnMic').querySelector('i').className=`fas fa-microphone${t.enabled?'':'-slash'}`;
  const p=participants.get(currentUser.uid);
  if(p){ p.micEnabled=t.enabled; updateVideoGrid(); updateStudentsList(); updatePresenceStatus(); }
  if(streamCall){
    try{ t.enabled ? streamCall.microphone.enable() : streamCall.microphone.disable(); }catch{}
  }
});

$('btnCamera').addEventListener('click',()=>{
  if(!localStream) return;
  const t=localStream.getVideoTracks()[0];
  if(!t) return;
  t.enabled=!t.enabled;
  $('btnCamera').classList.toggle('muted',!t.enabled);
  $('btnCamera').querySelector('i').className=`fas fa-video${t.enabled?'':'-slash'}`;
  const p=participants.get(currentUser.uid);
  if(p){ p.camEnabled=t.enabled; updateVideoGrid(); updatePresenceStatus(); }
  if(streamCall){
    try{ t.enabled ? streamCall.camera.enable() : streamCall.camera.disable(); }catch{}
  }
});

/* Screen share + whiteboard (your logic kept) */
$('btnScreenShare').addEventListener('click',async()=>{
  if(screenStream){
    screenStream.getTracks().forEach(t=>t.stop());
    screenStream=null;
    $('sharedContent').classList.remove('active');
    $('btnScreenShare').classList.remove('active');
    return;
  }
  try{
    screenStream=await navigator.mediaDevices.getDisplayMedia({video:true});
    $('screenShareVideo').srcObject=screenStream;
    $('whiteboardCanvas').style.display='none';
    $('screenShareVideo').style.display='block';
    $('whiteboardTools').style.display='none';
    $('sharedContentTitle').textContent='Screen Share';
    $('sharedContent').classList.add('active');
    $('btnScreenShare').classList.add('active');
    screenStream.getVideoTracks()[0].onended=()=>{
      screenStream=null;
      $('sharedContent').classList.remove('active');
      $('btnScreenShare').classList.remove('active');
    };
  }catch(e){ console.error('Screen:',e); }
});

$('btnWhiteboard').addEventListener('click',()=>{
  isWhiteboardActive=!isWhiteboardActive;
  $('btnWhiteboard').classList.toggle('active',isWhiteboardActive);
  if(isWhiteboardActive){
    $('screenShareVideo').style.display='none';
    $('whiteboardCanvas').style.display='block';
    $('whiteboardTools').style.display='flex';
    $('sharedContentTitle').textContent='Whiteboard';
    $('sharedContent').classList.add('active');
    initWhiteboard();
  }else{
    $('sharedContent').classList.remove('active');
  }
});
$('btnStopSharing').addEventListener('click',()=>{
  if(screenStream){ screenStream.getTracks().forEach(t=>t.stop()); screenStream=null; }
  isWhiteboardActive=false;
  $('sharedContent').classList.remove('active');
  $('btnScreenShare').classList.remove('active');
  $('btnWhiteboard').classList.remove('active');
});

function initWhiteboard(){
  const c=$('whiteboardCanvas');
  whiteboardCtx=c.getContext('2d');
  whiteboardCtx.fillStyle='#fff';
  whiteboardCtx.fillRect(0,0,c.width,c.height);
  whiteboardCtx.lineCap='round';
  whiteboardCtx.lineJoin='round';
  whiteboardCtx.lineWidth=3;
  whiteboardCtx.strokeStyle='#000';

  c.onmousedown=c.ontouchstart=e=>{
    isDrawing=true;
    const r=c.getBoundingClientRect();
    const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;
    const y=(e.touches?e.touches[0].clientY:e.clientY)-r.top;
    whiteboardCtx.beginPath();
    whiteboardCtx.moveTo(x*(c.width/r.width),y*(c.height/r.height));
  };

  c.onmousemove=c.ontouchmove=e=>{
    if(!isDrawing) return;
    e.preventDefault();
    const r=c.getBoundingClientRect();
    const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;
    const y=(e.touches?e.touches[0].clientY:e.clientY)-r.top;
    if(whiteboardTool==='eraser'){ whiteboardCtx.strokeStyle='#fff'; whiteboardCtx.lineWidth=20; }
    else{ whiteboardCtx.strokeStyle=$('whiteboardColor').value; whiteboardCtx.lineWidth=3; }
    whiteboardCtx.lineTo(x*(c.width/r.width),y*(c.height/r.height));
    whiteboardCtx.stroke();
  };

  c.onmouseup=c.ontouchend=()=>{isDrawing=false};
  c.onmouseleave=()=>{isDrawing=false};
}
document.querySelectorAll('.whiteboard-tool[data-tool]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.whiteboard-tool[data-tool]').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  whiteboardTool=b.dataset.tool;
}));
$('btnClearBoard').addEventListener('click',()=>{
  if(!whiteboardCtx) return;
  const c=$('whiteboardCanvas');
  whiteboardCtx.fillStyle='#fff';
  whiteboardCtx.fillRect(0,0,c.width,c.height);
});

/* =========================
   Leave room
========================= */
$('btnLeave').addEventListener('click',leaveRoom);
$('btnLeaveHeader').addEventListener('click',leaveRoom);

async function leaveRoom(){
  await leaveStreamCall();

  try{ if(presenceRef){ await presenceRef.remove(); } }catch{}
  presenceRef=null;

  try{ if(participantsRef){ participantsRef.off(); } }catch{}
  participantsRef=null;

  if(currentRoom){
    try{ db.ref(`/chats/${currentRoom}`).off(); }catch{}
    try{ db.ref(`/transcripts/${currentRoom}`).off(); }catch{}
  }

  // Teacher meta listener cleanup
  try{ if(roomMetaTeacherRef) roomMetaTeacherRef.off(); }catch{}
  roomMetaTeacherRef=null;
  teacherUserId=null;

  // Transcript listener flag reset
  transcriptsListenerAttached=false;

  // STT stop & reconnect stop
  sttStopRequested=true;
  if(sttReconnectTimer){ clearTimeout(sttReconnectTimer); sttReconnectTimer=null; }

  stopTranscription(true);

  try{ localStream?.getTracks()?.forEach(t=>t.stop()); }catch{}
  try{ screenStream?.getTracks()?.forEach(t=>t.stop()); }catch{}
  try{ if(currentAudio){ currentAudio.pause(); currentAudio=null; } }catch{}
  try{ if(meetingTimerInterval) clearInterval(meetingTimerInterval); }catch{}

  ttsQueue=[]; isPlayingTTS=false; processedIds.clear(); autoPlayTTS=false;
  participants.clear(); pinnedUserId=null; handRaised=false;

  $('btnRaiseHand').classList.remove('hand-raised');
  unreadChatCount=0; updateChatBadge();

  currentRoom=null; roomConfig=null; localStream=null; screenStream=null;

  $('appContainer').classList.remove('active');
  $('videoGrid').innerHTML='';

  $('transcriptUnified').innerHTML='<div class="transcript-empty" id="transcriptEmpty"><i class="fas fa-language"></i><p>Transcripts appear here as participants speak</p></div>';
  $('originalColumn').innerHTML='';
  $('translationColumn').innerHTML='';
  $('studentsList').innerHTML='';
  $('chatMessages').innerHTML='<div class="chat-empty" id="chatEmpty"><i class="fas fa-comments"></i><p>No messages yet.<br>Start the conversation!</p></div>';

  $('chatPanel').classList.remove('open');
  $('mainContent')?.classList.remove('center-collapsed');
  $('sharedContent').classList.remove('active');

  history.replaceState({},'',location.pathname);
  showPrejoinScreen();
}

/* =========================
   Resize + Service Worker + PWA
========================= */
window.addEventListener('resize',()=>{});

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('service-worker.js')
      .then(reg=>console.log('ServiceWorker registered:',reg.scope))
      .catch(err=>console.log('ServiceWorker registration failed:',err));
  });
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredPrompt=e;
});
window.addEventListener('appinstalled',()=>{ deferredPrompt=null; });
