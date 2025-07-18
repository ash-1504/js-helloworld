console.log(2>1);// ans will be true 
console.log("2">1);// here the comparison is btwn 2 diff datatpes but still js will convert the "2" to 2 
// and give value true but this is not he right way before comparison make sure the data types are same

console.log(null==0);// it will give false 
console.log(null>=0);// it will give true
//the reason is that an equality check == and comaprison >= works differently
//comparison converts null to 0 and treat it as number 0 
// we have same issue with comaprision of undefined to 0 it will give false in all the case 

console.log("2" == 2); // this will give true coz == converts the sting to number
console.log("2"===2);// this will  give false and not allow to compare becoz ===  SHOWS STRICT CHECK it will also the check the data type 
//if the are same then only it will compare otherwise it will not compare 