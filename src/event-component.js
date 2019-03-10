import { writeSearchToQuery, writePageToQuery, updateHash } from './hash-query.js';

const form = document.getElementById('form');
const searchBar = document.getElementById('search-bar');

form.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchBar.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

let currentPageNumber = 1;

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updateHash(writePageToQuery, currentPageNumber);
});

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updateHash(writePageToQuery, currentPageNumber);
});

