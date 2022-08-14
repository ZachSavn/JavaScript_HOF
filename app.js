console.log("Hello World!\n==========\n");

// Exercise 1 Section

function plus(number) {
  return (plusNumber) => plusNumber + number;
}

let plus15 = plus(15);
console.log(plus15(10));