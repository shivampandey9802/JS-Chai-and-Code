// Singleton 
// Object.create -> build using constructor

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name : 'Shivam',
    [mySym] : "mykey1",
    age : 20,
    location : 'virar',
    email : 'shivampandey@gmail.com',
    isLoggedIn : false,
    lastLoginDays : ['Monday' , 'Saturday']
}
// console.log(JsUser["email"])
// console.log(JsUser[mySym]);

// JsUser.email = 'ronak@gmail.com';
// console.log(JsUser);

// JsUser.greeting = function() {
//     console.log(`Hello Js user ${this.name}`);
// }
// console.log(JsUser.greeting());
