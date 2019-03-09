import trackList from '../data/data.js';
import loadTracks from './listing-component.js';
import './search-component.js';
import { readFromQuery } from './hash-query.js';

const searchBar = document.getElementById('search-bar');
const existingQuery = window.location.hash.slice(1);
const queryOptions = readFromQuery(existingQuery);
searchBar.value = queryOptions.search;

window.addEventListener('hashchange', () => {
    loadTracks(trackList.tracks.items);
});