import makeApiSearchUrl from '../src/make-api-search-url.js';

const test = QUnit.test;

QUnit.module('Make URL for API Search');


test('Test name', assert => {
    // Arrange
    const expected = 'https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?q=lost+in+japan&type=track&market=US&limit=15&offset=0';
    const query = {
        search: 'lost in japan',
        page: 1
    };
    // Act
    const result = makeApiSearchUrl(query);

    // Assert
    assert.equal(result, expected);
});