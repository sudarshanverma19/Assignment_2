document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let valid = true;

    // Validate First Name
    let firstName = document.getElementById('firstName').value;
    if (firstName.trim() === '') {
        document.getElementById('firstNameStatus').innerText = 'POOR';
        valid = false;
    } else {
        document.getElementById('firstNameStatus').innerText = '';
    }

    // Validate Last Name
    let lastName = document.getElementById('lastName').value;
    if (lastName.trim() === '') {
        document.getElementById('lastNameStatus').innerText = 'POOR';
        valid = false;
    } else {
        document.getElementById('lastNameStatus').innerText = '';
    }

    // Validate Email
    let email = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailStatus').innerText = 'POOR';
        valid = false;
    } else {
        document.getElementById('emailStatus').innerText = '';
    }

    // Validate Password
    let password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordStatus').innerText = 'POOR';
        valid = false;
    } else {
        document.getElementById('passwordStatus').innerText = '';
    }

    // Validate Re-enter Password
    let repassword = document.getElementById('repassword').value;
    if (repassword !== password) {
        document.getElementById('repasswordStatus').innerText = 'POOR OR MISMATCH';
        valid = false;
    } else {
        document.getElementById('repasswordStatus').innerText = '';
    }

    // Validate Age
    let age = document.getElementById('age').value;
    if (age.trim() === '' || isNaN(age) || age <= 0) {
        document.getElementById('ageStatus').innerText = 'POOR';
        valid = false;
    } else {
        document.getElementById('ageStatus').innerText = '';
    }

    // Validate Phone Number
    let phone = document.getElementById('phone').value;
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneStatus').innerText = 'POOR';
        valid = false;
    } else {
        document.getElementById('phoneStatus').innerText = '';
    }

    // Validate Address
    let address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('addressStatus').innerText = 'POOR';
        valid = false;
    } else {
        document.getElementById('addressStatus').innerText = '';
    }

    // Validate State
    let state = document.getElementById('state').value;
    if (state.trim() === '') {
        document.getElementById('stateStatus').innerText = 'POOR';
        valid = false;
    } else {
        document.getElementById('stateStatus').innerText = '';
    }

    // Validate Declaration
    if (!document.getElementById('declaration').checked) {
        alert('You must declare that the given details are true.');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset();
    } else {
        alert('Please fill out the form correctly.');
    }
}