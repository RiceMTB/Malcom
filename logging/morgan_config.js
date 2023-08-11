const Writable = require("stream").Writable
const fs = require('fs')
const path = require('path');
const logfolder = 'C:/Users/Dad/Node/Malcom/logging/logfiles/'
const Db = require('../config/dbops.js');
const morgan = require("morgan");
const logJson = require('morgan-json');

const logformat = logJson({
    'Date': ':date[iso]',
    short: ':method :url :status',
    length: ':res[content-length]',
    'response-time': ':response-time ms',
    'req_header': ':req[body]',
    'res_header': ':res[body]',
  });


function writeToFile(lineIn){
    fs.writeFile(path.join(logfolder, 'log.log'), lineIn, { flag: 'a' }, err => {});
    return "Check log"
}

class MyStream extends Writable {
    write(line) {
        Db.jokelog(line)
   	    writeToFile(line)
   	    console.log("Logger:: ", line)
    }
    
}

module.exports = {
   ourLog: new MyStream,
   ourLogFormat: logformat
}



