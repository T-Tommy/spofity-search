import loadProfile from './make-profile.js';
import { auth, favoritesByUserRef } from './firebase.js';

loadProfile();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const value = snapshot.val();
            console.log(value);
        });
});

export function makeFavoritesArray(data) {
    const keys = Object.keys(data);
    const values = keys.map(key => data[key]);
    return values;
}


// const userFavoritesRef = favoritesByUserRef.child(auth.currentUser.uid);

