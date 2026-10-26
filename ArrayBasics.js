/*
Array
======
- Array is dynamic data structure which store collection of data/elements
- As an array is nonprimitive and dynamic means size of array can vary
- Single variable we used to store collection of data
- Array is  0 index based

Syntax:
==========
let arrayVariable=[val1,val2,val3,...n];

Ways of Declaration
========================
1.Array Literal
2.Array constructor
3.Array.of()......added in ES6

Types of Array
================
1.Single dimension array(1D)
2.Multi dimension array(2D)

Iterations ways
====================
1.Simple for loop
2.for...of loop(Array)
3.for...in loop(Object)

*/
console.log("-------Array literal-------");

let arr = [] //[]
console.log(arr) //objects
console.log(typeof arr)

let sid = [10,20.30,40,"new"]
console.log(sid) //[ 10, 20.3, 40, 'new' ]
console.log(typeof sid) //object
console.log(sid[1]) //20.3
console.log("Total ids are: "+sid.length);//4
console.log(typeof sid[3]);//string

//for wrong index : undefined
console.log(sid[8]);//undefined
console.log(sid[-1]);//undefined

//simple for loop

let empData=["Sarang","Pune",'M',25,88789898,true];
for(let i=0; i<empData.length; i++)
{
    console.log(empData[i])
}

/*
For...of loop
==============
- It is applicable for array and string
- Iterates over values

*/
let empData1=["Sarang","Pune",'M',25,88789898,true];
for(let i of empData1)
{
    console.log(i);
    
}

/*
For...in loop
==============
- It is applicable for Jsobject
- Iterates over keys or index

*/

let empData2=["Sarang","Pune",'M',25,88789898,true];
for (let i in empData2)
{
    console.log("At index: "+i+" value is="+empData2[i])
}

//Js Object key:value
let user={
    id:101,
    name:"Jay",
    profile:"Qa"
}

for(let i in user)
{
    //console.log(i);//keys
    console.log("key:"+i, "value:"+user[i]); //key and value
    
}

/*
Constructor
===============
- It is special method used to initialize object
- In Js class level object we create using new keyword 
and during object creation we called constructor

Array Constructor
======================
Syntax:
==========
let arrayVariableName=new Array(val1,val2....n);


When Array constructor declared with one element/value if it is number type
then that element will be considered as length of array
*/
let data=new Array(10,20,30,40,50);
console.log(data);//[ 10, 20, 30, 40, 50 ]
console.log(data.length);//5
console.log(data[3]);//40
console.log(data[9]);//undefined

/*
When Array constructor declared with one element/value if it is number type
then that element will be considered as length of array
*/
console.log(marks[0]);//undefined
//how to fill empty array with value
marks[0]=100;
marks[1]=20.56;
marks[2]=89;
marks[3]=90;
marks[4]=66;
marks[5]=77;

console.log(marks);//[ 100, 20.56, 89, 90, 66, 77 ]
console.log(marks.length);//6

let loc=new Array("Pune");
console.log(loc);//[Pune]
console.log(loc.length);//1

//RangeError: Invalid array length
// let numericData=new Array(4.5); can only be number let mumericData=new Array(4)
// console.log(numericData);
// console.log(numericData.length);

console.log("------3.Array.of()-----");
//Es6
let sid1=Array.of(10);
console.log(sid1);//[10]
console.log(sid1.length);//1
console.log(sid1[0]);//10

console.log(sid1[4]);//undefined


console.log("---------------");

let a1=new Array(0);
console.log(a1);//[]
console.log(a1.length);//0

//RangeError: Invalid array length
// let b1=new Array(-5);
// console.log(b1);
// console.log(b1.length);

console.log("10"+5)
console.log(null===undefined)
console.log("hello"*2)

