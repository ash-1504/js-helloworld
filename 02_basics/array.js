 // ARRAY

 /*const myArrex = [1 , 2 , 3 , 4 , 5] // array are written in the square brakets
 // elements can be of diff data types  like string number etc
 //collection of multiple items in a single variable
 //array in js can be re-sizeable
 console.log(myArrex[2]);//array elements can not be accssed using  arbitory string
/*indexing of array starts from 0
when copy operation in done in array in JS it makes shallow copy
i-e  shallow copy of an object is a copy whose properties share the 
same reference point that means if 
changes are made in copy one original vale will also get changed*/

//types of defining array
const myArr = [1 , 2 , 3 , 4 , 5] //for numbers
const myNames = ["aastha" , "ash" , "sona" , "gonu"] //for string
const myArrTwo = new Array (1 , 2 , 3 , 4)// we have used "new "as keyword therefore not used square brackets
console.log(myArr[2]);
console.log(myNames[2]);
console.log(myArrTwo[2]);


//ARRAY METHODS

myArr.push(6)// this will add the value at the end of the array
myArr.pop()//this will simply remove the last value of the array
myArr.unshift(0)//this will add the value in the start of the array
myArr.shift()// this will remove the first element of the array
console.log(myArr.includes(3));// it check if the number is present in array of not gives anser in true or false
console.log(myArr.indexOf(3));// this tell at what index number is present
const newArr = myArr.join()// converts the array to string
console.log(newArr);// this wont be displayed in square brakets coz its a string now coz of join 
console.log(myArr);
console.log(typeof newArr);// will give string


//SLICE , SPLICE
//*SLICE*
console.log("A" , myArr); // this will give A= [array value]
const myn1 = myArr.slice(1 , 3)// this will slice the value and give the result without including the last range
// it will not manipulate the original string
console.log(myn1);
console.log("B", myArr);
//*SPLICE* 
const myn2 = myArr.splice(1,3)// this will give the output including the the last range
//but it will also eliminate the values from the original string
console.log(myn2);
console.log("C" , myArr);*/

 



