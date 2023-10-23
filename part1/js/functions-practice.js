//STEP 1
function halfNumber() {
    "use strict";
    var n = parseInt(window.prompt("Enter the dividend number: "));
    console.log("Half of " + n + " is " + (n/2));
}

//STEP 2
function squareNumber() {
    "use strict";
    var n = parseInt(window.prompt("Enter the number to be squared: "));
    console.log("The result of squaring the number " + n + " is " + (n * n));
}

//STEP 3
function percentOf() {
    "use strict";
    var n1= parseInt(window.prompt("Enter the first number: "));
    var n2 = parseInt(window.prompt("Enter the second number: "));
    console.log(n1 + " is " + (n1 / n2)*100 + "% of " + n2);
}

//STEP 4
function findModulus() {
    "use strict";
    var n1= parseInt(window.prompt("Enter the first number: "));
    var n2 = parseInt(window.prompt("Enter the second number: "));
    var commonFactor;
    if (n1 > n2) {
        commonFactor = n1 % n2;
    } else if ( n2 > n1) {
        commonFactor = n2 % n1;
    } else { //the two numbers are equal
        commonFactor = 0;
    }
    console.log(commonFactor + " is the modulus of " + n1 + " and " + n2);
}

//STEP 5
function sumNumbers() {
    "use strict";
    var userInput = window.prompt("Enter the numbers you want to sum up separated by commas: ");
    var arrayNumbers = userInput.split(",").map(function (str) {
        return parseFloat(str);
    });
    var sum = 0; 
    for (var i = 0; i < arrayNumbers.length; i++) {
        if(!isNaN(arrayNumbers[i])) {
            sum += arrayNumbers[i];
        }
    }
    if (!isNaN(sum)) {
        window.alert("The sum of the numbers is: " + sum);
    } else {
        window.alert("Invalid input. Please enter valid numbers separated by commas.");
    }
}


function main() {
    halfNumber();
    //squareNumber();
    //percentOf();
    //findModulus();
    //sumNumbers();
}
main();