import { writeSearchToQuery } from './hash-query.js';

const form = document.getElementById('form');
const searchBar = document.getElementById('search-bar');
form.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchBar.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});