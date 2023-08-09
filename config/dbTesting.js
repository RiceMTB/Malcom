const sql = require("msnodesqlv8");
const sqlConfig = require('./dbconfig')["development"];
const dbSQLStatements = require('./dbSQLStatements');
const ops = require("./dbops.js")

const testInsert = {
    "joke": "qw3333erty",
    "punchline": "zxc33333vbnm"
}

console.log(testInsert.joke)
console.log("DONE")
ops.insertJoke(testInsert)


// sql.query(sqlConfig.connectionString, dbSQLStatements.Select_Statements.RANDJOKE, (err, rows) => {
//     console.log(rows);
// });


// sql.open(sqlConfig.connectionString, function (err, conn) {
//     var pm = conn.procedureMgr();
//     pm.callproc('SPI_JOKE_PUNCHLINE', testInsert, function(err, results, output) {
//         console.log (results)
//         console.log (output)
//         console.error(err)

// });
//     console.error(err)
// });