// ------arithmetic operator------//
//  let  a = 8;
//  let  b = 3;
//  console.log("a  + b = " ,a +b);
//  console.log("a  - b = " ,a-b); 
//  console.log("a  * b = " ,a *b); 
//  console.log("a  / b = " ,a /b); 
//  console.log("a % b =" ,a % b);
//  console.log("a ** b =" , a ** b);     exponentiation
//  a++;                                  increment 
//  b--;                                  decrement
//  console.log("a :",a, "b:", b);




// (==) -> compare value  ,like 5 == '5' true;
// (===) -> compare data type , like 5 === '5' false because int != string; 

//-----assignment operators----//
// let a = 10;
// let b = 5;
// console.log(a%=5);
// console.log(b**=5);


//----comparision operator---//
//  let a = 5;
//  let b = 10;
//  console.log(a==b);
//  console.log(a!=b);
 

//----logical opeRATOR----//
// console.log(!(a==b));
// console.log(!(a!=b));








// -----if condition----//  
// let age  = 17;
// if(age >= 18)
// {
//     console.log("You are eligible to vote");
// }


//  ------if else condition ----//
// let number = 1002;
// if (number % 2 === 0)
// {
//     console.log("the number" ,number ,"is an even number ");
// }
// else{
//     console.log ( number ," is odd number");
// }


// --------else if condition-------//
// let num = 15;
// if(10 <= num && num <= 20)
// {
//     console.log("twenties");
// }
// else if( 20 < num && num <= 30)
// {
//     console.log("thirtees");
// }


// -----ternary ----//
// let age = 15;
// let answer = age >= 18 ? "Adult" :"Not adult";
// console.log(answer);



// ------***alert and prompt**-----//
// alert("hello yash");

// let yash = prompt("hello");
// console.log (yash);

// let number = prompt("enter a number");
// if(number % 5 === 0)
// {
//     console.log("the numbeber", number ,"is divisible by 5");
// }
// else{
//     console.log("the numbeber", number ,"is  not divisible by 5");
// }



// conversion  (dont used in code)

console.log("1"+2)   //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32
console.log("2">1)  //true

const numbereu = 845457184848n  //last n will defined bigint
console.log(typeof numbereu)