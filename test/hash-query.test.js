import { writeSearchToQuery } from '../src/hash-query.js';
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