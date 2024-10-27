//Primitive

// 7 types : String , Number , Boolean , null , 
// undefined , Symbol , BigInt



// Reference (Non primitive)

// Array , Objects , Functions

const heros = ['shaktiman' , 'superman'];
let myObj = {
    name : "shivam", 
    activity : 'study',
}
const f = () => {
    console.log("Hello");
}

//----------------------------------------------

// Stack (Primitive) , Heap (Non-Primitive)

/*
In primitive new copy is created where as in 
Non-primitive reference is passed that mean if changes
are made to another object it will reflect to all 
*/

let userOne = {
    email : "shivam@gmail.com",
    name : 'shivam',
}

userTwo = userOne;
userTwo.email = "Ronak@gmail.com";

console.log([userOne , userTwo])