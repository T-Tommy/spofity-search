import trackList from '../data/data.js';
import loadTracks from './listing-component.js';
import './search-component.js';
import displayParams from './display-params.js';

if(window.location.hash.slice(1)) {
    displayParams();
}

window.addEventListener('hashchange', () => {
    loadTracks(trackList.tracks.items);
});