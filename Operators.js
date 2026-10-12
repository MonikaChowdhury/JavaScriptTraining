/*
Assignments On Operators
=============================
Guess the output?
---------------------
*/
console.log(1 + "2" + 3); //123
console.log(1 + 2 + "3");//33
console.log("5" * true); //5
console.log(10 > 5 > 1);//false 10>5 = 1, 1>1 is false

let a = 2;
let b = a++ + ++a; //value 2 is captured and then incremented for a++ (a is now 3), ++a is 3+1(a value is now 4), a = 4, b = 4+2
console.log(a, b); //4,6, 2+4

let c = 3;
console.log(c++ + c++ + ++c); //3+4+6 = 13

console.log(5 * 2 == "10"); //true


let x = 1;
let y = ++x + x++ + x; //2+2+3
console.log(x, y); //3, 7

console.log(10 > 5 && 20 < 30); // true

console.log(null || undefined || "Playwright"); // null is falsy, unefined is falsy, Playwright is truthy so the answer is Playwright
