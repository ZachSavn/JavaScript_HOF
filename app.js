console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


const plus = (num) => {
   return (plusNumber) => (plusNumber += num);
};
  let  plus15 = plus(15);

console.log(plus15(10))

