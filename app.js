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
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];
//iterates over array and grabs only name
users.forEach((users) => console.log(users.name));

//Exercise 3: map
let newUsers = users.map((users) => {
  return { name: users.name, score: users.score };
});

console.log(newUsers);

//Exercise 4: filter

let usersOn = users.filter((users) => users.isActive === true); //can drop ===true

console.log(usersOn);

//Exercise 5: sort

users.sort((a, b) => b.score - a.score); //swap for positive

console.log(users);

//Exercise 6: reduce

let avgScore =
  users.reduce((sum, users) => sum + users.score, 0) / users.length; //0 is starting point

console.log(avgScore);
