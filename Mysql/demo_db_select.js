var mysql = require('mysql');

var con = mysql.createConnection({
  host: "34.148.216.46",
  user: "admin",
  password: "admin",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });