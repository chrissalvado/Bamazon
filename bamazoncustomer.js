var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",
  password: "lily1chloe2",
  database: "bamazon_db"
});
connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
  connection.query("select * FROM products", function(err, results) {
    if (err) throw err;
    console.log(results);
    buysomething();
  });
}

function buysomething() {
  inquirer
    .prompt({
      name: "items",
      message: "would you like to purchase any [ITEMS]?",
      choices: ["ITEMS"]
    })
    .then(function(answer) {
      if (answer.items === "yes") {
        purchase();
      } else {
        console.log("well then have a nice day");
      }
    });
}
function purchase() {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the item you would like to purchase?"
      },
      {
        name: "units",
        type: "input",
        message: " How many units would you like to purchase?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      connection.query(
        "select * from products where item_id = " + answer.item,
        function(err, results) {
          console.log("product2buy", results);
          if (answer.units < results[0].stock_quantity) {
            console.log("the items are yours!");
            var newTotal = results[0].stock_quantity - answer.units;
            var query =
              "update products set stock_quantity = ? where item_id = ?";
            var data = [newTotal, parseInt(answer.item)];
            connection.query(query, data, function(err, results) {
              console.log("update success", results);
              start();
            });
          } else {
            console.log(
              "sorry we dont have enough units to fullfill your order"
            );
          }
        }
      );
    });
}
