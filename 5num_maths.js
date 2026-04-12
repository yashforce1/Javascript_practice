const score = 400
console.log(score);

const balance =  new Number(400)  //specially cast  it in a number
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2));  //this tells decimal.

const otherNumber = 123.4563;
console.log(otherNumber.toPrecision(4)) 

const hundreds = 1000000
console.log(hundreds.toLocaleString()) //by default in us standards
console.log(hundreds.toLocaleString('en-IN'))  // change to indian format



// +++++++++++  maths +++++++++//

console.log(Math)
console.log(Math.abs(-4))  //4
console.log(Math.round(45.62))  // 46 linked to upper bound 

// but u want to control weather upper or lower

console.log(Math.ceil(42.2))  // upper bound roundoff
console.log(Math.floor(18.9)) // lower bound roundoff 

console.log(Math.min(4,5,81,55,5,1,5))
console.log(Math.max(1844,84,54,54,582))

console.log(Math.random()) /// the random will be  alays from the range 0 to 1

console.log((Math.round(Math.random()*10)+1))


// if u want to generate random number from a range let say 10 to 20

const min = 10;
const max = 200;
console.log(Math.floor(Math.random()* (max - min +1))+min)


0.1 