// let st = 'YashSriv astav';
// let n = st.length;
// console.log(st);




// let object = {
//     item : "pen",
//     price : 12,
// };
// console.log("the cost of the" , object.item ,"is",object.price ,"rupees");
// //special type of string (template literals(` `))
// console.log(`the cost of the ${object.item} is ${object.price} rupees`);


// let Specialstring = `the total sum is ${9 * 9}`;
// console.log(Specialstring);


// console.log(st.charAt(5));
// console.log(st.indexOf('S'))

// const gameName = new String('hiteshhc')
// console.log(gameName[0]);


// //-----------------methods of strings--------------//


let stron = "YashSrivastav";
console.log(stron.toUpperCase());
console.log(stron.toLowerCase());

const newString = stron.substring(0,5);
console.log(newString)

const anotherString = stron.slice(-3,2)
console.log(anotherString) 


// trim
// let strin = "        yash is a boy    ";
// console.log(strin.trim());
// ****(trim)->  method removes extra whitespace from both the beginning and the end of a string.


// indexof
// let string = "yashsrivastav";
// String.indexof('hsri')    if this string hsri is present it will return the starting index like here it is 3; else -1;  





let len = "0123456789";
let word = "Hellomessi";
console.log(len.slice(4,8));
console.log(word.slice(4,8));


 let len1 = "yash";
 let len2 = "srivastav";
 let final = len2.concat(len1);
 console.log(final);


 let str = "hello";
 console.log(str.replace('lo','p'));
 console.log(str.charAt(1));


 const game = new String('yashSri-vas-tav')
 console.log(game.replace('tav','ava'))
 console.log(game.includes('yashS'))
 console.log(game.split('-'))


//  if any thing is added with the string it is collectivvely concatenated in string
// ex- console.log('Yash'+125)   =>Yash125 
//    console.log('yash +125')  same answer





