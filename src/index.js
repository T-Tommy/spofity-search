import trackList from '../data/data.js';
import loadTracks from './listing-component.js';
import './search-component.js';
import displayParams from './display-params.js';
import { readFromQuery } from './hash-query.js';
import makeApiSearchUrl from './make-api-search-url.js';


if(window.location.hash.slice(1)) {
    displayParams();
}

window.addEventListener('hashchange', loadPage);

function loadPage() {
    const exisitingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(exisitingQuery);
    const url = makeApiSearchUrl(queryOptions);
    console.log(url);
    loadTracks(trackList.tracks.items);
}