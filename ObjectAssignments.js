/*
==============================================================
Assignments on Object
============================
Program 1. Student Object 
Create a student object with the following properties: 
• id  
• name  
• age  
• course  
• marks  
Perform the following: 
1. Print the complete object.  
2. Print the student's name.  
3. Print the student's marks.  
4. Change the student's course.  
5. Update the student's marks.  
6. Add a new property city.  
7. Delete the age property.  

*/
let student=
{
id:101,
fname: "M",
lname: "Chow",
age: 59,
course:["English", "Spanish", "Math", "Science"],
marks: 90
}
console.log(student)
console.log("Student Name: ",student.fname+student.lname)
console.log("Student Course:", student.course)
console.log("Student marks:", student.marks)

student.city = "delhi" //insert new property
delete student.age //delete property
console.log(student)


/*

Program 2. Employee Object 
Create an employee object containing: 
id 
name 
department 
designation 
salary 
Perform: 
1. Access each property using dot notation.  
2. Access each property using bracket notation.  
3. Update the salary.  
4. Add a location property.  
5. Delete the designation property. */

let employee =
{
id : 102,
fname: "Lata S", 
department: "HR",
designation: "VP",
salary: "100,000"
}
console.log(employee["id"])
console.log(employee["fname"])
console.log(employee["department"])
console.log(employee["designation"])
console.log(employee["salary"])

console.log("id: ", employee.id)
console.log("name: ",employee.fname)
console.log("department: ",employee.department)
console.log("designation: ",employee.designation)
console.log("salary: ",employee.salary)

employee.salary="120,000";
employee.location = "delhi";
delete employee.designation;
console.log(employee)

/*program 3.Create a testData object containing: 
username 
password 
browser 
environment 
timeout 
Use Object.keys() to: 
1. Get all property names.  
2. Count the number of properties.  
3. Check whether username exists. */

let testData =
{
    username: "MTP115",
    password: "123456",
    browser: ["Google" ,"Edge","Firefox"],
    environment: "dev",
    timeout: "1000"
}
let allKeys=Object.keys(testData);
console.log(allKeys)
console.log(allKeys.length); 

if (allKeys.includes("username")) {
  console.log("username exists");
} else {
  console.log("username doesn't exist");
}

/*

Program 4.Create an object containing test configuration: 
browser: "chromium" 
headless: true 
timeout: 30000 
retries: 2 
Use Object.values() to: 
1. Display all values.  
2. Check whether "chromium" exists.  
3. Count the number of configuration values. */

let testConfig ={
    browser: "chromium",
    headless: true, 
    timeout: 30000,
    retries: 2 
}
let allValues = Object.values(testConfig)
console.log(allValues)
if(allValues.includes("chromium"))
{
    console.log("chromium exists")
}
else
{
    console.log("chromium does not exist")
}


console.log(allValues.length)

/*

Program 5.Create a user object: 
username 
role 
department 
experience 
Use Object.entries() to print: 
username : standard_user 
role : tester 
department : QA 
experience : 5 
*/

let user ={
username: "standard_user",
role: "tester",
department:"QA",
experience:"5"
}

let allEntries = Object.entries(user)
console.log(allEntries)

/*

Program 6.Create: 
const user = { 
name: "John", 
role: "Tester", 
city: "Pune" 
}; 
Create a new object that: 
• Contains all properties of user.  
• Changes role to "Automation Engineer".  
• Adds experience: 5.  
The original object should remain unchanged. */

const user1 = { 
name: "John", 
role: "Tester", 
city: "Pune" 
}; 
const user2={...user1};
console.log(user2);
user2.role = "Automation Engineer"
user2.exp = 5
console.log(user2)

/*

Program 7.Playwright Configuration Object 
Create a configuration object: 
browser 
baseURL 
headless 
timeout 
retries 
Example: 
{ 
} 
browser: "chromium", 
baseURL: "https://example.com", 
headless: true, 
timeout: 30000, 
retries: 2 
Perform: 
1. Print all configuration values.  
2. Change the browser.  
3. Change the timeout.  
4. Add screenshot: "only-on-failure".  
5. Check whether retries exists.  
6. Create a copy with a different baseURL.  
*/

let playWrightConfig = 
{
browser: "chromium", 
baseURL: "https://example.com", 
headless: true, 
timeout: 30000, 
retries: 2 
}
playWrightConfig.browser = "firefox"
playWrightConfig.timeout = 4000
playWrightConfig.screenshot = "only-on-failure"
console.log(playWrightConfig)
if(playWrightConfig.retries)
{
    console.log("Retries exists")
}
else{
    console.log("retried does not exist")
}

let playwrightConfig2 = {...playWrightConfig}
playwrightConfig2.baseURL = "https://newExample.com"
console.log(playwrightConfig2)