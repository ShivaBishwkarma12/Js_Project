let date= new Date();
console.log(date.toString());//Tue Dec 09 2025 10:59:18 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); //Tue Dec 09 2025
console.log(date.toTimeString());//11:00:40 GMT+0000 (Coordinated Universal Time)
console.log(date.toLocaleString());
console.log(typeof date);//object
//
let creatdate= new Date(2025, 0, 23);
console.log(creatdate.toDateString());
