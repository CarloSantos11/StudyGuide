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
  return regularExpression.test(String(email).toLowerCase());
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

function getFieldValue(input){
  return input.id.charAt(0).toUpperCase() + input.id.substring(1);
}

// Event Listeners
form.addEventListener('submit', function(error){
  error.preventDefault();

  checkRequired([username, email, password, password2]);
})