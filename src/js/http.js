export default function fetchData(url) {
  if (url !== '') {
    const myBlob = new Blob(['{level: 10}']);
    const response = new Response(myBlob, {status: 200});
    return response;
  }
  return new Response();
}
