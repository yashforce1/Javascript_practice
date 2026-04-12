// const date = new Date()                                            // date is an object
// // console.log(date)
// console.log(date.toString());
// console.log(date.toDateString())


// console.log(date.toLocaleString()) // returns date and time both

// console.log(date.toLocaleDateString()) // returns only the date  
// console.log(date.toLocaleTimeString()) // return only the current time

// console.log(date.toISOString())





// date format

// let newDate = new Date(2023 , 0 , 61, 5 , 3 ,58) //first three is for date(year , month , date)   
// // *(it is going to add meaning month 0 and day 23 is 23rd january .
// //  if u write 0 month and 60 days it will add 60 from first jan and will return 1st march )
// //   and next three is for time(hour,minutes,sec)

// console.log(newDate.toLocaleDateString())
// console.log(newDate.toLocaleString());

// let anotherDate = new Date("7-28-2025")
// console.log(anotherDate.toLocaleDateString())




// time
let mytimeStamp = new Date()
console.log(mytimeStamp.getTime());


let newdate = new Date()
console.log(newdate.getDate())
console.log(newdate.getMonth()+1)

// we can even define , in what format we want the output 

console.log(mytimeStamp.toLocaleString('default',{
    weekday : 'long',
    month : 'long'
}))





// assignment
// 1) show current time
function updatetime(){
    const now = new Date()
    const time = now.toLocaleTimeString('en-IN',{
        hour : '2-digit',
        minute :'2-digit',
        second :'2-digit'
    });

    console.log(time)
}
setInterval(updatetime,1000);
updatetime()
