'use strict';

// ******************** SCOPING EXAMPLES *********************
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = `Steven`;
//       // Reassigning outer scope's variable
//       output = `NEW OUTPUT!`;

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = `Davut`;
// calcAge(1992);

// ******************** HOISTING EXAMPLES *********************

// // Variable
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = `Davut`;
// let job = `engineer`;
// const year = 1992;

// // Functions
// console.log(addDecl(2, 3));
// console.log(addArrow);
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts, typeof numProducts);
// if (!numProducts) deleteShoppingCart(); // even though numproducts 10, cuz of hoisting its undefined

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// // Another example

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

// ******************** THIS KEYWORD *********************

// // console.log(this);

// // const calcAge = function (birthYear) {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// // };
// // const calcAgeArrow = birthYear => {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// // };
// // calcAge(1992);
// // calcAgeArrow(1992);

// const davut = {
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// davut.calcAge();
// // console.log(davut);

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = davut.calcAge;
// matilda.calcAge();

// const f = davut.calcAge;
// f();

// ******************** REGULAR FUNCTIONS VS ARROW FUNCTIONS *********************
// const davut = {
//   firstName: `Davut`,
//   year: 1992,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1 for functions inside objects
//     // const self = this; // self or that
//     // const isMillennial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2 for functions inside objects
//     const isMillennial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillennial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// davut.greet();
// davut.calcAge();

// // arguments keyword(doesnt exist in arrow function but in others do)

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   a + b;
// };
// addArrow(2, 5, 8);

// ******************** OBJECT REFERENCES *********************

const jessica1 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, `Davis`);

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

// Shallow copied jessica object
// const jessicaCopy = { ...jessica };
// jessicaCopy.lastName = `Davis`;

// jessicaCopy.family.push(`Mary`);
// jessicaCopy.family.push(`John`);

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copided/cloned jessica object with structuredClone()
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push(`Mary`);
jessicaClone.family.push(`John`);

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
