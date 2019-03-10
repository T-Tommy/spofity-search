export function writeSearchToQuery(existingQuery, search) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('search', search);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function updateHash(callback, queryOption) {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = callback(existingQuery, queryOption);
    window.location.hash = newQuery;
}

export function readFromQuery() {
    const existingQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(existingQuery);
    return {
        search: searchParams.get('search'),
        page: Number(searchParams.get('page'))
    };
}