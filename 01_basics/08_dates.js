let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());//it will give the date in the form of string 
//which is easier to understand
console.log(myDate.toDateString());// this will give day and date 
console.log(myDate.toLocaleString());//this will give date and time
console.log(typeof myDate);//this will give output as object as we have defined it as object in the starting

let myCreatedDate = new Date(2004, 3 , 15)
console.log(myCreatedDate.toLocaleDateString());// locale date string will give in the formal of MM/DD/YYYY
//BUT the month numbering starts from 0 so if i have give 4 there will be may 

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // this use to get the time stamp used to compare values 
//used in game like racing where time in sec matters

console.log(Math.floor(Date.now()/1000))
// /1000 used so that it can get cinverted from milisec to sec
//math.floor used to get the floor value


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());//this will only give the day
console.log(newDate.getMonth());//this will only give the month

`$({newDate.getDay()}and time`

newDate.toLocaleString('default',{
    weekday: "long",
})

