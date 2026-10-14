//how to check number is palindrome
n = 121
rev= 0
temp = n

while(temp>0)
{
    rev = rev*10+(temp%10)
    temp = Math.floor(temp/10)

}
if(rev===n)
{
    console.log(`${n} is a palindrone`)
}
else
{
    console.log(`${n}is not a is palindrome`)
}


