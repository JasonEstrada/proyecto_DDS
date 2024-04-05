var mysql = require('mysql');

var con = mysql.createConnection({
  host: "34.148.216.46",
  user: "admin",
  password: "admin",
  database: "mydb"
});

//usando escape o '?' se evita la inyeccion de sql
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});

//Múltiples marcadores de posición:var name = 'Amy';

var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});