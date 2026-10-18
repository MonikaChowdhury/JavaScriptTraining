/*
Loop Assignments
=======================


1.Prime Number
Problem Statement:
Write a JavaScript program to check whether a given number is prime or not using a loop.
*/
let num = 9
let isPrime = true
for (let i=2;i*i<=num;i++)
{
    if(num%i===0)
    {
        isPrime =false
        break;
    }
}
    if (isPrime)
    {
        console.log(`${num} is a prime number`)
    }
    else
    {
        console.log(`${num} is not a prime number`)
    }


/*
2.Print Even Numbers
Problem Statement:
Write a JavaScript program to print all even numbers between 1 and 50 using a loop.
*/
for (i=1; i<=50; i++)
{
    if (i%2===0)
    {
        console.log(`${i} is even number`)

    }
    else
    console.log(`${i} is not even number`)
    
}
/*
3.Multiplication Table
Problem Statement:
Write a JavaScript program that accepts a number and prints its multiplication table from 1 to 10.
*/
let num1 = 9

for (i=1;i<=10;i++)
{
    let multiplication = num1*i
    console.log(`${multiplication}`)
}

/*
4.Factorial Number
Problem Statement:
Write a JavaScript program to calculate the factorial of a given positive integer using a loop.
*/
let positiveInteger = 5
let factorial = 1
for (i=1;i<=positiveInteger;i++)
{
    factorial = factorial*i
    console.log(`${factorial}`)
}
/*
5.Count Digits
Problem Statement:
Write a JavaScript program to count the total number of digits present in a given number using a loop.
*/
let number = 123, rem = 0, sum=0, temp = number
while (number>0)
{
    rem=number%10
    number= Math.floor(number/10)
    sum= sum+rem
}
console.log(`digit sum of ${temp} is ${sum}`)


/*
6.Stop the Loop at a Specific Number
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10
*/
for(num=1; num<=20; num++)
{
    
    if (num===10)
    {
        break;
    }

console.log(`${num}`)
}

/*
7.Skip Even Numbers
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20, but skip all even numbers using the continue statement.
*/
for(num=1; num<=20; num++)
{
    
    if (num%2===0)
    {
        continue;
    }

console.log(`${num}`)
}