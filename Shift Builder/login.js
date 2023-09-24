// Get the variables

const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

let isFormValid = false;

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
  if (isFormValid) {
    login();
  }
});

function checkInputs() {

  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    return;

  } else {
    setSuccessFor(username);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
    return;

  } else {
    setSuccessFor(password);
  }

  clearErrors();
  isFormValid = true;
};

function setErrorFor(input, message) {

  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';
};

function setSuccessFor(input) {

  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

// Create a function to delete errors when the login data are correct

function clearErrors() {
  const errors = document.querySelectorAll('form-control error');
  errors.forEach(error => error.remove());
}
// Create log in function to validate the user's credentials -username and password- and check if is stored in localStorage

function login() {

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  const userDB = localStorage.getItem(usernameValue);
  !userDB ? setErrorFor(username, 'Username does not exist! At least 6 characters long') : checkPassword();

  function checkPassword() {

    // parse user data from JSON to Obj to be stored in localStorage
    const user = JSON.parse(userDB);
    user.password === passwordValue ? loginSuccessful() : setErrorFor(password, 'Password is incorrect! At least 6 characters long');
  }

};

function loginSuccessful() {
  alert('Login Successful!')
  const user = {
    username: username.value.trim(),
    loggedIn: true,
    loggedInDate: new Date()
  }
  localStorage.setItem('loggedIn', JSON.stringify(user));
  window.location.href = 'dashboard.html'
};


// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const errorSpan = document.createElement('span');
//   errorSpan.innerText = message;
//   errorSpan.classList.add('error');
//   formControl.appenChild(errorSpan);
// }