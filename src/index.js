import './event-component.js';
import { readFromQuery } from './hash-query.js';
import makeApiSearchUrl from './make-api-search-url.js';
import fetchSpotifyApi from './fetch-spotify-api.js';
import displayParams from './display-params.js';
import loadTracks from './listing-component.js';
import loadProfile from './make-profile.js';

const trackTable = document.getElementById('track-table');
const pageNav = document.getElementById('page-nav');
const message = document.getElementById('message');
const trackTbody = document.getElementById('track-tbody');

loadProfile();
loadPage();

window.addEventListener('hashchange', loadPage);

function loadPage() {
    const queryOptions = readFromQuery();
    const url = makeApiSearchUrl(queryOptions);
    if(check(url)) {
        message.textContent = 'Search for a song!';
        return;
    }
    fetchSpotifyApi(url, results => {
        displayParams(queryOptions, results.tracks.total);
        if(check(results.tracks.items.length)) {
            message.textContent = 'No results found';
            return;
        }
        loadTracks(results.tracks.items, trackTbody);
    });
}

function check(condition) {
    if(!condition) {
        trackTable.classList.add('hidden');
        pageNav.classList.add('hidden');
        message.classList.remove('hidden');
        return true;
    }
    trackTable.classList.remove('hidden');
    pageNav.classList.remove('hidden');
    message.classList.add('hidden');
    return false;
}

