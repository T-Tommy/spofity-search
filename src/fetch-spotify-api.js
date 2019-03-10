import AUTHORIZATION_CODE from './authorization-code.js';
const postOptions = {
    method: 'post',
    headers: {
        authorization: `Basic ${AUTHORIZATION_CODE}`,
        'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
};

const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const basePostUrl = 'https://accounts.spotify.com/api/token';
const postUrl = corsAnywhereUrl + basePostUrl;

export default function fetchSpotifyApi(getUrl, callback) {
    fetch(postUrl, postOptions)
        .then(response => response.json())
        .then(token => {
            const getOptions = {
                headers: {
                    Authorization: `${token.token_type} ${token.access_token}`
                }
            };
            return getOptions;
        })
        .then(getOptions => {
            fetch(getUrl, getOptions)
                .then(response => response.json())
                .then(callback);
        });
}