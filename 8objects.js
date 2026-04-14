// // singleton
// // object.create

// // object literals

// const user ={
//     name :"yash",
//     surname :"Sri",
//     age : 25,
//     location : "mumbai",
//     islogin :false,
//     lastlogin : ["Monday","Tuesday"]
// }
// console.log(user.age);

// // console.log(user[age]) 
// // //this will give error because the key act as a string so
// console.log(user["age"]);  // better apprach

// // change value
// user.name = "varun"
// console.log(user)


// // symbol
// // important question asked +++ create a symbol , add in the object and print

// const mySym = Symbol("address");
// const newo = {
//     name:"sine",
//     suranme : "xexjb",
//     [mySym] : "newKey"
// }
// // now u cannot write 
// // mySym : "myKey1" in the object  it is written in ++++++[mySym] : "myKey1";

// console.log(newo[mySym])


// // freeze
// // +++you can freeze your object(cannot chnage)

// Object.freeze(newo);

// newo.name = "yash"  //trying to change the name
// console.log(newo)  // value remains the same

// // greeting and this








// const regularUSer ={
//     email: "somal@gmail.com",
//     fullname : {
//         userFullname : {
//             firstName : "yash",
//             suranme : "kumar"
//         }
//     }
// }
// console.log(regularUSer.fullname.userFullname.suranme)

    
// //+++++++ object merge++++++++++ 
// const obj1 = {1 :"a",2 :"b"}
// const obj2 = {3 :"a",4 :"b"}

// const obj3 = Object.assign({},obj1,obj2); //brackets is optional but its better if included
// console.log(obj3)

// // best way to merge (spread , same as array)
// const obj4t = {...obj1,...obj2};
// const obj4 = {...obj2,...obj1};
// console.log(obj4); 
// console.log(obj4t);



// // JavaScript treats keys in 3 categories:
// // 1 )  Integer-like keys (like '1', '2', '10')
// // 👉 Sorted automatically (ascending)   and thats why in  the above ex  even tough i write obj2 first then obj1. it willreturn in ascending order only (1 : ,2: , 3: , 4:)

// //2 ) String keys (like 'a', 'name')
// // 👉 Keep insertion order
// // 3 )Symbols
// // 👉 Keep insertion order


// const user =[                       //format we will get from database
//     {
//        id : 1,
//        name : "yash" 
//     },
//     {
//         id : 2,
//         name : "shub"
//     }
// ]

// console.log(user[0]);
// console.log(user[0].name);



// // const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id="12345abc"
// tinderUser.name ="Sammy"
// tinderUser.isloggin = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))        // acessing all the keys in object (return in array) +++++ v.v.important 
// console.log(Object.values(tinderUser));


// // if u want to check weather the property exist in the object or not 

// console.log(tinderUser.hasOwnProperty('name'))  // for cheaking weather the key exist or not //will return true;
// console.log(tinderUser.hasOwnProperty('nam'))    // doesn not exist










// destructing
const course = {
    name : "js in hindi",
    productPrice : "999",
    courseInstructor : "hitesh",

}
const  {name} = course                      // remember u used in react 
console.log(name);                         // you can even change the name of the key

const {productPrice : price} = course
console.log(price)


[
    {},
    {}
]