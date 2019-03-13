import { makeProfileTemplate } from '../src/make-profile.js';

const test = QUnit.test;

QUnit.module('Make profile template');

test('Make profile template', assert => {
    // Arrange
    const expected = `
        <section id="profile">
            <div>
                <img src="https://image.flaticon.com/icons/png/128/149/149068.png" alt="user icon">
                <span>Tommy</span>
            </div>
            <button id="logout">Logout</button>
        </section>
    `;

    const user = {
        displayName: 'Tommy',
        photoURL: 'https://image.flaticon.com/icons/png/128/149/149068.png'
    };

    // Act
    const result = makeProfileTemplate(user);

    // Assert
    assert.htmlEqual(result, expected);
});