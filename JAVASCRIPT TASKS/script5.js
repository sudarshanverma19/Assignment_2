function validateForm() {
    let isValid = true;

    // Get form elements
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let website = document.getElementById("website");
    let message = document.getElementById("message");

    // Get error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let websiteError = document.getElementById("websiteError");
    let messageError = document.getElementById("messageError");

    // Name validation
    if (name.value.trim() === "") {
        name.classList.add("error-border");
        nameError.style.display = "inline";
        isValid = false;
    } else {
        name.classList.remove("error-border");
        nameError.style.display = "none";
    }

    // Email validation
    if (email.value.trim() === "" || !validateEmail(email.value)) {
        email.classList.add("error-border");
        emailError.style.display = "inline";
        isValid = false;
    } else {
        email.classList.remove("error-border");
        emailError.style.display = "none";
    }

    // Website validation
    if (website.value.trim() === "" || !validateURL(website.value)) {
        website.classList.add("error-border");
        websiteError.style.display = "inline";
        isValid = false;
    } else {
        website.classList.remove("error-border");
        websiteError.style.display = "none";
    }

    // Message validation
    if (message.value.trim() === "") {
        message.classList.add("error-border");
        messageError.style.display = "inline";
        isValid = false;
    } else {
        message.classList.remove("error-border");
        messageError.style.display = "none";
    }

    return isValid;
}

function validateEmail(email) {
    // Simple email regex pattern
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    return pattern.test(email);
}

function validateURL(url) {
    // Simple URL regex pattern
    let pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return pattern.test(url);
}
