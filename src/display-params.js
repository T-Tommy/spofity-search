const searchBar = document.getElementById('search-bar');
const currentPageNode = document.getElementById('current-page');
const previousButton = document.getElementById('previous-button');


export default function displayParams(queryOptions) {
    searchBar.value = queryOptions.search;
    currentPageNode.textContent = queryOptions.page;
    previousButton.disabled = queryOptions.page === 1;
}