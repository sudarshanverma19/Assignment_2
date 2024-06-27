function validateForm() {
    let isValid = true;

    // Get form elements
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    // Get error elements
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");

    // Username validation
    if (username.value.trim() === "") {
        username.classList.add("error-border");
        usernameError.style.display = "inline";
        isValid = false;
    } else {
        username.classList.remove("error-border");
        usernameError.style.display = "none";
    }

    // Password validation
    if (password.value.trim() === "") {
        password.classList.add("error-border");
        passwordError.style.display = "inline";
        isValid = false;
    } else {
        password.classList.remove("error-border");
        passwordError.style.display = "none";
    }

    return isValid;
}
