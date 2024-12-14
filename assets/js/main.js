'use strict';
 
const API_URL = 'https://randomuser.me/api/?nat=CA&results=10';
 
async function getRandomUsers() {
    try {
        const response = await fetch(API_URL);
 
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
 
        const data = await response.json();
        const users = data.results;
 
        renderUsers(users);
    } catch (error) {
        console.error('Failed to fetch random users:', error.message);
    }
}
 
function renderUsers(users) {
    const container = document.getElementById('profile-suggestions');
 
    users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
 
        const img = document.createElement('img');
        img.src = user.picture.medium;
        img.alt = `${user.name.first} ${user.name.last}`;
 
        const userDetails = document.createElement('div');
        userDetails.classList.add('user-details');
 
        const userName = document.createElement('p');
        userName.classList.add('user-name');
        userName.textContent = `${user.name.first} ${user.name.last}`;
 
        const userLocation = document.createElement('p');
        userLocation.classList.add('user-location');
        userLocation.textContent = `${user.location.city}, ${user.location.country}`;
 
        userDetails.appendChild(userName);
        userDetails.appendChild(userLocation);
 
        const addButton = document.createElement('button');
        addButton.classList.add('add-button');
        addButton.textContent = 'Add';
 
        userDiv.appendChild(img);
        userDiv.appendChild(userDetails);
        userDiv.appendChild(addButton);
 
        container.appendChild(userDiv);
    });
}
 
getRandomUsers();