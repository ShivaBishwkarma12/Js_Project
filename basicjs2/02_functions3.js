//filter
//creates a new array of elements that give true for a condition/filter

let arr=[1,2,3,4,576,77,55,21];

let evenarr=arr.filter((val)=>
{
    return val%2==0;
}
)
console.log(evenarr);

//arr.reduce()
//Performs some operations & reduces the array to a single value
//It returns that single value
let arr5=[1,5,10,15];
let sumarr=arr5.reduce((prev,curr)=>
{
    return prev+curr; //first 1+5
                      //second 6+10
                      //third 16+15
}
)
console.log(sumarr);

//for largest number
let numb=[1,5,10,15];
let largarr=arr5.reduce((prev,curr)=>
{
    return prev>curr?prev:curr; 
}
)
console.log(largarr);


