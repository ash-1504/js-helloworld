const names =["aastha","ash","sona"]
const broname =["chinu", "varchaswa","mota"]

names.push(broname)//this will push array in array i-e
//[names[broname]]

names.concat(broname)// this is also like push

const allNames = names.concat(broname)// THIS WILL MERGE THE 2 ARRAY AND GIVES A NEW ARRAY HAVING THE VALUES OF BOTH ARRAY
console.log(names);
console.log(allNames);

const allNewName = [...names, ...broname] //this will spread the array into one same as above 
//this method is the prefered one
//this is spread operator
console.log(allNewName);


const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]] // array in array situation
const my_another_array=another_array.flat(Infinity)// this will separate the values of array in array 
//(we give a number according to the depth) here it was 3 
// but if we write infinity it will auot check the depth 
console.log(my_another_array);



console.log(Array.isArray("aastha"));//this will check if aastha is array or not
console.log(Array.from("aastha"));//from will convert all the values to array if it object string etc
console.log(Array.from({name:"aastha"}));// it will give empty array
//coz we have to tell wether we want array of keys or array of values
//imp asked in interviews


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score1,score3));// this will combine all the values combined in a new array

//isArray   checks if the value is an array
//from      converts into array
//of        creates an array from given values


