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

const header = document.querySelector('header');
export default function loadProfile() {
    auth.onAuthStateChanged(user => {
        if(user) {
            const dom = makeProfileTemplate(user);
            const button = dom.querySelector('button');
            button.addEventListener('click', () => {
                auth.signOut();
            });
            header.prepend(dom);
        } else {
            window.location = './auth.html';
        }
    });
}