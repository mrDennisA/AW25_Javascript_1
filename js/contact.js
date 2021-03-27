const contactForm = document.querySelector("form");
const contactName = document.querySelector("#contactName");
const contactNameError = document.querySelector("#contactName-error");
const contactSubject = document.querySelector("#contactSubject");
const contactSubjectError = document.querySelector("#contactSubject-error");
const contactEmail = document.querySelector("#contactEmail");
const contactEmailError = document.querySelector("#contactEmail-error");
const contactAddress = document.querySelector("#contactAddress");
const contactAddressError = document.querySelector("#contactAddress-error");

const contactButton = document.querySelector("#contactButton");
const validateMessage = document.querySelector(".validateMessage");

// Validate Form
function contactValidateForm(event) {
    event.preventDefault();

    if (validateName(contactName.value) && checkLength(contactName.value, 0)) {
        contactNameError.style.color = "transparent";
    } else {
        contactNameError.style.color = "rgba(255, 64, 64, 1)";
    }

    if (validateName(contactName.value) && checkLength(contactSubject.value, 9)) {
        contactSubjectError.style.color = "transparent";
    } else {
        contactSubjectError.style.color = "rgba(255, 64, 64, 1)";
    }

    if (validateEmail(contactEmail.value)) {
        contactEmailError.style.color = "transparent";
    } else {
        contactEmailError.style.color = "rgba(255, 64, 64, 1)";
    }

    if (validateName(contactAddress.value) && checkLength(contactAddress.value, 24)) {
        contactAddressError.style.color = "transparent";
    } else {
        contactAddressError.style.color = "rgba(255, 64, 64, 1)";
    }

    if (
        validateName(contactName.value) &&
        checkLength(contactName.value, 0) &&
        validateName(contactName.value) &&
        checkLength(contactSubject.value, 9) &&
        validateEmail(contactEmail.value) &&
        validateName(contactAddress.value) &&
        checkLength(contactAddress.value, 24)
    ) {
        validateMessage.style.color = "limegreen";
        contactForm.reset();
    }
}

// Validate Lenght
function checkLength(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

// Validate Name
function validateName(name) {
    const regEX = /^[a-zA-ZæøåÆØÅ0-9 ]*$/;
    const patternMatches = regEX.test(name);

    return patternMatches;
}

// Validate Email
function validateEmail(email) {
    const regEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEX.test(email);
    return patternMatches;
}

// Submit Massage
function reset(event) {
    event.preventDefault();
    validateMessage.style.color = "transparent";
}

contactForm.addEventListener("input", reset);
contactForm.addEventListener("submit", contactValidateForm);
