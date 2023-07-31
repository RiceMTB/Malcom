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
Description: Returns Random Jokes & Punchline as Recordset
************************/

async function insertJoke(jokeStr, punchlineStr) {
  try {
      let pool = await sql.connect(sqlConfig)
      let jokes = await pool.request()
          .input('joke', jokeStr)
          .input('punchline', punchlineStr)
          .execute(dbSQLStatements.SPI_Names.SPI_JOKE_PUNCHLINE)
      console.log("Joke Inserted")
  } 
  catch (err) {
      console.error(err)
      // ... error checks https://codedamn.com/news/javascript/javascript-async-await-error
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
    insertJoke: insertJoke
  }

/*****************************************************
End of Module
*****************************************************/
