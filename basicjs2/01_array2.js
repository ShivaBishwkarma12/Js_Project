// push() : add to end
//pop() : delete to end and return
//toString : converts array to string
let items=["apple","banana","Guva","Orange"];

items.push("Mango"); //push()
console.log(items);

let delitem=items.pop(); //pop()
console.log(items);
console.log(`Deleted item:${delitem}`);

console.log(items.toString());////converts array to string

//--------------------------------------------------------------------
//Concat(): joins multiple arrays & returns result
let onepiece=["Luffy","Zoro","Sanji","Nami","Shanks"];
let aot=["Eren","Mikasa","Levi","Sasa"];
let bluelock=["Isagi","Rin","Kaiser"];
let animecharacter=onepiece.concat(aot,bluelock);//concat three array
console.log(animecharacter.toString());

// unsift(): add to start like push but at start
// sift() : delete to start & return

bluelock.unshift("Isagi Yoichi");
console.log(bluelock.toString());

bluelock.shift();//delete to start & return
console.log(bluelock.toString());

//slice(): returns a piece of the array
//no chanfe in orignal array
let piece=onepiece.slice(0,1);
console.log(piece.toString());

console.log(aot.slice());//sometimes we use slice() to copy entire array
//splice(): change original array(add,remove,replace)
// spice(startindx,delcount,addelement)

let numb=[1,2,5,7,32,64,128];
numb.splice(2, 2, 4,8);
 //Startindex=2 means from 5; 
 //  Deletecount = 2  addelement : 4 and 8
console.log(numb.toString());//1,2,4,8,32,64,128
//to add only element
numb.splice(2,0,1024);//1,2,1024,4,8,32,64,128
console.log(numb.toString());
console.log(numb.splice(3));//work as slice means delete 0,1,2 index element and print remaining




