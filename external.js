// require external libraries and dependencies
const axios = require('axios');

// make an HTTP request to an external API
axios.get('https://api.external.com/products')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
