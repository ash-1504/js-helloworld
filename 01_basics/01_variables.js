const accountId = 144553
let accountEmail = "aastha@google.com"
var accountPasword ="12345"
accountCity = "pune"//js is a safe language we can define it even without using let or const //but its not yhe right way 
let accountState; // using semi colon in js is optional //we have not given any value , it will print undefined
 
//accountId = 2//not allowed becoz its constant and can not be changed
console.table([accountId , accountEmail , accountPasword , accountCity]);
accountEmail = "chinu@google.com"
console.table([accountId , accountEmail , accountPasword , accountCity , accountState]);


