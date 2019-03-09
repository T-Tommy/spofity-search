const form = document.getElementById('form');
const searchBar = document.getElementById('search-bar');
form.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchBar.value;
    console.log(searchTerm);
});