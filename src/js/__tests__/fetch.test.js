import fetchData from "../http";

const myBlob = new Blob(['{level: 10}']);
const myOptions = { status: 200, statusText: "ok" };
const response = new Response(myBlob, myOptions);

const urlList = [
    ['empty', '', new Response()],
    ['full', 'https://server:8080/user/1', response],
];

test.each(urlList)('fetchData function with %s url', (_, url, expected) => {
    const result = fetchData(url);
    expect(result.status).toBe(expected.status);
});