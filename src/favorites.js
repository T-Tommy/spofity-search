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


// const userFavoritesRef = favoritesByUserRef.child(auth.currentUser.uid);

