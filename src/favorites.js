import loadProfile from './make-profile.js';
import { auth, favoritesByUserRef } from './firebase.js';
import loadTracks from './listing-component.js';
import { makeFavoritesArray } from './make-favorites-array.js';

loadProfile();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const favoritesArray = makeFavoritesArray(value);
        loadTracks(favoritesArray);
    });
});