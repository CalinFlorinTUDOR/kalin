const form = document.querySelector('#log-in-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit-btn');
let usernameValid = false;
let passwordValid = false;

function enableButton () {
  submit.disabled = false;
}

function disableButton () {
  submit.disabled = true;
}

username.addEventListener('input', function() {
  usernameValid =  username.value.length >= 3 ? true : false;
  if (usernameValid && passwordValid) {
    enableButton();
    return
  }
  disableButton()
});

password.addEventListener('input', function() {
  passwordValid = password.value.length >= 3 ? true : false;
  if (usernameValid && passwordValid) {
    enableButton();
    return
  }
  disableButton()
});