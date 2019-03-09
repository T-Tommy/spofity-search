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

const tbody = document.getElementById('track-tbody');
export default function loadTracks(trackList) {
    trackList.forEach(track => {
        const dom = makeTrackRowTemplate(track);
        tbody.appendChild(dom);
    });
}
