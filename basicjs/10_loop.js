//for-fo loop   used in string and array
let str="Shiva";
for(let a of  str)
{
    console.log(a);
    
}
console.log(str.length);
/* just checking 
let arr=[10,23,44,22,553];
for(let i in arr)
{
    console.log(arr[i]);
    
}
*/
//for-in loop (return keys) 
let student=
{
name: "shiva Bishwokarma",
age: 19,
gpa:3.77,
};
for(let i in student)
{
    console.log(i);// name age gpa is printed
    
}


/*for(let b of student)
{
    console.log(b); error dosent work
}
    */
   //gussing game program

let numb=34;
let guess=prompt("Guess the number");
while(guess!=numb)
{
    guess=prompt("Try again");
}
console.log("You gussed the right one");

