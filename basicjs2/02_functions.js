//function 
//block of code that performs a specific task, can be invoke whenever needed.
function car()
{
    console.log("This is a car");
    console.log("Mustang");
}

car();

function vehicle(bike)//parameters
{
    console.log(bike);
    
}
vehicle("Crossfire CX250");//argument
/*
//program to calculate sum
let a,b,s;
function Sum()
{
   a=Number( prompt("Enter the first number:"));
    
    b=Number(prompt("Enter the first number:"));
   

    s=a+b;//sum
      console.log("The sum of a number is ",s);
}
Sum();
*/
 let s;
function sum(a,b)
{
   
    sum=a+b;
    console.log(`The sum of number is ${sum}`);
    
}
sum(23,55);

let sub;
function difference(x,y)
{
sub=x-y;
return sub;
}
let val=difference(9,5);
console.log(val);

//arrow function
//compact way of writing a function
const sumar=(a,b)=>
{
    let sum;
    sum=a+b;
    console.log(`The sum of two number a and b is ${sum}`);
    
}
sumar(6,5);

//Multiplication arrow function
const mul=(a,b)=>
{
let multi=a*b;//multiplication
console.log(`The multiplication of numbers is ${multi}`);

}
mul(5,8);

//function for counting vowel
function Vowelcount(char)
{
    let count=0;
    
    for(const str of char)
    {
        if(str==="a"|| str==="e" || str==="i"|| str==="e" || str==="o"|| str==="u")
        {
            count++
        }
    }
    console.log(`There are ${count} vowel letters in ${char}`);
}

Vowelcount("Shiva");
