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

export function makeTrackTableTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <table id="track-table">
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>ARTIST</th>
                </tr>
            </thead>
            <tbody id="track-tbody"></tbody>
        </table>
    `;
    return template.content;
}

export function getArtists(artistsArr) {
    const artists = artistsArr.map(artist => artist.name);
    return artists.join(', ');
}

const tbody = document.getElementById('track-tbody');
export default function loadTracks(trackList) {
    clearList();
    trackList.forEach(track => {
        const dom = makeTrackRowTemplate(track);
        tbody.appendChild(dom);
    });
}

function clearList() {
    while(tbody.firstChild) {
        tbody.firstChild.remove();
    }
}

