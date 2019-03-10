import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/hash-query.js';
const test = QUnit.test;

QUnit.module('Hash Query Test');

test('Write search to existing query', assert => {
    // Arrange
    const expected = 'search=lost+in+japan&page=1';
    const existingQuery = 'search=yellow&page=2';
    const search = 'lost in japan';

    // Act
    const result = writeSearchToQuery(existingQuery, search);

    // Assert
    assert.equal(result, expected);
});

test('Write search to empty query', assert => {
    // Arrange
    const expected = 'search=lost+in+japan&page=1';
    const existingQuery = '';
    const search = 'lost in japan';

    // Act
    const result = writeSearchToQuery(existingQuery, search);

    // Assert
    assert.equal(result, expected);
});

test('Read from query to create query object', assert => {
    // Arrange
    const expected = {
        search: 'lost in japan',
        page: 3
    };
    const query = 'search=lost+in+japan&page=3';
    // Act
    const result = readFromQuery(query);

    // Assert
    assert.deepEqual(result, expected);
});


test('Write page to query', assert => {
    // Arrange
    const expected = 'search=lost+in+japan&page=3';
    const existingQuery = 'search=lost+in+japan&page=1';
    const page = 3;

    // Act
    const result = writePageToQuery(existingQuery, page);

    // Assert
    assert.equal(result, expected);
});