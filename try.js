const axios = require('axios')
const https = require('https');

axios.defaults.httpsAgent = new https.Agent({ keepAlive: true });
axios.get('https://dummy.restapiexample.com/api/v1/employees')
.then(response => {
    console.log(response.data)
    //resolve(response.data);

})
.catch(error => {
    console.log(error)
    //reject(error);
});

/*


https.get('https://dummy.restapiexample.com/api/v1/employees', (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', (error) => {
  console.error(error);
});
*/