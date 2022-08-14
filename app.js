console.log("Hello World!\n==========\n");

// Exercise 1 Section

function plus(number) {
  return (plusNumber) => plusNumber + number;
}

let plus15 = plus(15);
console.log(plus15(10));

//Exercise 2 Section forEach

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age:38,
    score:94,
    isActive:true
  },
  {
    name:"Merry",
    age:36,
    score: 82,
    isActive:true
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false
  }
];
//iterates over array and grabs only name
users.forEach(user => console.log(user.name));