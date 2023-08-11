//https://www.telerik.com/blogs/step-by-step-create-node-js-rest-api-sql-server-database
/* Outside requirments */

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const router = express.Router();
//End outside
/* Stuff we made */
const Db = require('./config/dbops');
const ExData = require("./externalAPI/ExternalDataApi.js") 
const morganConfig = require('./logging/morgan_config.js')
//End of our stff

const app = express();
app.use(morgan(morganConfig.ourLogFormat, { stream: morganConfig.ourLog}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:  true }));
app.use(cors());
app.use('/api', router);


var  port = process.env.PORT || 8090;
app.listen(port, ()=> { 
  console.log('*'.repeat(20) + " " +'Joke API is listening on port: ' + port + ' ' + '*'.repeat(20))
})


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

router.route('/').post((request, response)=>{ 
    console.log("Post Request")
    let newJoke = request.body;
    response.send('New Joke Received: ' + JSON.stringify(newJoke));
    Db.insertJoke(newJoke)
  })

  router.route('/jokebyid/:myID').get((request, response)=>{ 
    console.log("Get Request For Joke By ID");
    console.log('Getting: ' + request.params.myID);
    Db.jokebyID(request.params.myID).then((data)=> {
      response.json(data[0])
    });
  })

  router.route('/jokedelete/:myID').delete((request, response)=>{ 
    console.log("Delete Request to delete Joke By ID");
    console.log('Will Delete Joke_ID: ' + request.params.myID);
    Db.deleteJokeByID(request.params.myID).then((data)=> {
       response.json(data)
     });
  })

  router.route('/bitcoin/').get((request, response)=>{ 
    console.log("Request for Bitcoin Price");
    ExData.bitconPrice().then((data) => {
      outData = ExData.bitconOutData(data)
      response.json(outData);
    });
  })