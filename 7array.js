

//------------arrays ---------//
// % Collections of items
// % it is mutable (can be changed unlike strings  )

// let arr = [10,12,'wcbi',2,2,54,5];
// console.log(arr);
// console.log(arr[0]);

//  we can also define array by

let ar = new Array(10,12,'wgrw',5,52,556);
console.log(ar);


// ex
let arry = [415,18,15,150,11]; 

for(let i = 0; i < arry.length ; i++)
{
    if(arry[i] == 15)
    {
        arry[i] = 25;
    }
}
console.log(arry);


//or

//we can also use for of loop //
let arrs = ["yash", "varun" ,"afnan" ,"Messi"];
for(let i of arrs)
{
    console.log(i.toUpperCase());
}



//question 1 (return the average)            ++(.length)
let ari = [85,97,44,37,76,60];
let sum = 0 ;
for(let i = 0 ; i < ari.length ;i++)   
{
    sum += ari[i];
}
let avg = sum / ari.length;
console.log(avg);



//Question 2 ( for a array of prices [250,645,300,900,50] all items have an offer of 10 %
// chnage the array to store final price aftrer applying offer);

// let arr =[250,645,300,900,50];
// for(let i = 0 ;i < arr.length ;i++)
// {
//     let discount =  arr[i] / 10 ;
//     arr[i] -= discount;
//     console.log(arr[i]);
// }





//----------Arrays methods---------//

//(1) push() = add the elemrnt to the last .
let arr = [100,200,300,400];
arr.push(500 , 600 ,900 );
console.log(arr);

//(2) pop() = remove the last elmts and can also be stored and return.
let DeletedValue = arr.pop();
console.log(arr);
console.log(DeletedValue);

// (3) toString() = converts the arr into string ( by creating new string)
let FoodItems = ["Burger", "Pizza" ,"Dosa",878,98878,"Chana"];
console.log(FoodItems);
console.log(FoodItems.toString()); 

// --------------------------------------------------------------------//

// (4) Concat() = joins multiple arrays & returns result 
 let arr1=[100,200,300,400,500];
 let arr2=[600,700,800,900,1000];
 let arr3=[1100,1200,1300,1400,1500];
let arr4 = arr1.concat(arr2 ,arr3);
console.log(arr4);

// (5) unShift () : add to start of the array
let NewArr = ["messi","ronaldo","neymar"];
NewArr.unshift("maradono");
console.log(NewArr);

// 
// (6) shift() : delete elmts from start and (can be  stored and return )
let DeletedName = NewArr.shift();
    DeletedName = NewArr.shift();
console.log(NewArr);
console.log(DeletedName);

// *** (7) slice() : returns a piece of the array (It does not change in the original array)
let Thearray = ["yash" , "ronaldo" , "virat" , "varun"];
console.log(Thearray.slice(0,2));


// *** (8) splice() : it is used edit in the array (replace 2, 8,3,5 => 20,25,30,35)---- splice(index from were to change , count ,the elmts)
let SpLiceArray = [5,10,15,2,8,3,5,40,45,50];
SpLiceArray.splice(3,4,   20,25,30,35);
console.log(SpLiceArray); 

     //now the arr is 5,10,15,20,25,30,35,40,45,50

    //supoose we want to add (21,22) after 20 .
    SpLiceArray.splice(4 ,0 ,21 ,22);
    console.log(SpLiceArray);


// includes -- tell weather the elemrnt is present in the array or not  -- return (true or false);
const myar = [100,101,102,103,104];
console.log(myar.includes(103));

// indexof (if elmts is present return index else return -1)
console.log(myar.indexOf(105))




//+++++ concat and spread
let me = [10,20,2,0];
let ro =[88184,8148];

let third = me.concat(ro);
console.log(third);

// we can also use spread operrators;(...)

const spreadp = [...me,...ro];
console.log(spreadp);


// +++flat
const another_array = [2,1,5,[4,5,1],25,48,[29,2,[8181]]]; // we have an array inside array.

// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const temp = another_array.flat(3); //3 is the deptof the array u have in the array .or better to give infinity.
console.log(temp);




let score1 = 100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3,400));
