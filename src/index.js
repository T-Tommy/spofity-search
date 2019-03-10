import loadTracks from './listing-component.js';
import './search-component.js';
import displayParams from './display-params.js';
import { readFromQuery } from './hash-query.js';
import makeApiSearchUrl from './make-api-search-url.js';
import fetchSpotifyApi from './fetch-spotify-api.js';

loadPage();

window.addEventListener('hashchange', loadPage);

function loadPage() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    const url = makeApiSearchUrl(queryOptions);
    if(!url) {
        return;
    }
    fetchSpotifyApi(url, results => {
        displayParams();
        loadTracks(results.tracks.items);
    });
}

