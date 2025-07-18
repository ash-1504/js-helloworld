 let score = "33abc"
console.log(typeof score);
console.log(typeof (score)); /* we can also write score in () as methods
 methods are used to manipulate objects they are written in the same way as funtions 
 but defined within the objects*/

let valueInNumber = Number(score) /*here we have converted the datatype of score from string to number
in valueInNumber*/
console.log(typeof valueInNumber);

/* if the value of scor = "33abc" then its not a number how will it covert that into a number therefore
it will give NAN ie not a number we have to chack carefully while converting */

console.log(valueInNumber);

//if the value is string or undefined then output will be NAN
//if the value is null it will give 0


//if the value is in boolean form like if true then it will give 1 else false it will give 0 
//if we convert 
// 1 = true
//0 = false
//"" = false
//"aastha"= true

let someNumber = 33
let stringNumber = String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
//output will give 33 but its type will show string  

//********************************* OPERATIONS***************************************************//

let value = 3 
let negValue = -value
//console.log(negValue);

console.log(2+2)//add
console.log(2-2)//minus
console.log(2*2)// multiplication
console.log(2**2)// power
console.log(2/2)//divides
console.log(2%2) //give remainder

let str1 ="aastha"
let str2=" aastha "
let str3 = str1 + str2
console.log(str3);
console.log("1"+2+2); // it will give 122 as ouput coz the first "1"is string datatype so 
// everthing will be in string format
console.log(2+2+"1");////it will give 41 as answer coz first 2 is a number datatype so
//  it will get add and then "1"will simply be attached to 4 to give 41 
