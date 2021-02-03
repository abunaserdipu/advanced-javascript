const numbers = [1, 2, 3, 5, 6, 7];
const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element){
//     return element * element;
// });

// const result = numbers.map(x => x * x);

// const result = numbers.filter(x => x > 3);
// const result2 = numbers.filter(x => x < 3);

const result = numbers.find(x => x > 3);
console.log(result);
// console.log(result2);