import { makeTrackRowTemplate, getArtists } from '../src/listing-component.js';

const test = QUnit.test;

QUnit.module('Template Test');

const track = {
    "album": {
        "album_type": "single",
        "artists": [{
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr"
            },
            "href": "https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
            "id": "7n2wHs1TKAczGzO7Dd2rGr",
            "name": "Shawn Mendes",
            "type": "artist",
            "uri": "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr"
        }, {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/2qxJFvFYMEDqd7ui6kSAcq"
            },
            "href": "https://api.spotify.com/v1/artists/2qxJFvFYMEDqd7ui6kSAcq",
            "id": "2qxJFvFYMEDqd7ui6kSAcq",
            "name": "Zedd",
            "type": "artist",
            "uri": "spotify:artist:2qxJFvFYMEDqd7ui6kSAcq"
        }],
        "external_urls": {
            "spotify": "https://open.spotify.com/album/3ynoYncFXzo2OfPT8j93Pw"
        },
        "href": "https://api.spotify.com/v1/albums/3ynoYncFXzo2OfPT8j93Pw",
        "id": "3ynoYncFXzo2OfPT8j93Pw",
        "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/59bc92ae2bab0c7b08b5ec6d9dcbe47a83390de8",
            "width": 640
        }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ecf953bef990328fa822c53062793ec8a529920f",
            "width": 300
        }, {
            "height": 64,
            "url": "https://i.scdn.co/image/b7caad5378dd4df803703adc25fce61799ac7346",
            "width": 64
        }],
        "name": "Lost In Japan (Remix)",
        "release_date": "2018-09-27",
        "release_date_precision": "day",
        "total_tracks": 1,
        "type": "album",
        "uri": "spotify:album:3ynoYncFXzo2OfPT8j93Pw"
    },
    "artists": [{
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr"
        },
        "href": "https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
        "id": "7n2wHs1TKAczGzO7Dd2rGr",
        "name": "Shawn Mendes",
        "type": "artist",
        "uri": "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr"
    }, {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/2qxJFvFYMEDqd7ui6kSAcq"
        },
        "href": "https://api.spotify.com/v1/artists/2qxJFvFYMEDqd7ui6kSAcq",
        "id": "2qxJFvFYMEDqd7ui6kSAcq",
        "name": "Zedd",
        "type": "artist",
        "uri": "spotify:artist:2qxJFvFYMEDqd7ui6kSAcq"
    }],
    "disc_number": 1,
    "duration_ms": 201253,
    "explicit": false,
    "external_ids": {
        "isrc": "USUM71813582"
    },
    "external_urls": {
        "spotify": "https://open.spotify.com/track/575NJxNUVDqwJGdzBrlLbv"
    },
    "href": "https://api.spotify.com/v1/tracks/575NJxNUVDqwJGdzBrlLbv",
    "id": "575NJxNUVDqwJGdzBrlLbv",
    "is_local": false,
    "is_playable": true,
    "name": "Lost In Japan - Remix",
    "popularity": 83,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:575NJxNUVDqwJGdzBrlLbv"
};

test('Track row template', assert => {
    // Arrange
    const expected = `
        <tr>
            <td>Lost In Japan - Remix</td>
            <td>Shawn Mendes, Zedd</td>
        </tr>
    `;
    // Act
    const result = makeTrackRowTemplate(track);

    // Assert
    assert.htmlEqual(result, expected);
});

test('Get artists', assert => {
    // Arrange
    const expected = 'Shawn Mendes, Zedd';

    // Act
    const result = getArtists(track.artists);

    // Assert
    assert.equal(result, expected);
});


test('Track table template', assert => {
    // Arrange
    const expected = `
        <table id="track-table">
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>ARTIST</th>
                </tr>
            </thead>
            <tbody id="track-tbody"></tbody>
        </table>
    `;

    // Act
    const result = makeTrackTableTemplate();

    // Assert
    assert.htmlEqual(result, expected);
});