const sql = require("msnodesqlv8");

const connectionString = "server=HAL200\\SQLEXPRESS;Database=testDB;Trusted_Connection=Yes;Driver={SQL Server}";
const query = "SELECT * FROM V_JOKE_PUNCHLINE";

/*
Function: RunQuery
*/
sql.query(connectionString, query, (err, rows) => {
    if(err) {
        console.error('error running query', err);
      }
        console.log(rows);
    });

