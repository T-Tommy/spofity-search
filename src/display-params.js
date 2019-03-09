import { readFromQuery } from './hash-query.js';

const searchBar = document.getElementById('search-bar');
const currentPageNode = document.getElementById('current-page');

export default function displayParams() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    searchBar.value = queryOptions.search;
    currentPageNode.textContent = queryOptions.page;
}