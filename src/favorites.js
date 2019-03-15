import loadProfile from './make-profile.js';
import { auth, favoritesByUserRef } from './firebase.js';
import loadTracks from './listing-component.js';
import { makeFavoritesArray } from './make-favorites-array.js';
const favoritesTbody = document.getElementById('favorites-tbody');
loadProfile();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        console.log(value);
        const favoritesTable = document.getElementById('favorites-table');
        if(!value) {
            favoritesTable.classList.add('hidden');
        } else {
            favoritesTable.classList.remove('hidden');
            const favoritesArray = makeFavoritesArray(value);
            loadTracks(favoritesArray, favoritesTbody);
        }
    });
});