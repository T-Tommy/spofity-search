import loadTracks from './listing-component.js';
import displayParams from './display-params.js';
import { readFromQuery } from './hash-query.js';
import makeApiSearchUrl from './make-api-search-url.js';
import fetchSpotifyApi from './fetch-spotify-api.js';
import './event-component.js';

const trackTable = document.getElementById('track-table');
const pageNav = document.getElementById('page-nav');
const message = document.getElementById('message');

loadPage();

window.addEventListener('hashchange', loadPage);

function loadPage() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    const url = makeApiSearchUrl(queryOptions);
    if(check(url)) {
        message.textContent = 'Search for a song!';
        return;
    }
    fetchSpotifyApi(url, results => {
        displayParams(queryOptions, results.tracks.total);
        if(check(results.tracks.items.length)) {
            message.textContent = 'No results found!';
            return;
        }
        loadTracks(results.tracks.items);
    });
}

function check(condition) {
    if(!condition) {
        trackTable.classList.add('hidden');
        pageNav.classList.add('hidden');
        message.classList.remove('hidden');
        return true;
    } else {
        trackTable.classList.remove('hidden');
        pageNav.classList.remove('hidden');
        message.classList.add('hidden');
        return false;
    }
}