
/*****************************************************
* Start of Module
* module: MHCon.js
Description:
Classification:
GitHub: https://github.com/RiceMTB/Malcom/edit/main/config/MHCon.js
Optional: Upto author but will come up wth some stds
*****************************************************/

/*****************************************************
Require ABC order
Base 
PAckeages
user dev
*****************************************************/
const sql = require("mssql/msnodesqlv8");
const sqlConfig = require('./dbconfig')["development"];
const dbSQLStatements = require('./dbSQLStatements')
/*****************************************************
Local Constants
*****************************************************/

/*****************************************************
Start of Code
*****************************************************/

/***********************
Function: 
Description: Returns Jokes & Punchline as Recordset
(optinal) Type:
Parameters:

date    Auth    Comment
YYYYMMMDD
************************/

async function allJoke() {
  try {
      const pool = await sql.connect(sqlConfig); //const vs let research
      const jokes = await pool.request()
          .query(dbSQLStatements.Select_Statements.ALLJOKE); // yes on semi
      return jokes.recordsets; //pick a linter....
  }  //try
  catch (err) {
    console.error(err)
      // ... error checks https://codedamn.com/news/javascript/javascript-async-await-error
  } //catch(err)
};   //End of Function allJoke()

/***********************
Async Function: randomJoke
Created/By: 23 July 23 Rice
Description: Returns Random Jokes & Punchline as Recordset
************************/

exports.randomJoke = async function () {
    try {
        let pool = await sql.connect(sqlConfig)
        let jokes = await pool.request()
            .query(dbSQLStatements.Select_Statements.RANDJOKE)
        return jokes.recordsets
    } catch (err) {
        console.error(err)
        // ... error checks https://codedamn.com/news/javascript/javascript-async-await-error
    }
  }

/*****************************************************
Exports
*****************************************************/

module.exports = {
    getAllJokes: allJoke,
    randomJoke: randomJoke,
  } //module.exports
/*****************************************************
End of Code
*****************************************************/

/*****************************************************
End of Module
*****************************************************/
