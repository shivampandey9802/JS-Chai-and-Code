// Array

const myArr = [0 , 1 , 2, 3 , 4 ,5];
// const myHeros = ['superman', 'batman'];

// const myArr2 = new Array(1 , 2, 3, 4);

// console.log(myArr[0]);


// Array Methods

// myArr.push(6);
// myArr.pop();

// myArr.unshift(9); // Push element in front
// myArr.shift(); // pop element from front

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // values are converted into string 
// console.log(newArr);
// console.log(myArr);

// slice , splice 
console.log('A' , myArr);
const myA1 = myArr.slice(1 , 3); // original array do not change
console.log(myA1);

const myA2 = myArr.splice(1 , 3); // original array changes
console.log(myA2);
