import { auth, favoritesByUserRef } from './firebase.js';

export default function loadTracks(trackList, tbody) {
    while(tbody.firstChild) {
        tbody.firstChild.remove();
    }

    trackList.forEach(track => {
        const dom = makeTrackRowTemplate(track);
        const tr = dom.querySelector('tr');

        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteTrackRef = userFavoritesRef.child(track.id);
        
        userFavoriteTrackRef.on('value', snapshot => {
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

export function makeTrackRowTemplate(track) {
    // const artist = track.artist || getArtists(track.artists);
    const template = document.createElement('template');
    template.innerHTML = `
        <tr>
            <td>${track.name}</td>
            <td>${track.artist || getArtists(track.artists)}</td>
        </tr>
    `;
    return template.content;
}

export function getArtists(artistsArr) {
    const artists = artistsArr.map(artist => artist.name);
    return artists.join(', ');
}