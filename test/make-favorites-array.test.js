const test = QUnit.test;

QUnit.module('Make favorites array');

import { makeFavoritesArray } from '../src/make-favorites-array';

test('make favorites array', assert => {
    // Arrange
    const testData = {
        abc: { name: 'abc' },
        def: { name: 'def' },
        ghi: { name: 'ghi' }
    };
    const expected = [
        { name: 'abc' },
        { name: 'def' },
        { name: 'ghi' }
    ];

    // Act
    const result = makeFavoritesArray(testData);

    // Assert
    assert.deepEqual(result, expected);
});