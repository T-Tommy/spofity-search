const config = {
    apiKey: 'AIzaSyCF7eEs1BuIA0aq-9b_r7VpyCZ5RdqEUho',
    authDomain: 'spofity-search.firebaseapp.com',
    databaseURL: 'https://spofity-search.firebaseio.com',
    projectId: 'spofity-search',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');