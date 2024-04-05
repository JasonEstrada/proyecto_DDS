var mysql = require('mysql');

var con = mysql.createConnection({
  host: "34.148.216.46",
  user: "admin",
  password: "admin",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });