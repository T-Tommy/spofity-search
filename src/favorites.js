import loadProfile from './make-profile.js';
import { auth, favoritesByUserRef } from './firebase.js';
import loadTracks from './listing-component.js';
import { makeFavoritesArray } from './make-favorites-array.js';

loadProfile();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {

        const value = snapshot.val();
        if(!value) {
            const trackTable = document.getElementById('track-table');
            trackTable.classList.add('hidden');
            const message = document.getElementById('message');
            message.classList.remove('hidden');
            return;
        } else {
            const favoritesArray = makeFavoritesArray(value);
            loadTracks(favoritesArray);
        }
    });
});