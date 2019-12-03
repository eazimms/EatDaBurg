var mysql = require('mysql'); 
// Mysql setup. 

var connection = mysql.createConnection({
  host: "localhost", 
  port: 3306, 
  user: "root", 
  password: "R0senrot!", 
  database: "burger_db"

}); 

connection.connect(function (err) {
  if (err) {
    console.log("Error connecting" + err.stack); 
    return; 
  }
  console.log("Connected as: "+ connection.threadId); 
})

module.exports = connection; 