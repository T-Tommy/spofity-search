import trackList from '../data/data.js';
import loadTracks from './listing-component.js';
import './search-component.js';

const searchBar = document.getElementById('search-bar');
const params = new URLSearchParams(window.location.hash.slice(1));
searchBar.value = params.get('search');

window.addEventListener('hashchange', () => {
    loadTracks(trackList.tracks.items);
});