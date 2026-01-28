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

const $ = id => document.getElementById(id);
const statusEl = $('status');
const nameField = document.querySelector('[data-field="name"]');
const confirmField = document.querySelector('[data-field="confirm"]');
const nameInput = $('nameInput');
const emailInput = $('emailInput');
const passwordInput = $('passwordInput');
const confirmInput = $('confirmInput');
const submitBtn = $('submitBtn');
let mode = 'signin';

function setStatus(message, type = ''){
  statusEl.textContent = message;
  statusEl.className = 'auth-status' + (type ? ' ' + type : '');
}

function setMode(next){
  mode = next;
  document.querySelectorAll('.auth-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

  const isSignup = mode === 'signup';
  nameField.style.display = isSignup ? 'flex' : 'none';
  confirmField.style.display = isSignup ? 'flex' : 'none';
  submitBtn.textContent = isSignup ? 'Create account' : 'Sign in';
  passwordInput.autocomplete = isSignup ? 'new-password' : 'current-password';
  setStatus('');
}

document.querySelectorAll('.auth-tab').forEach(btn => {
  btn.addEventListener('click', () => setMode(btn.dataset.mode));
});

$('authForm').addEventListener('submit', async e => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const name = nameInput.value.trim();

  if(!email || !password){
    setStatus('Please enter your email and password.', 'error');
    return;
  }

  if(mode === 'signup'){
    const confirm = confirmInput.value.trim();
    if(password.length < 6){
      setStatus('Password must be at least 6 characters.', 'error');
      return;
    }
    if(password !== confirm){
      setStatus('Passwords do not match.', 'error');
      return;
    }
  }

  submitBtn.disabled = true;
  setStatus('Working...');

  try{
    if(mode === 'signin'){
      await auth.signInWithEmailAndPassword(email, password);
    }else{
      const cred = await auth.createUserWithEmailAndPassword(email, password);
      if(name){
        await cred.user.updateProfile({ displayName: name });
      }
    }
  }catch(err){
    setStatus(err.message || 'Something went wrong. Try again.', 'error');
  }finally{
    submitBtn.disabled = false;
  }
});

$('forgotBtn').addEventListener('click', async () => {
  const email = emailInput.value.trim();
  if(!email){
    setStatus('Enter your email first to reset your password.', 'error');
    return;
  }
  try{
    await auth.sendPasswordResetEmail(email);
    setStatus('Password reset email sent.', 'success');
  }catch(err){
    setStatus(err.message || 'Unable to send reset email.', 'error');
  }
});

auth.onAuthStateChanged(user => {
  if(user){
    window.location.href = 'index.html';
  }
});

setMode('signin');
