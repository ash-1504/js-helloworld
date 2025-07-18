// we have 2 types of memories 
// STACK(primitive) we will get the copy of cahnges  AND 
// HEAP (non primitive) changes will be done in original values 

/*let myname = "aastha"
let anothername = myname
anothername = "sona"
console.log(anothername);
console.log(myname);*/
//this is for primitive data type where if changes are done it provide the copy of the original value 

let ash ={
    email: "aastha@gmail.com",
    upi: "user@ybl",
    rollno:123
}
 let aastha = ash
 aastha.email="ash@gmail.com"
 console.log(aastha);
 console.log(ash);

//this is for non premitive data types where if changes are done they are done in original values 
