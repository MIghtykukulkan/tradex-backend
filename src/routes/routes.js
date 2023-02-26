//const mysqldb = require('./src/adapters/mysqldb')
const logger = require('../services/winston');
const mybusiness = require('../core/business');
const to = require('await-to-js').default;
var fs = require('fs');
var db = require('../dbservice/mongo');
const passport = require('passport');
require('../services/passport')


module.exports = router => {

    //example of a secured route
    router.get('/', async (req, res) => {
        logger.info('this is how you call a logger');
        res.send('test service!')
    });
    

    //example of a secured route
    router.get('/secure',passport.authenticate('jwt', { session: false }), 
    async (req, res) => {
        logger.info('this is how you call a logger');
        res.send('test service!')
    });
    

    router.get('/findgitusers',//passport.authenticate('jwt', { session: false }), 
    async (req,res)=>{
        let error, result, finaljson;
        //----------------only modify this portion--------------
        [error, result] = await to(mybusiness.findGitUsers());
        //-------------------------------------------------------
        finaljson = {"error":error, "result":result}
        //console.log(finaljson)
        res.send(finaljson);
        
    });

    //file upload 
    router.post('/upload', function(req, res) {
        req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename); 
        fstream = fs.createWriteStream('./uploads/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            res.send({"error":null, "result":"file uploaded"});
        });
    });

    });

    //database call

    router.post('/createNewuser', async(req,res)=>{
        let error, result, finaljson;
        //----------------only modify this portion--------------
        let user = req.body;
        [error, result] = await to(mybusiness.createNewUser(db, user));
        //-------------------------------------------------------
        finaljson = {"error":error, "result":result}
        res.send(finaljson);
        
    })

    /*-----------------------------------------------------------------------------*/
    //
    router.get('/api/products', async(req, res) => {
        const page = parseInt(req.query.page) || 1; // default to page 1 if not specified
        const limit = parseInt(req.query.limit) || 5; // default to limit 5 if not specified
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
      
        const results = {};
      
        //replace this code with mongoose call
        const products = [
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
            { id: 3, name: 'Product 3', price: 30 },
            { id: 4, name: 'Product 4', price: 40 },
            { id: 5, name: 'Product 5', price: 50 },
            { id: 6, name: 'Product 6', price: 60 },
            { id: 7, name: 'Product 7', price: 70 },
            { id: 8, name: 'Product 8', price: 80 },
            { id: 9, name: 'Product 9', price: 90 },
            { id: 10, name: 'Product 10', price: 100 }
          ];

        if (endIndex < products.length) {
          results.next = {
            page: page + 1,
            limit: limit
          };
        }
      
        if (startIndex > 0) {
          results.previous = {
            page: page - 1,
            limit: limit
          };
        }
      
        results.results = products.slice(startIndex, endIndex);
      
        res.json(results);
      });

}