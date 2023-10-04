const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

form.addEventListener('submit', e => {
    e.preventDefault();
    var firstName = fname.value.trim()
    var lastName = lname.value.trim()
    var emailValue = email.value.trim()
    var passValue = pass.value.trim()

    if (firstName === '') {
        errorFunc(fname, "First Name cannot be empty");
    }

    if (lastName === '') {
        errorFunc(lname, "Last Name cannot be empty");
    }

    if (emailValue === '') {
        errorFunc(email, "Email cannot be empty");
    } else if (!emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        errorFunc(email, "Looks like this is not an email")
    }

    if (passValue === '') {
        errorFunc(pass,"Password cannot be empty")
    }

});

function errorFunc(element, message) {

    var elementContainer = element.parentElement;
    var error_message = elementContainer.querySelector('.error-message');

    element.classList.add("error")
    element.placeholder = '';
    error_message.innerText = message;
    error_message.classList.add("error_message");
}