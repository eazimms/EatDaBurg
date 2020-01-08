var mysql = require('mysql'); 
// Mysql setup. 

// Just seeing if this does anything. 

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net", 
  // port: 3306, 
  user: "b8fdef7d65c25c", 
  password: "0c5ab308", 
  database: "heroku_1bc32a1d3cf9d21"

}); 

connection.connect(function (err) {
  if (err) {
    console.log("Error connecting" + err.stack); 
    return; 
  }
  console.log("Connected as: "+ connection.threadId); 
})

module.exports = connection; 