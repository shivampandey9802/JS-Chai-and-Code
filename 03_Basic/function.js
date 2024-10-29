// function addTwoNumbers(num1 , num2) {
//     return num1 + num2;
// }

// console.log(addTwoNumbers('a' , 3));

// function calculateCartPrice(num1) {
//     return num1;
// }

// console.log(calculateCartPrice(2));

// function calculateCartPrice(...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(2 , 3 ,4));

const user = {
    username : "shivam",
    price : 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)