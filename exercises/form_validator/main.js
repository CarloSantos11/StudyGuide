const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isValidEmail(email) {
    const regularExpression = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value));
    return regularExpression.test(String(email).toLowerCase());
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)}is required`); 
        } else {
            showSuccess(input);
        }
    });
}

function checkLength (input, min, max) {
    if(input.value.length < min) {
        showError(
            input,
        `'${getFieldName(input)} is required`);
    } else {
        
    }
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// form.addEventListener('submit', function(error) {
//     error.preventDefault();
//     console.log(username.value);

    // if (username.value === '') {
    //     showError(username, "Username is required");
    // } else {
    //     showSuccess(username);
    // }
    // if (email.value === '') {
    //     showError(email, "Email is required");
    // } else if (!isValidEmail(email.value))               {
    //     showError(email, "Email is not valid");
    // } else {
    //     showSuccess(email);
    // }
    
    // if (password.value === '') {
    //     showError(password, "Password is required");
    // } else {
    //     showSuccess(password);
    // }
    // if (password2.value === '') {
    //     showError(password2, "Password confirmation is required");
    // } else if (password2.value === password.value) {
    //     showSuccess(password2);
    // } else {
    //     showError(password2, "Invalid Password")
    // }
    // });

    form.addEventListener("submit", function(error) {
        error.preventDefault();

        checkRequired ([username, email, password, password2]);
    })