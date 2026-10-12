/*
-----------------------------------------------------------------
JavaScript Practice: Type Coercion & Explicit Conversion
===========================================================

Problem 1 — UI Price and Quantity
A product page returns the following values as strings:
let price = "500";
let quantity = "3";
Calculate the total price.
*/

let price = "500";
let priceAmount = Number(price)
let quantity = "3";
let quantityAmount = Number(quantity)

console.log(priceAmount*quantityAmount) //1500

/*Problem 2 — UI Price + Tax
The UI returns:
let price = "1000";
let tax = "200";
Calculate the final price.
*/
let price2 = "1000";
let price2Amount = Number(price2)

let tax = "200";
let taxAmount = Number(tax)

console.log(price2Amount + taxAmount) //1200

/*Problem 3 — Understand + Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual + expected);
*/
let actual = "100";
let expected = 20;
console.log(actual + expected); //10020 implicit coersion into string

/*Problem 4 — Understand - Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual - expected);*/

let actual1 = "100";
let expected1 = 20;

console.log(actual1 - expected1); //implicit coersion into Number

let actualPrice = "100";
let expectedPrice = 100;
console.log(actualPrice == expectedPrice); //true
console.log(actualPrice === expectedPrice); //false

/*An automation framework reads the timeout from an environment variable:
let timeout = "30000";
Convert it into a number and print:
The value
Its data type*/
let timeout = "3000"
let timoutNumber = Number(timeout)
console.log(timoutNumber, typeof timoutNumber)

/*Problem 8 — Order ID
An API returns:
let orderId = 12345;
Convert the order ID into a string and create:
ORDER-12345*/
let orderId = 12345
let orderIdString = String(orderId)
console.log(`ORDER-${orderIdString}`)

/*
Problem 9 — Boolean API Value
An API returns:
let status = "true";
Convert this value into an actual Boolean.
*/
 
let status1 = "true";
let statusBool = Boolean(status1)
console.log(`statusbool is ${statusBool} and type of`, typeof statusBool)




