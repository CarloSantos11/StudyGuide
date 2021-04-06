const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  console.log(small);
  small.innerText = message;
}

// Show success outline 
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(regularExpression.test(String(email).toLowerCase())) {
    showSuccess();
  } else {
    showError(email, `${getFieldValue(email)} is not valid`);
  }
}

function checkRequired(arrayOfInputs){
  arrayOfInputs.forEach(function(currentInputValue){
    if(currentInputValue.value.trim() === '') {
      showError(currentInputValue, `${getFieldValue(currentInputValue)} is required`);
    } else {
      showSuccess(currentInputValue);
    }
  });
}

function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${getFieldValue(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldValue(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
  if(input1.value !== input2.value ) {
    showError(input2, 'Passwords do not match');
  }
}

function getFieldValue(input){
  return input.id.charAt(0).toUpperCase() + input.id.substring(1);
}

// Event Listeners
form.addEventListener('submit', function(error){
  error.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 6);
  checkLength(password, 6, 9);
  isValidEmail(email);
  checkPasswordsMatch(password, password2)
})