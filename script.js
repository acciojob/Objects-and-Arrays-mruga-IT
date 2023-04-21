// const players = ['John', 'Bob', 'Alice', 'Poppy'];

// const person = {
//       name: 'John Doe',
//       age: 80
//     };
const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
  name: 'John Doe',
  age: 80
};

const team = players;
const team1 = [...players];
const cap1 = {...person};

export {players, person, team, team1, cap1};
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const players = ["John", "Jane", "Bob", "Alice"];
const person = {
  name: "Jack",
  age: 30,
  nationality: "USA"
};

const team = players; // storing reference to players array
const team1 = [...players]; // creating a copy of players array using spread operator
const cap1 = {...person};

export {players,person,team,team1,cap1}
