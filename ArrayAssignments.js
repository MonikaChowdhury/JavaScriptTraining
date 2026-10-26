/*===========================================
Array Scenario Based Questions
===================================
Scenario-Based JavaScript Array Questions 

1. Employee Management System 
Scenario: 
A company stores employee names in an array. 
Question: 
Declare an array with employee names "Rahul", "Priya", "Amit" and 
perform the following operations: 
1. Add "Sneha" to the employee list  
2. Remove the last employee from the list  
3. Add "Manager" at the beginning of the list  
4. Remove the first employee from the list */

let emp = ["Rahul","Priya","Amit"];
console.log(emp) //[ 'Rahul', 'Priya', 'Amit' ]

// inserts 
emp.push("Sneha")// inserts 
console.log(emp) //[ 'Rahul', 'Priya', 'Amit', 'Sneha' ]

//remomves last element
emp.pop()
console.log(emp) //[ 'Rahul', 'Priya', 'Amit' ]

//insert element in the beginning
emp.unshift("Manager")
console.log(emp) // [ 'Manager', 'Rahul', 'Priya', 'Amit' ]

//remove first element
emp.shift()
console.log(emp) //[ 'Rahul', 'Priya', 'Amit' ]

/*
2. Shopping Cart Application 
Scenario: 
An e-commerce website manages products in a shopping cart. 
Question: 
Declare an array with "Mobile", "Laptop", "Mouse" and: 
1. Add "Keyboard" to the cart  
2. Display all products in reverse order  
3. Convert all cart items into a single string separated by " | "  
*/

let cart = ["Mobile", "Laptop", "Mouse"]
cart.push("Keyboard")
//Display all products in reverse order
cart.reverse()
console.log(cart) //[ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]

//Convert all cart items into a single string separated by " | "
let cart1= cart.join("|");
console.log(cart1) //Keyboard|Mouse|Laptop|Mobile

/*
3. Browser Tabs Automation 
Scenario: 
A browser automation framework tracks currently opened tabs. 
Question: 
Declare an array with "Google", "YouTube", "ChatGPT" and: 
1. Close the last opened tab  
2. Add "GitHub" as the first tab  
3. Display tabs in reverse order 
*/
let openTabs = ["Google", "YouTube", "ChatGPT"]
console.log(`Current opened tabs: ${openTabs}`)
lastTab = openTabs.pop()
console.log("close the last tab:", lastTab)

openTabs.unshift("GitHub")
console.log(openTabs)

openTabs.reverse()
console.log(openTabs)

/*
4. Food Delivery Orders 
Scenario: 
A food delivery application maintains current orders. 
Question: 
Declare an array with "Pizza", "Burger", "Pasta" and: 
1. Add "Sandwich" to the orders  
2. Remove the first order  
3. Display all orders as a comma-separated string
*/

let currentOrders = ["Pizza", "Burger", "Pasta"]
currentOrders.push("Sandwich")
console.log(`Current Order: ${currentOrders}`)

currentOrders.shift() //remove first order

let NewOrders = currentOrders.join(",")
console.log(NewOrders)

/*
5. Student Attendance System 
Scenario: 
A school application maintains student attendance. 
Question: 
Declare an array with "Ankit", "Riya", "Karan" and: 
1. Add "Neha" at the beginning  
2. Remove the last student from the list  
3. Create a separate copy of the attendance list */

let students=["Ankit", "Riya", "Karan"]

students.unshift("Neha") //inserts in the beginning
students.pop() //remove last element
let copy = [...students]
console.log(copy)
/*
6. QA Test Case Management 
Scenario: 
A QA engineer stores executed test cases. 
Question: 
Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
1. Create another copy of the same array  
2. Extract only the first 2 test cases  
3. Display test cases in reverse order  
*/

let exectuedTestCases=["LoginTest", "PaymentTest", "SearchTest"]
let copyExecutedTestCases = [...exectuedTestCases]
console.log(`copy of executed test cases: ${copyExecutedTestCases}`)
let slice1=copyExecutedTestCases.slice(0,2) //will 0,1 and element for 2 index is exluded
console.log(slice1)

exectuedTestCases.reverse()
console.log(exectuedTestCases)


/*
7. Movie Recommendation App 
Scenario: 
A movie application stores recommended movies. 
Question: 
Declare an array with "Inception", "Avatar", "Titanic" and: 
1. Add "Interstellar" to the movie list  
2. Replace "Titanic" with "Jawan"  
3. Convert all movie names into a single string separated by "-"  
*/
let originalMoviesRecommendation = ["Inception", "Avatar", "Titanic"]
originalMoviesRecommendation.splice(2,1,'Jawan')

console.log(originalMoviesRecommendation)
let updatedMoviesRecommendation = originalMoviesRecommendation.join("-")
console.log(updatedMoviesRecommendation)

/*
8. Product Inventory Management 
Scenario: 
An admin manages product inventory. 
Question: 
Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
1. Remove "Tablet" from inventory  
2. Add "Smart Watch" after "Laptop"  
3. Create a duplicate copy of updated inventory  
*/
let inventory = ["Mobile", "Laptop", "Tablet", "Camera"]
inventory.splice(2,1) //remove Tablet
console.log(inventory)
inventory.splice(2,0,"Smart Watch")
console.log(inventory)

let updatedInventory = [...inventory]
console.log(updatedInventory)


/*
9. Online Course Platform 
Scenario: 
An online learning platform stores enrolled courses. 
Question: 
Declare an array with "JavaScript", "Playwright", "Cypress" and: 
1. Remove the first course  
2. Add "TypeScript" at the beginning  
3. Extract only the last 2 courses  */

let courses = ["JavaScript", "Playwright", "Cypress"]
courses.splice(0,1,"TypeScript")
console.log(courses)

let coursenew = courses.slice(1) //extract last two
console.log(coursenew)


/*10. Music Playlist Application 
Scenario: 
A music app stores favorite songs. 
Question: 
Declare an array with "Song1", "Song2", "Song3" and: 
1. Display playlist in reverse order  
2. Remove the last song  
3. Add "NewSong" at the beginning  
4. Convert playlist into a single string  */

let songs =["Song1", "Song2", "Song3"]
songs.reverse()
console.log(songs)
songs.splice(2,1)
console.log(songs)

songs.unshift("Newsong")
console.log(songs)

let singleString =songs.join(" ")
console.log(singleString)
/*11. Bug Tracking System 
Scenario: 
A software team tracks bugs using arrays. 
Question: 
Declare an array with "Bug101", "Bug102", "Bug103" and: 
1. Add "Bug104"  
2. Remove "Bug102"  
3. Create a copy of the bug list  
*/
let bugs = ["Bug101", "Bug102", "Bug103"]
bugs.push("Bug104")
console.log(bugs)
bugs.splice(1,1)
console.log(bugs)

let bugsCopy= [...bugs]
console.log(bugsCopy)

/*


12. Daily Tasks Planner 
Scenario: 
A task planner application stores daily tasks. 
Question: 
Declare an array with "Wake Up", "Exercise", "Study" and: 
1. Add "Meeting" to the task list  
2. Remove the first task  
3. Reverse all tasks  
4. Display all tasks in a single string separated by " -> " 
*/
let dailyTasks = ["Wake Up", "Exercise", "Study"]
dailyTasks.push("Meeting")

dailyTasks.shift()
console.log(dailyTasks)

dailyTasks.reverse()

let dailyTasksString = dailyTasks.join("->")
console.log(dailyTasksString)



/*


13. Mobile Contacts List 
Scenario: 
A mobile app stores contact names. 
Question: 
Declare an array with "Ram", "Shyam", "Mohan" and: 
1. Add "Sita" at the beginning  
2. Remove the last contact  
3. Extract only the first 2 contacts  
*/
let contactName = ["Ram", "Shyam", "Mohan"]
contactName.unshift("Sita")
console.log(contactName)

contactName.pop()
console.log(contactName)

let nameSlice = contactName.slice(0,2)
console.log(nameSlice)


/*
14. Sports Team Selection 
Scenario: 
A coach manages selected players. 
Question: 
Declare an array with "Virat", "Rohit", "Gill" and: 
1. Add "Hardik" to the team  
2. Replace "Gill" with "KL Rahul"  
3. Display players in reverse order  
*/
let players = ["Virat", "Rohit", "Gill"]
players.push("Hardik")
console.log(players)

players.splice(2,1,"KL Rahul")
console.log(players)
players.reverse()
console.log(players)
/*
15. Real-Time Automation Framework Scenario 
Scenario: 
An automation framework stores failed test names. 
Question: 
Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
1. Add "ProfileFail"  
2. Remove the first failed test  
3. Create another copy of the failed tests array  
4. Extract only the first 2 failed tests  
5. Replace "CheckoutFail" with "PaymentFail"  
6. Convert all failures into a single comma-separated string
*/

let failedTests = ["LoginFail", "CheckoutFail", "SearchFail"]

failedTests.push("ProfileFail")
console.log(failedTests)

failedTests.shift(failedTests)
console.log(failedTests)

let failedTestsCopy = [...failedTests]
console.log(failedTestsCopy)

failedTestsCopy.splice(0,1,"PaymentFail")
console.log(failedTestsCopy)

let failedTestCopyString = failedTestsCopy.join(",")
console.log(failedTestCopyString)

