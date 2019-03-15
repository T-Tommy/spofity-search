import { auth } from './firebase.js';

export function makeProfileTemplate(user) {
    const html = `
        <section id="profile">
            <div>
                <img src="${user.photoURL}" alt="user icon">
                <span>${user.displayName}</span>
            </div>
            <button id="logout">Logout</button>
        </section>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

// const header = document.querySelector('header');
export default function loadProfile() {
    auth.onAuthStateChanged(user => {
        if(user) {
            const username = document.getElementById('username');
            username.textContent = user.displayName;
            const userIcon = document.getElementById('user-icon');
            if(user.photoURL) {
                userIcon.src = user.photoURL;
            }
            const logoutButton = document.getElementById('logout');
            logoutButton.addEventListener('click', () => {
                auth.signOut();
            });
        } else {
            window.location = './auth.html';
        }
    });
}