import loadProfile from './make-profile.js';
import { auth, favoritesByUserRef } from './firebase.js';
import loadTracks from './listing-component.js';

loadProfile();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const favoritesArray = makeFavoritesArray(value);
        loadTracks(favoritesArray);
    });
});

export function makeFavoritesArray(data) {
    const keys = Object.keys(data);
    const values = keys.map(key => data[key]);
    return values;
}




// const userFavoritesRef = favoritesByUserRef.child(auth.currentUser.uid);

