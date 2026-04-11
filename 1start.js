console.log("yash");
console.log("I love playing");


 let Name = ("yash Srivastav");
console.log(Name) ;

 let age = 25;
console.log(age);

let follow = true;
console.log(follow);

Follow = false;
console.log(Follow);

// we will write the name of the variables in (camel case), where  first letter is small and secind is big
 let isFollow = ("vada pav")
console.log(isFollow);



var myName = 30;
var myName = 40;
var myName = 64;
console.log(myName);

// let age = 18;
// let age = 20;   here using let for same variable name show an error , beacuse we cannot 
 
let Age = 19;
Age = 40;
Age = 50;
console.log(Age);


// in const neither you can  write const for same variabe  two times nor  you can update 
const aagge = 20;
// aagge = 40;
console.log(aagge);








// non-primitive data types//

//----- objects------//
const students={
    fullName :"yash Srivastav",
    age : 21,
    cgpa :8.9,
    ispass :true
};
console.log(students);
students["fullName"] = "nitin verma";
students["age"] = 24;
console.log(students);

// array , functions;


// stack(primitive) , heap(non-primitive)
// in primitive you get a copy of whatever u defined 
// in non-primitive  u get a refereence , meaning whatever u change will change in the original value;


//primitive  data types 

// number =>2 to power 53
// bigint
// string  let s ="efwf"
// boolean =>true/false
// null =>standalone
let state = null;
// undefined
// symbol =>unique



// chai aur code //- ch-10 8.00

let userOne ={
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne   // this will point to the reference of the userOne 
userTwo.email = "yash@gmail.com"  // this will change in the main memory also
console.log(userOne.email);
console.log(userTwo.email);




// write node and file name for run in terminal (node 1start.JS) -- no need to create html file.                                             

/*
    dont use (var) because of  issue in block scope and functional scope
*/



let accountpassword = "2205555"
let accountEmail = "yash@1234.com"
account =  "Jaipur"  // this is also valid but not preferrable.

// if say i want to print all three , so intead of writing console.log three times i use 

console.table([accountEmail,accountpassword,account]);





console.log(typeof 889)


// conversions

let score = "45"
// two methods 
console.log(typeof score);
console.log(typeof(score));

let value = Number(score)
console.log(value)


// but say 

let marks = "4525qhiq"
let total = Number(marks);
console.log(typeof total)  // here u will get output as number but it is basically NaN 
console.log(total)



// boolean conversion
let check = "";
let boolcheck = Boolean(check)
console.log(boolcheck)

// 1 => true
// 0 => false
// "" => false
// "eqf" , "   " => true