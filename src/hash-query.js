export function writeSearchToQuery(existingQuery, search) {
    const params = new URLSearchParams(existingQuery);
    params.set('search', search);
    params.set('page', 1);
    return params.toString();
}