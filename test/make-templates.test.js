const test = QUnit.test;

QUnit.module('Template Test');

function makeTrackRowTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <tr>
            <td>Lost In Japan - Remix</td>
            <td>Shawn Mendes, Zedd</td>
        </tr>
    `;
    return template.content;
}

test('Track row template', assert => {
    // Arrange
    const expected = `
        <tr>
            <td>Lost In Japan - Remix</td>
            <td>Shawn Mendes, Zedd</td>
        </tr>
    `;

    // Act
    const result = makeTrackRowTemplate();

    // Assert
    assert.htmlEqual(result, expected);
});