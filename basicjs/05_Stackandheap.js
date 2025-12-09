//stack(premitive) Memory is allocated in contiguous blocks within the call stack
//gives a copy for another variable
let langname="C#";
let anotherlang=langname;//not actual value: copy value

anotherlang="Java";
console.log(anotherlang);
console.log(langname);

// heap (non premitive) Dynamically allocated memory (created at runtime).
//Objects created using new in C#, C++, Java
 let user1={ 
    email:"user@gmail.com"
 }
 let user2=user1;
 user2.email="user@hotmail.com";
 console.log(user1.email);
 console.log(user2.email);
