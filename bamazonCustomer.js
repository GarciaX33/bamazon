//will require
var mysql = require('mysql');
var inquirer = require('inquirer');
// mysql connection, creating object holding necessary info for mysql db
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "pass33",
    database: 'bamazon_db',
    port: 3306

});
// initializing mysql connection
connection.connect(function (error) {
    if (error) throw error;
    // product selection function
    productSelection();

});
// product selection function
function productSelection() {
    connection.query('SELECT * FROM products', function (error, res, fields) {
        if (error) throw error;
        // will select ALL products and will loop through displaying all in console
        for (let i = 0; i < res.length; i++) {
            console.log(`
        ___________________________________ 
        id: ${res[i].id} 
        product name: ${res[i].product}
        deparment name: ${res[i].department}
        Price: $${res[i].price}
        Stock: ${res[i].stockQuantity}
        ___________________________________`);
        }
        // product choices function
        productChoices();
    });



}
// product choices function using inquirer to prompt specific questions to recieve input
function productChoices() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the ID of the product you would like to buy?",
                name: "productID"
            },
            {
                type: "input",
                message: "How many items would you like to buy?",
                name: "numberOfItems"
            },
            // confirmation, yes equal to true by default
            {
                type: "confirm",
                message: "Are sure you want to buy this item?",
                name: "confirmItem",
                default: true
            }
        ])
        .then(answers => {
            // if yes update order from users input
            if (answers.confirmItem === true) {
                updateOrder(answers.productID, answers.numberOfItems);
            } else {
                // no equals false and will close the order
                console.log('Thank you')
            }
        });
}
//update order function
function updateOrder(id, quantity) {
    //will select ALL products from DB where id equals users input from prompt
    connection.query('SELECT * FROM products WHERE id=?', [id], function (error, res, fields) {
        if (error) throw error;
        console.log(res);
        // if there is enough quantity give user total and quantity left of named item
        if (quantity < res[0].stockQuantity) {
            var productName = res[0].product;
            console.log("Your purchase of " + productName + " is completed:");
            console.log("---------------");
            var price = quantity * res[0].price;
            var currentQuantity = res[0].stockQuantity - quantity;
            updateDatabase(currentQuantity, id);
            console.log('Your total is: $' + price);
            console.log('The current quantity for this item is: ' + currentQuantity);
            console.log('Thank you for shopping at BAMAZON')
            connection.end()
        } else {
            // will display productchoices function inquirer prompts to user if out of stock
            console.log('Out of stock for this product');
            productChoices();
        }
    });

}
// will update quantity in stock to our database depending on the user input
function updateDatabase(quantity, id) {
    connection.query('UPDATE products SET stockQuantity=? WHERE id=?', [quantity, id], function (error) {
        if (error) throw error;
    })
}


