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