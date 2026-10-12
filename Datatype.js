/*
Datatype Assignment
====================

1. Identify the datatype
Create variables for the following values and identify their datatype:
- 25
- "JavaScript"
- true
- undefined
- null
- 123.45
- 12345678901234567890n
- Symbol("id")
Task: Print both the value and its datatype.
*/

let a = 25
console.log("value",a, "typeof", typeof a);

let b = "JavaScript"
console.log("value",b,"typeof", typeof b)

let c = true
console.log("value",c,"typeof", typeof c)

let d = undefined
console.log("value",d,"typeof", typeof d)

let e = null
console.log("value",e, ",type", typeof e)

let g = 123.45
console.log("value",g,"typeof",typeof g)

let i = 12345678901234567890n
console.log("value",i,"typeof", typeof i)

let j = Symbol("id")
console.log("value",j,"typeof", typeof j)

/*

2. Create Variables of Different Datatypes
Create one variable for each of the following datatypes:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol
- Object
Print all variables
*/
let str = "string"
console.log(`value is ${str} and type is`, typeof str)
let num = 123
console.log(`value is ${num} and type is`, typeof num)
let bool = false
console.log(`value is ${bool} and type is`, typeof bool)
let u = undefined
console.log(`value is +{undefined} and type is`, typeof undefined)
let n = null
console.log(`value is ${null} and type is`, typeof n)
let bigint = 12345678989898n
console.log(`value is ${bigint} and type is`, typeof bigint)
let s = Symbol("id")
console.log(`value is ${s.description} and type is`, typeof s)
let arr = [5]
console.log(`value if ${arr} and type is`, typeof arr)

/*
4. Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
*/

let stuName = "John"
let stuAge = 15
let stuPercentage = 80
let stuCourseCompletion = true
let stuGrade = "A"

