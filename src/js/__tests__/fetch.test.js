import fetchData from "../http";

const urlList = [
    ['empty', '', null],
    ['full', 'https://server:8080/user/1', '{}'],
];

test.each(urlList)('fetchData function with %s url', (_, url, expected) => {
    const result = fetchData(url);
    expect(result).toEqual(expected);
});