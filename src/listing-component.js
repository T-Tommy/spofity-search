import { auth, favoritesByUserRef } from './firebase.js';
const tbody = document.getElementById('track-tbody');

export default function loadTracks(trackList) {
    clearList();
    trackList.forEach(track => {
        const dom = makeTrackRowTemplate(track);
        const tr = dom.querySelector('tr');

        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteTrackRef = userFavoritesRef.child(track.id);
        
        userFavoriteTrackRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                if(value) {
                    tr.classList.add('favorite');
                } else {
                    tr.classList.remove('favorite');
                }
            });


        tr.addEventListener('click', () => {
            if(tr.classList.contains('favorite')) {
                tr.classList.remove('favorite');
                userFavoriteTrackRef.remove();
            } else {
                tr.classList.add('favorite');
                userFavoriteTrackRef.set({
                    id: track.id,
                    name: track.name,
                    artist: getArtists(track.artists),
                });
            }
        });
        tbody.appendChild(dom);
    });
}

function clearList() {
    while(tbody.firstChild) {
        tbody.firstChild.remove();
    }
}

export function makeTrackRowTemplate(track) {
    const template = document.createElement('template');
    template.innerHTML = `
        <tr>
            <td>${track.name}</td>
            <td>${getArtists(track.artists)}</td>
        </tr>
    `;
    return template.content;
}

export function getArtists(artistsArr) {
    const artists = artistsArr.map(artist => artist.name);
    return artists.join(', ');
}