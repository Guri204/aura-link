'use strict';

localStorage.setItem("username", "jaysn@email.com");
localStorage.setItem("password", "sukha204");

const loginBtn = document.getElementById('loginButton');
loginBtn.addEventListener('click', login);

function login(event) {
    event.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    const username = document.getElementById('user-inputs').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'main.html';
    } else {
        document.querySelector('#message-showing p').classList.add('visible');
        document.querySelector('#message-showing p').innerText = 'Incorrect username and/or password';
    }
}
