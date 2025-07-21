const name ="  aastha"
const repoCount = 50 
console.log(name + repoCount + "value" ); // this is the old way to add 2 strings and outdated way

console.log(`hello my nane is ${name} and my repo count is ${repoCount}`);
// backticks `` are used it is the better way of writting or merging 2 strings ${variableName} to print the value of that variable this is  known as string interpolation  
// the above line will give output as :
//hello my name is aastha and my repo count is 50

const gameNameOne = new String('aastha')//we can also initialize string like this 
console.log(gameNameOne[1]);//[1]this will give the value at index 1 
//0 1 2 3 4 5
//a a s t h a  ........ so it will give 'a' as output

const gameName = "aastha-ash-sona"
console.log (gameName.length); // this will give the leangth of the string 
console.log(gameName.toUpperCase()); //  this will convert every letter to caps 
console.log(gameName.charAt(4)); // use to check at this index which charecter is present
console.log(gameName.indexOf('t')); //use to check that the given charecter is at which index

const newString = gameName.substring(0,4) //this will give the charecters btwn 0to4 ie 0123 not the 4th one 
console.log(newString);

const anotherString = gameName.slice(-5,3) // this will slice the string from backward 
console.log(anotherString);

const newStringOne = "   ash   "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim will remove all the extra spacing from the string

const url = "https://aastha%20ash"
console.log(url.replace ('%20' , '-'))//this will replace %20 to - 

console.log(url.includes('shrivastava')) // this will check if ash is there in url or not it will return value in the form of true or false 

console.log(gameName.split('-'));//this will split the string and covert it into array
//'' this is called as separator above string is aastha-ash-sona it will separate it from the -

