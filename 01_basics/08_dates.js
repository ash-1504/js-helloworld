let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());//it will give the date in the form of string 
//which is easier to understand
console.log(myDate.toDateString());// this will give day and date 
console.log(myDate.toLocaleString());//this will give date and time
console.log(typeof myDate);//this will give output as object as we have defined it as object in the starting


let myCreatedDate = new Date(2004, 4 , 15)
console.log(myCreatedDate.toLocaleDateString());