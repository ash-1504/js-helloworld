//SINGLETON 
//Object.create this give singleton value 


//OBJECT LETERALS

const JsUser = {
    name :  "Aastha",
    "full name":"Aastha shrivastava",
    Age : 21,
    location : "pune",
    email :"aastha@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]// we can also define array in object
} // values are stored in the form of string by default

console.log(JsUser.email);
console.log(JsUser["email"]); 
//by both the ways we can access object

//now we cant access full name by js. 
//we have to use[] to access it 

console.log(JsUser["full name"]);
//console.log(JsUser.full name); WILL GIVE ERROR


