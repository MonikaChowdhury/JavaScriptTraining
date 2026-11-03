/*
=============================================================
Assignments On Class
======================
JavaScript Class Problem Statements 
Program 1: Create a Student Class 
Problem Statement: 
Create a Student class with properties name, age, and course. Create 
two objects and display their details. 
*/

class Student
{
    // data
   name;
   age;
   course;

   //constructor
   constructor(name,age,course)
   {
    //class level data=local data
    this.name=name
    this.age=age
    this.course=course
   }
//method
  getdata()
  {
    console.log("student name is: "+this.name)
    console.log("student age is: "+this.age)
    console.log("student courses are: "+this.course)
  }
}
//objects
const s1 = new Student("David",22, ["Math", "English"])
s1.getdata()

const s2 = new Student("Sarah",32,"English")
s2.getdata()
/*

Program 2: Bank Account Class 
Problem Statement: 
Create a BankAccount class with the following: 
• accountHolder  
• balance  
• deposit()  
• withdraw()  
• checkBalance() */

class BankAccount
{
    accountHolder;
    balance;

    //constructor
    constructor (accountHolder,balance)
    {
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    //method
    deposit(amount)
    {
        
        this.balance+=amount
        console.log("New Balance is"+this.balance)
        return;

    }
    withdraw(amount)
    {
        this.balance-=amount
        console.log("Balance after withdrawl: "+this.balance)
        return;
    }
    checkBalance()
    {
        if (this.balance>0)
        {
            console.log("sufficent funds")
        }
        else
        {
            console.log("not enought funds in your account")
        }

    }
}
//object
const account = new BankAccount("Monika", 1000);
account.deposit(500);      
account.withdraw(200);     
account.withdraw(5000);    
account.checkBalance();  



/*

Program 3: Employee Class 
Problem Statement: 
Create an Employee class with name, salary, and 
department. Create a method that calculates a 10% bonus and 
displays the total salary. */

class Employee
{
    name;
    salary;
    department

    constructor(name,salary,department)
    {
        this.name=name
        this.salary=salary
        this.department=department
    }
    getbonus()
    {
        
        this.salary+=this.salary*10
        console.log("new salary is: "+this.salary)
    }

}
const emplyoee= new Employee("Masha", 1000, "HR")
emplyoee.getbonus()

