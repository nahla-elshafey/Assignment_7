/*eslint-env browser*/

function display_menu() {
    "use strict";
    console.log("Welcome to the Inventory Management Application");
    console.log("");
    console.log("COMMAND MENU OPTIONS");
    console.log("view - View all products");
    console.log("update - Update a product's quantity");
    console.log("exit - Exit the program");
    console.log("");
}

function viewProducts(inventory) {
    "use strict";
    var i = 0;
    inventory.forEach(function (product) {
        console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
        i += 1;
    });
    return;
}

function updateInventory(inventory) {
    "use strict";
    var skuNum = parseInt(window.prompt("Enter the sku number of the product you want to update: "));
    var updatedStock = parseInt(window.prompt("Enter the updated quantity of the product you want to update: "));
    var i = 0;
    inventory.forEach(function (product) {
        if(product[0] === skuNum) {
            product[2] = updatedStock;
            console.log("There are " + product[2] + " " + product[1] + " in stock");
        }
        i += 1;
    });
    return;
}

function main() {
    "use strict";
    var inventory = [[4824, "Shirts", 10, 15.99], 
                     [6343, "Jeans", 22, 39.99],
                     [3223, "Socks", 36, 9.99],
                     [2233, "Hats", 12, 14.99],
                     [9382, "Jackets", 5, 49.99]];
    
    display_menu();
    var command;
    while (true) {
        command = window.prompt("Enter command: ");
        if (command !== null) {
            if (command === "view") {
                viewProducts(inventory);
            } else if (command === "update") {
                updateInventory(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");

}
main();
