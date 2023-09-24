// Initialize the variables from the DOM

const form = document.getElementById("register");
const username = document.getElementById("username");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const age = document.getElementById("age");
const password = document.getElementById("password");
const secondPassword = document.getElementById("password2nd");
const registrationBtn = document.getElementById("submit");
const danger = document.getElementById("danger");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRegisterInfo();
});

function checkRegisterInfo() {
  const usernameValue = username.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const ageValue = age.value.trim();
  const passwordValue = password.value.trim();
  const secondPasswordValue = secondPassword.value.trim();

  let validationInfo = [];

  const re = /^(?=.[A-Za-z])(?=.[0-9])(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{6,20}$/;
  const reName = /^[a-zA-Z]{2,}$/;
  const reEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const reAge = /^[0-9]{1,3}$/;
  const rePassword =
    /^(?=.[A-Za-z])(?=.[0-9])(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
  username.test(re) ? validationInfo.push(true) : validationInfo.push(false);
  firstName.test(reName)
    ? validationInfo.push(true)
    : validationInfo.push(false);
  lastName.test(reName)
    ? validationInfo.push(true)
    : validationInfo.push(false);
  email.test(reEmail) ? validationInfo.push(true) : validationInfo.push(false);
  age.test(reAge) ? validationInfo.push(true) : validationInfo.push(false);
  password.test(rePassword)
    ? validationInfo.push(true)
    : validationInfo.push(false);
  secondPassword.test(rePassword)
    ? validationInfo.push(true)
    : validationInfo.push(false);
  password === secondPassword
    ? validationInfo.push(true)
    : validationInfo.push(false);

  const validationInfoCheck = validationInfo.every(
    (element) => element === true
  );

  if (validationInfoCheck) {
    const userData = {
      username: usernameValue,
      email: emailValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
      password: passwordValue,
      secondPassword: secondPasswordValue,
      age: ageValue
    };

    success.style.display = "block";
    danger.style.display = "none";

    localStorage.setItem(userData.username, JSON.stringify(userData));

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);

  } else {
    danger.style.display = "block";
    success.style.display = "none";
  }
}

function setRedFor(input, message) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("small");
  small.innerText = message;
  inputContainer.className = "input-container error";
}

function setGreenFor(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = "input-container success";
}
