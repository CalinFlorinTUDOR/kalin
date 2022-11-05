// Initialize the variables from the DOM

const form = document.getElementById('register');
const username = document.getElementById('username');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const secondPassword = document.getElementById('password2nd');
const registrationBtn = document.getElementById('submit');


form.addEventListener('submit', (e) => {
  
  e.preventDefault();

  checkRegisterInfo();

  
});
function messages () {

  const username = document.getElementById('username');
  const firstName = document.getElementById('fname');
  const lastName = document.getElementById('lname');
  const email = document.getElementById('email');
  const age = document.getElementById('age');
  const password = document.getElementById('password');
  const secondPassword = document.getElementById('password2nd');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');
  
  if (username.value ==='' || username.value.length < 6 || firstName.value ==='' || firstName.value.length < 2 || lastName.value ===''|| lastName.value.length < 2 || email.value ==='' || !existEmail(email.value) || age.value ==='' || (age.value < 18 || age.value > 65) || password.value ==='' || password.value.length < 6 || secondPassword ===''|| secondPassword.value.length < 6 || password.value !== secondPassword.value) {

      danger.style.display = 'block';
      setTimeout(() => {

        username.value = '';
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        age.value = '';
        password.value = '';
        secondPassword.value = '';

        
      }, 2000);
      
  } else {
      
      success.style.display = 'block';
  }

      setTimeout(() => {

        danger.style.display = 'none';
        success.style.display = 'none';
        
      }, 5000);
  
}


function checkRegisterInfo() {
  // get the values from the inputs and use trim to removes the white spaces
  
  const usernameValue = username.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const ageValue = age.value.trim();
  const passwordValue = password.value.trim();
  const secondPasswordValue = secondPassword.value.trim();

  // Check the input values and show the error/successful messages

  let validationInfo = [];


  if (usernameValue === '') {

    setRedFor(username, 'username field cannot be empty');
    validationInfo.push('false');
    } else if (usernameValue.length < 6) {

      setRedFor(username, 'username is too short at least 6 characters long');
      validationInfo.push('false');
    } else if (username === '_') {
      
      setRedFor(username, 'must contain letters,numbers and a character that is neighter a letter nor number');
      validationInfo.push('false');
    } else {
  
    setGreenFor(username);
    validationInfo.push('true');
    }

  if (firstNameValue === '') {

  setRedFor(firstName, 'First Name field cannot be empty');
  validationInfo.push('false');

  } else if (firstNameValue.length < 2) {

    setRedFor(firstName, 'First Name must include at least 2 letters');
    validationInfo.push('false');
  
  } else {

  setGreenFor(firstName);
  validationInfo.push('true');
  }

  if (lastNameValue === '') {

    setRedFor(lastName, 'Last Name field cannot be empty');
    validationInfo.push('false');

  } else if (lastNameValue.length < 2) {

    setRedFor(lastName, 'Last Name must include at least 2 letters');
    validationInfo.push('false');
  
  } else {

    setGreenFor(lastName);
    validationInfo.push('true');
  }

  if (emailValue === '') {

    setRedFor(email, 'Email field cannot be empty');
    validationInfo.push('false');

  } else if (!existEmail(emailValue)) {

    setRedFor(email, 'Provide a valid email');
    validationInfo.push('false');

  } else {

    setGreenFor(email);
    validationInfo.push('true');

  }

  if (ageValue === '') {

    setRedFor(age, ' Age field cannot be empty');
    validationInfo.push('false');

  } else if (ageValue < 18 || ageValue > 65)  {
    
    setRedFor(age, 'Allowed age is between 18 - 65 years old');
    validationInfo.push('false');
    
  } else {
    
    setGreenFor(age); 
    validationInfo.push('true');

  }

  if (passwordValue === '') {

    setRedFor(password, 'Password field cannot be empty');
    validationInfo.push('false');
  
    } else if (passwordValue.length < 6)  {

      setRedFor(password, 'Password cannot be less then 6 digits');
      validationInfo.push('false');

    } else {
  
      setGreenFor(password);
      validationInfo.push('true');
  
    }

    if (secondPasswordValue === '') {

      setRedFor(secondPassword, 'Second password field cannot be empty');
      validationInfo.push('false');
    
      } else if (passwordValue !== secondPasswordValue) {
    
        setRedFor(secondPassword, 'Passwords does not match');
        validationInfo.push('false');

      } else {

        setGreenFor(secondPassword);
        validationInfo.push('true');
      
      }

      const validationInfoCheck = validationInfo.every(element => element ==='true');

      if (validationInfoCheck === true) {

      registrationBtn.addEventListener('click', () => {
        
        //  set Object to be stored in localStorage

        const user_records= {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          secondPassword: '',
          age: ''

        };
        
      user_records.username = usernameValue;
      user_records.firstName = firstNameValue;
      user_records.lastName = lastNameValue;
      user_records.email = emailValue;
      user_records.password = passwordValue;
      user_records.secondPassword = secondPasswordValue;
      user_records.age = ageValue;
      
      
    //  Convert obj data into a string to be stored in localStorage

      const registerJSON = JSON.stringify(user_records);
      localStorage.setItem(user_records.username, registerJSON);
      window.location.href = 'login.html';
    });
    
  };
};

// Set functions to validate error/successful messages

function setRedFor(input, message) {
  // target input-container as parent of small
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector('small');
  // add an error message inside small 
  small.innerText = message;
  // add error class
  inputContainer.className = 'input-container error';
}

function setGreenFor(input) {

  const inputContainer = input.parentElement;
  inputContainer.className = 'input-container success';
}

// Set functions for regex validation of inputs

function existEmail(email) {

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());

}

function existUsername(username) {

  const re = /^(?=.[A-Za-z])(?=.[0-9])(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

  return re.test(String(username).toLowerCase());

}

