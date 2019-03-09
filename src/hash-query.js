export function writeSearchToQuery(existingQuery, search) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('search', search);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    return {
        search: searchParams.get('search'),
        page: Number(searchParams.get('page'))
    };
}