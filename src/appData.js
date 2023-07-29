const axios = require('axios');

const appUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = axios
  .post(`${appUrl}/apps/`)
  .then((res) => res.data)
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch(() => console.log);
console.log(appId);

// // Create a new app
// fetch(`${appUrl}/apps/`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then((res) => {
//     // Check if the response is JSON
//     const contentType = res.headers.get('content-type');
//     if (contentType && contentType.includes('application/json')) {
//       return res.json(); // If it's JSON, parse it
//     } else {
//       return res.text(); // If it's not JSON, treat it as plain text
//     }
//   })
//   .then((data) => {
//     // Check if data is JSON or plain text
//     if (typeof data === 'object') {
//       console.log('New App Identifier:', data); // It's JSON, so log the object
//     } else {
//       console.log('Response as Plain Text:', data); // It's plain text, so log as is
//     }
//   })
//   .catch((error) => {
//     console.error('Error creating the app:', error);
//     // Handle any errors that occurred during the request
//   });
