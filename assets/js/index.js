'use strict';

// Predefined credentials in localStorage
localStorage.setItem("username", "jaysn@email.com");
localStorage.setItem("password", "sukha204");

// Add event listener to login button
const loginBtn = document.getElementById('loginButton');
loginBtn.addEventListener('click', login);

function login() {
    // Retrieve stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Get user input
    const username = document.getElementById('email-phone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to home page on successful login
        window.location.href = 'main.html';
    } else {
        // Show error message on incorrect credentials
        document.getElementById('message-showing').innerText = 'Incorrect username and/or password';
    }
}
