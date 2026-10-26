/*
8.Print a 5 × 5 Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
*****
*****
*****
*****
*****
*/
for (row=1;row<=5;row++)
{
    
    
        console.log(`* * * * *`)
    
}


/*
9.Decreasing Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print the following pattern:

*****
****
***
**
* 


*/
for(let r=5;r>=1;r--)
{
    let row="";

    for(let c=1;c<=r;c++)
    {
        row=row+" *";
    }
    console.log(row);
    
}

/*
Pattern3:
 1
 1 2
 1 2 3
 1 2 3 4
*/
for(let r=1;r<=5;r++)
{
   

    for(let c=1;c<=r;c++)
    {
        r=row+" ";
    }
    console.log(row);
    
}

/*
Pattern3:
 1
 1 2
 1 2 3
 1 2 3 4
*/

const totalrows = 4
let j = ""
for (let col=1;col<=totalrows;col++){
{
    j+=col+" "
    
}
console.log(`${j}`)}

/*
Pattern4:
 1
 2 2
 3 3 3
 4 4 4 4
*/
const totalrows1 = 4

for (let col=1;col<=totalrows1;col++){
{
    j=totalrows1+" "
    
}
console.log(`${j}`)}