let mark=[12,22,33,43];
console.log(mark);
console.log(mark.length);

let name=["Luffy","Zoro","Isagi"];
console.log(name);
console.log("\n",name.length,"\n");
//array loop
let arr=[12,23,44,54,22,67];
/*for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}*/
for (let i of arr)
{
console.log(i);
}
//name
for(let i of name)
{
console.log(i.toUpperCase());

}
//given marks [85,97,44,37,76,60] find average
let sum=0;
 let marks=[85,97,44,37,76,60];
 for(let i of marks)
 {
       sum+=i;
 }
 console.log("The sum of number is",sum);//calculated sum
 let avg=sum/marks.length;//sum/array length
 console.log(`The average is${avg}`);//avg

//Qns items=250,645,300,900,50; 10% offer then find final price after applying offer

 let items=[250,645,300,900,50];
 /*
let i=0;//for index
for(let arr of items)
    {
         let offer= arr/10;
         let finalprice=arr-offer;
         console.log(`The final price of index${i} is ${finalprice}`);
          i++
    }
 */
for(let i=0;i<items.length;i++)
{
   console.log(` The Price before offer ${items[i]}`);
   let offer=items[i]/10;
   let finalprice=items[i]-offer;
   console.log(`Price after offer ${finalprice}`);
   
}

