export function makeFavoritesArray(data) {
    const keys = Object.keys(data);
    const values = keys.map(key => data[key]);
    return values;
}