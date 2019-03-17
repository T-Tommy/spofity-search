import AUTHORIZATION_CODE from './authorization-code.js';

// const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';
const API_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const postUrl = /* CORS_ANYWHERE_URL + */ API_TOKEN_URL;

const postOptions = {
    method: 'post',
    headers: {
        authorization: `Basic ${AUTHORIZATION_CODE}`,
        'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
};

export default function fetchSpotifyApi(getUrl, callback) {
    fetch(postUrl, postOptions)
        .then(response => response.json())
        .then(token => ({
            headers: {
                Authorization: `${token.token_type} ${token.access_token}`
            }
        }))
        .then(getOptions => fetch(getUrl, getOptions))
        .then(response => response.json())
        .then(callback);
}