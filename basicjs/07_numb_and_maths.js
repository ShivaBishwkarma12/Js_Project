/*
const score=200;
console.log(`the score is${score}`);
const balance=new Number(300);//[Number: 300]
console.log(balance);

console.log(balance.toString().length);//convert into string and length of string

console.log(balance.toFixed(1));//total decimal point

const othernum=23.44455;
console.log(othernum.toString().replace('444',777));//converting and replacing
console.log(othernum.toPrecision(3));//only 3 digits after decimal

const num=100000;
const convert=num.toLocaleString('en-IN')
console.log(convert);
console.log(typeof num);
console.log(typeof convert)

*/
//---------------------------Maths--------------------------------------------------------

console.log(Math);
console.log(Math.round(5.55));
console.log(Math.floor(5.55));//round up
console.log(Math.ceil(5.55));

console.log(Math.min(2,3,7,9,0));
console.log(Math.max(2,3,7,9,0));//minum and maximum

console.log(Math.sqrt(169));
console.log(Math.random());
console.log(Math.floor(Math.random()*6)+1);//Random numbers

let min=20;//Random Number 20 to 30
let max=30;
console.log(Math.floor(Math.random()*(max-min+1)) + min);






