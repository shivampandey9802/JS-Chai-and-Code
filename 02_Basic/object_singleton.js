// const tinderUser = new Object();

// tinderUser.id = '123abc';
// tinderUser.name = 'sammy';
// tinderUser.isLoggedIn = false;
 
// console.log(tinderUser);

// const regularUser = {
//     email : "some@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : 'shivam',
//             lastname : 'pandey'
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : 'a' , 2 : 'b'};
const obj2 = {4 : 'c' , 3 : 'd'};

// const obj3 = Object.assign(obj1 , obj2);
// console.log(obj3);

const obj3 = {...obj1 , ...obj2};
// console.log(obj3);

// console.log(Object.values(obj3));
// console.log(Object.keys(obj3));
