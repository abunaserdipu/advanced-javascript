const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2, 5);

const remove = nums.splice(2, 3, 13);
const together = nums.join("+");
console.log(together);
console.log(remove);
console.log(part);
console.log(nums);