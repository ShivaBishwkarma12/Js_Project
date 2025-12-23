// We are giving array of marks of student. filter out above 90 marks

let mark=[87,90,7,88,91,97,99,21,33];

let result=mark.filter((val)=>
{
    return val>90
})
console.log(result.toString());

//take a number n as an user input. create an array from 1 to n
/*
let n=prompt("Enter the numbers of array");
let arr=[];
for(let i=1; i<=n; i++)
{
    arr[i-1]=i;
  
}
  console.log(arr);
*/
  //sum of array
  arr1=[1,2,3,4,5];
  let arr2=arr1.reduce((prev,curr)=>
{
    return prev+curr;
}
  )

console.log("Sum of array",arr2);

