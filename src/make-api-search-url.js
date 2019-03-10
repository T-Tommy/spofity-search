export default function makeApiSearchUrl(queryOptions) {
    const API_URL = 'https://api.spotify.com/v1/search';
    const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';
    const PER_PAGE = 15;
    const searchUrl = new URL(API_URL);
    searchUrl.searchParams.set('q', queryOptions.search);
    searchUrl.searchParams.set('type', 'track');
    searchUrl.searchParams.set('market', 'US');
    searchUrl.searchParams.set('limit', PER_PAGE);
    searchUrl.searchParams.set('offset', (queryOptions.page - 1) * PER_PAGE);
    return CORS_ANYWHERE_URL + searchUrl.toString();
}