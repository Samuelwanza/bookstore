const axios = require('axios');

const appUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = axios
  .post(`${appUrl}/apps/`)
  .then((res) => res.data)
  .then((data) => data)
  .catch(() => console.log);
export default appId;
