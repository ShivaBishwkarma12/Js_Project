const name="shiva";
const repo=3;
//console.log(name  +repo); old
console.log(`My name is ${name} and there are ${repo} in my github`);
const reponame=new String("JSproject");
console.log(reponame[4]);
console.log(reponame.length);//length
console.log(reponame.indexOf('S'));//indexOf
console.log(reponame.toLowerCase());
console.log(reponame.toUpperCase());
console.log(reponame.charAt(6));

//substring
const name2="Luffy";
console.log(name2.substring(0,3)); //Luf
//You take a section from the original text. substring()

//slice
console.log(name2.slice(-4,1));//can be reversed by -ve

//trim
 const name3="          Monkey .D Luffy     ";
 console.log(name3);
 console.log(name3.trim());//removes extra space

//replace
 const url="https//:shiva%20jj.come"
 console.log(url.replace("%20","_"));//replaced with _

 //includes
 console.log(url.includes('shiva'));

 //split: breaks a string into parts using a separator
 let item="apple,banana,orange";
 console.log(item.split(","));
 
 //join reverse of split
 let arr = ["apple", "banana", "orange"];
 console.log(arr.join(","));


 




