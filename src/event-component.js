import { writeSearchToQuery, writePageToQuery, readFromQuery, updateHash } from './hash-query.js';

const form = document.getElementById('form');
const searchBar = document.getElementById('search-bar');

form.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchBar.value;
    updateHash(writeSearchToQuery, searchTerm);
});

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

previousButton.addEventListener('click', () => {
    const queryOptions = readFromQuery();
    queryOptions.page--;
    updateHash(writePageToQuery, queryOptions.page);
});

nextButton.addEventListener('click', () => {
    const queryOptions = readFromQuery();
    queryOptions.page++;
    updateHash(writePageToQuery, queryOptions.page);
});