const searchBar = document.getElementById('search-bar');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

export default function displayParams(queryOptions, totalTracks) {
    searchBar.value = queryOptions.search;
    currentPageNode.textContent = queryOptions.page;

    const totalPagesNumber = Math.ceil(Number(totalTracks) / 15);
    totalPagesNode.textContent = totalPagesNumber;
    
    previousButton.disabled = queryOptions.page === 1;
    nextButton.disabled = queryOptions.page === totalPagesNumber;
}