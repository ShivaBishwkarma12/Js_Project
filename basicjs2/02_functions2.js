//forEach loop in arrays
let arr=[2,4,5,6,9];
arr.forEach(function printval(val){
    console.log(val);
    
}

)
console.log("for array 2");

let arr1=[2,7,8,6,3];
//arrow function
arr1.forEach((val)=>
{
console.log(val);

})
//forEach loop in arry are higher order function/method that takes other function
//as parameters or return other function
/*
arr.forEach((val,indx,arr)=>
{
console.log(val,indx,arr)//print valu index and array 
})*/

//Program to print square number
let arr2=[1,2,3,4,5,6];
arr2.forEach((sqr)=>{
    console.log(sqr**2);
})

//map 
//creates a new array with the results of some operation.
//The value its callback returns are used to form new array
console.log("For array method map");

arr3=[21,33,41,64];

let arr4=arr3.map((val)=>
{
    //console.log(val);
    return val **3;
})
console.log(arr4.toString());
