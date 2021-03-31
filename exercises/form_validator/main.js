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

function isValidEmail(input) {
    const regularExpression = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value));
    if (regularExpression.test(input.value)) {
    showSuccess(input);
} else {
    showError(input, `${getFieldName(input)} not a valid email`)
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`); 
        } else {
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} is too short`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} has too many characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(password, password2) {
    if (password.value !== password2.value) {
        showError(input, `${getFieldName(password2)} does not match`);
    } else {
        showSuccess(password2);
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
        checkPasswordsMatch(password, password2);
        checkLength(password, 5, 15);
        isValidEmail(email);

    })