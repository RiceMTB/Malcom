//https://www.telerik.com/blogs/step-by-step-create-node-js-rest-api-sql-server-database

const  Db = require('./config/dbops');
const   Order = require('./class/cm_joke');
const   express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors');
const  app = express();
const  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Joke API is runnning at ' + port);

router.use((request, response, next) => {
    console.log('Middleware received a request');
    next();
  })

router.route('/').get((request, response) => {
    response.json({please:"work"});
    })

router.route('/alljokes').get((request, response) => {
    Db.getAllJokes().then((data) => {
      response.json(data[0]);
    })
  })

router.route('/randomjoke').get((request, response) => {
    console.log("Request for Random Joke")
    Db.randomJoke().then((data) => {
      response.json(data[0]);
    })
  })

// router.route('/newjoke').post((request, response)=>{ 
//     let newJoke = request.body;
//     response.send('New Joke Received: ' + JSON.stringify(newJoke));
//   })

