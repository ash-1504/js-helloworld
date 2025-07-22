const score = 400 
console.log(score);
const balance = new Number(100.567)
console.log(balance);

console.log(balance.toString());// it will show 100 onnly but the typeOf 100 is string 
//now we can persom string operations on this 

console.log(balance.toString().length);// this will check the length
console.log(balance.toFixed(2));// this will round of the decimal value upto 2 place 

const otherNumber = 23.9823
console.log(otherNumber.toPrecision(3));// it will make the value preicese upto 3 digits

const hundreds = 100000000
console.log(hundreds.toLocaleString());// this separate the numbers by comma according to usa number system this default number system 
console.log(hundreds.toLocaleString('en-IN'));//now the separation will be in the form of indian number system



//***************************MATHS******************************************
//ALL THE Math LIB COMES BY DEFAULT WITH JAVASCRIPT

console.log(Math);// its an object and have several inbuilt properties
console.log(Math.abs(-4));// abs is absolute value it will conver all the values to psetive number 
console.log(Math.round(4.5));//this will roundof the number 
console.log(Math.ceil(4.5));//this will round of the number and give the upper value no matter what
//4.1 it will give 5 coz its greater than 4 
console.log(Math.floor(4.5));// this will round of the number and give lower value no matter what 
//4.9 it will give 4 
console.log(Math.min(4 , 3, 6, 7, 1));// this will give the minimum value 
console.log(Math.max(4 , 3, 6, 7, 1));// this will give the maximum value

console.log(Math.random());// math.random will always give values btwn 0-1 mostly decimal
console.log(Math.random()*10)// this will shift the decimal to one digit
console.log((Math.random()*10) + 1)// this will never give 0 as output as +1 is done 
console.log(Math.floor(Math.random()*10)+1);// due to adding floor we will get the lower value 

//NOW LET MAKE A PROGRAM WHERE WE CAN SET VALUES AND GET THE NUMBER
//IF WE WANT TO MAKE A DICE ROLE GAME THEN WE WANT NUMBER IN BTWN 1 TO 6

const min = 10
const max = 20 
// ie now we want value btwn 10 to 20

console.log (Math.floor(Math.random()*(max - min +1))) //now this will give the value values any 4 5 3 2 etc
//but we want value more than 10
console.log (Math.floor(Math.random()*(max - min +1))+ min)//we will add min to the number
//so that its greater than 10 
// max-min is done so that we will get the range in which we want values 
//+1 is done to avoid 0 and 
// +min is done to avoid values less than 10
//floor is done to get the values in single digit and to get the lower values