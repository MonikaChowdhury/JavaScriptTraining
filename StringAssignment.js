/*
String Assignments
=======================
Assignment1: 
Problem: 
Count the number of words in a sentence. 
Input: “I am learning javascript” 
Output: 4 
*/

//let sentence = "I am learning javascript"
//console.log(sentence.split(' ').length)

/*
Assignment2: 
Problem: 
Remove duplicate characters from a string. 
Input: “Programming” 
Output:Progamin 
*/
let input = "Programming"
result1= ""
for (let i =0; i<input.length; i++)
{
    if (input.indexOf(input[i]) === i)
      {
         result1 += input[i]
         
      }  

}
console.log(result1)


/*
Assignment3: 
Problem: 
Capitalize the first letter of a string. 
Input: “javascript” 
Output: “Javascript” 
*/
let input1 = "javascript"
let output = input1.charAt(0).toUpperCase()

console.log(output+input1.slice(1));



/*
Assignment4: 
Problem: 
Remove all spaces from a string. 
Input: “Welcome to learn playwright” 
Output:”Welcometolearnplaywright” 
*/
let input2= "Welcome to learn playwright"
console.log(input2.replaceAll(" "))

/*
Assignment5: 
Problem: 
Find the number of characters in a string with and without using length. 
*/
let input3 = "Welcome"
totalCount = 0
for(let i in input3)
{
    totalCount++
}
console.log(totalCount)
console.log(input3.length)

/*
Assignment6: 
Problem: 
Count the number of vowels in a string. 
Input:”Javascript” 
Output: 3
*/
let input4 = "Javascript"
let inputNew = input4.toLowerCase()

let count= []
for (let i =0; i<inputNew.length; i++){
    if(inputNew.charAt(i)==='a'|| inputNew.charAt(i)==='e' || inputNew.charAt(i)==='i'|| inputNew.charAt(i)==='o'|| inputNew.charAt(i)==='u')
    {
    count++
    }
    

}
console.log(count)
/*

Assignment7: 
Problem: 
Reverse a string with & without using the built-in reverse() method.
Hint: Through array you can apply reverse()*/

let input5= "javascript"
let rev = ""
for (let i=input5.length-1; i>0; i--)
{
    rev +=input5.charAt(i)
}
console.log(rev)
let reverse = input5.split("").toReversed().join("")
console.log(reverse)
//declare name and convert even position data into uppercase and convert odd position data into lowercase
let trainerName="Priyanka";
let result="";
//let count=0;
for(let i=0;i<trainerName.length;i++)
{
    if(i%2===0)
    {
    result += trainerName.charAt(i).toUpperCase()
    
    }
    else
    {
    result +=trainerName.charAt(i).toLowerCase()
    }

}
console.log(result)