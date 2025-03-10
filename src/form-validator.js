const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
const confirmedMessage = document.getElementById('confirmed-feedback');

function showError(input, message) {
    input.style.borderColor = 'red';
    input.nextElementSibling.innerText = message;
}

function showSuccess(input) {
    input.style.borderColor = 'green';
    input.nextElementSibling.innerText = '';
}

function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

function checkEmail(input) {
    const isEmail = /^.+@.+$/;
    if(isEmail.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, `${getFieldName(input)} format is not valid`);
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(element => {
        if(element.value.trim() === '') {
            showError(element, `${getFieldName(element)} es obligatorio`);
        }
        else {
            showSuccess(element);
        }
    });
}

function checkAllGreen(inputArr) {
    let allGreens = true;
    inputArr.forEach(element => {
        if(element.style.borderColor !== 'green') {
            allGreens = false;
        }
    });
    return allGreens;
}

function sendConfirmation() {
    const inputs = form.querySelectorAll('input');
    const textAreas = form.querySelectorAll('textarea');
    if(checkAllGreen(inputs) && checkAllGreen(textAreas)) {
        inputs.forEach(element => {
            element.style.borderColor = 'white';
        });
        textAreas.forEach(element => {
            element.style.borderColor = 'white';
        });
        confirmedMessage.innerText = 'Se ha enviado la sugerencia, gracias';
        confirmedMessage.innerText.color = 'black';
        setTimeout(function() {
            confirmedMessage.innerText = '';
        }, 2000);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, message]);
    checkEmail(email);
    sendConfirmation();
})