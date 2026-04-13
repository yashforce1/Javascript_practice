// sinleton
// object.create

// object literals

const user ={
    name :"yash",
    surname :"Sri",
    age : 25,
    location : "mumbai",
    islogin :false,
    lastlogin : ["Monday","Tuesday"]
}
console.log(user.age);

// console.log(user[age]) 
// //this will give error because the key act as a string so
console.log(user["age"]);  // better apprach

// change value
user.name = "varun"
console.log(user)


// symbol
// important question asked +++ create a symbol , add in the object and print

const mySym = Symbol("address");
const newo = {
    name:"sine",
    suranme : "xexjb",
    [mySym] : "newKey"
}
// now u cannot write 
// mySym : "myKey1" in the object  it is written in ++++++[mySym] : "myKey1";

console.log(newo[mySym])


// freeze
// +++you can freeze your object(cannot chnage)

Object.freeze(newo);

newo.name = "yash"  //trying to change the name
console.log(newo)  // value remains the same

// greeting
