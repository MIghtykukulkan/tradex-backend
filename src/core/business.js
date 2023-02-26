// all business logic should be present in this core folder
const to = require('await-to-js').default;
const axios = require('axios')
const https = require('https');



module.exports = {
    findGitUsers : findGitUsers
}


var getoptions = {
    method: "GET",
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    },
}

function createNewUser(){
    
}

function findGitUsers(){

    return new Promise(async (resolve, reject)=>{  
        axios.defaults.timeout = 30000;
        axios.defaults.httpsAgent = new https.Agent({ keepAlive: true });
        axios.get('https://dummy.restapiexample.com/api/v1/employees')
            .then(response => {
                console.log(response.data)
                resolve(response.data);

            })
            .catch(error => {
                console.log(error)
                reject(error);
            });

    });


    
  }