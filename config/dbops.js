/*****************************************************
Start of Module
*****************************************************/

/*****************************************************
Imports
*****************************************************/
const sql = require("mssql/msnodesqlv8");
const sqlConfig = require('./dbconfig')["development"];
const dbSQLStatements = require('./dbSQLStatements')
/*****************************************************
Local Constants
*****************************************************/

/*****************************************************
Code Start
*****************************************************/

/***********************
Function: allJoke
Created/By: 23 July 23 Rice
Description: Returns Jokes & Punchline as Recordset
************************/

async function allJoke() {
  try {
      let pool = await sql.connect(sqlConfig)
      let jokes = await pool.request()
          .query(dbSQLStatements.Select_Statements.ALLJOKE)
      return jokes.recordsets
  } 
  catch (err) {
    console.error(err)
      // ... error checks https://codedamn.com/news/javascript/javascript-async-await-error
  }
}

/***********************
Async Function: randomJoke
Created/By: 23 July 23 Rice
Description: Returns Random Jokes & Punchline as Recordset
************************/

async function randomJoke() {
  try {
      let pool = await sql.connect(sqlConfig)
      let jokes = await pool.request()
          .query(dbSQLStatements.Select_Statements.RANDJOKE)
      return jokes.recordsets
  } 
  catch (err) {
      console.error(err)
      // ... error checks https://codedamn.com/news/javascript/javascript-async-await-error
  }
  }

/***********************
Async Function: insertJoke
Created/By: 23 July 23 Rice
Description: Inserts a new Joke to DB
************************/

async function insertJoke(new_joke_data_in) {
  try {
      let pool = await sql.connect(sqlConfig)
      let jokes = await pool.request()
          .input('joke', sql.VarChar, new_joke_data_in.joke)
          .input('punchline', sql.VarChar, new_joke_data_in.punchline)
          .execute(dbSQLStatements.SPI_Names.SPI_JOKE_PUNCHLINE)
      console.log("Joke Inserted")
  } 
  catch (err) {
      console.error(err)
      // ... error checks https://codedamn.com/news/javascript/javascript-async-await-error
  }
}

/***********************
Async Function: jokeByID
Created/By: 8 Aug 23 Rice
Description: Returns a Joke based on ID
************************/

async function jokeByID(JokeIDin) {
  try {
      let pool = await sql.connect(sqlConfig)
      let jokes = await pool.request()
          .input('IDin', sql.Int, JokeIDin)
          .execute(dbSQLStatements.SP_Names.SP_JOKE_BY_ID)
      return jokes.recordsets
  } 
  catch (err) {
      console.error(err)
      // ... error checks https://codedamn.com/news/javascript/javascript-async-await-error
  }
}

/***********************
Async Function: deleteJokeByID
Created/By: 8 Aug 23 Rice
Description: Returns a Joke based on ID
************************/

async function deleteJokeByID(JokeIDin) {
  try {
      let pool = await sql.connect(sqlConfig)
      let jokes = await pool.request()
          .input('jokeID', sql.Int, JokeIDin)
          .execute(dbSQLStatements.SPD_Names.SPD_JOKE)
      return {
              "DELETE": JokeIDin,
              "STATUS": "SUCCSESS"
              }
  } 
  catch (err) {
      console.error(err)
      // ... error checks https://codedamn.com/news/javascript/javascript-async-await-error
      return {
        "DELETE": JokeIDin,
        "STATUS": "FAIL",
        "ERROR": err
        }
    }
}

/*****************************************************
Code end
*****************************************************/


/*****************************************************
Exports
*****************************************************/

module.exports = {
    getAllJokes: allJoke,
    randomJoke: randomJoke,
    insertJoke: insertJoke, 
    jokebyID: jokeByID,
    deleteJokeByID: deleteJokeByID
  }

/*****************************************************
End of Module
*****************************************************/
