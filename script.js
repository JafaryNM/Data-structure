'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function (time, starterIndex, mainIndex, address) {
    console.log(`Your order receiverd ${time}, location ${address}, `);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with following ingridents ${ing1}, ${ing2} and ${ing3},`
    );
  },
};

// Normal accessing array

// const arr = [1, 2, 3];
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];

// // Using array destructure

// const [a, b, c] = arr;
// console.log(a, b, c);

// // Working real reustarant data

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Interchang reustarant data

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const nested = [1, 2, [3, 4], 5];

// // const [i, , j] = nested;
// // console.log(i, j);

// // Distructure nested

// const [i, , [j, k]] = nested;
// console.log(j, k);

// // Default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // Destructure objects
// const { name, openingHours, categories } = restaurant;
// // Destructure using name

// const {
//   name: reustarantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(reustarantName, hours, tags);

// // Prevent objects undefine by adding default values

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// // Mutate objects variable

// let a = 111;
// let b = 123;

// const obj = { a: 20, b: 30, c: 40 };

// // Mutate object in actions

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:10',
//   address: 'Arusha Majengo',
//   mainIndex: 2,
//   starterIndex: 4,
// });

// // Working with spread operator

// const arr = [7, 8, 9];

// // Before speard operator

// const arrBad = [1, 2, arr[0], arr[1], arr[2]];
// console.log(arrBad);

// // Solved problem usign spread operator

// const newArray = [11, 12, ...arr];
// console.log(newArray);

// // Using spread operator to get individual value;
// console.log(...newArray);

// // Working with restaurant data

// const newMenu = [...restaurant.mainMenu, 'Capachino', 'Mojitto'];
// console.log(newMenu);

// // Coping of an array

// const mainMenuCopy = [...restaurant.mainMenu];

// // Join array

// const fullRestaurantMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullRestaurantMenu);

// // Iterable:Arrays, strings, map and sets  but not objects

// const str = 'Jonas';
// const letters = [...str, '', '.S'];
// console.log(...str);
// console.log(letters);

// // Real example of spread operator with functions
// const ingridentsSample = [
//   prompt('Let `s make paster ingredient 1?'),
//   prompt('Let `s make paster ingredient 2?'),
//   prompt('Let `s make paster ingredient 3?'),
// ];
// console.log(ingridentsSample);

// // Without spread operators
// restaurant.orderPasta(
//   ingridentsSample[0],
//   ingridentsSample[1],
//   ingridentsSample[2]
// // );

// // With using of spread operators
// restaurant.orderPasta(...ingridentsSample);

// Objects

// const newRestaurant = { found: 2025, ...restaurant, founder: 'Jafary Mdegela' };
// console.log(newRestaurant);

// const copyRestaurant = { ...restaurant };
// copyRestaurant.name = 'Samaki samaki kinondoni';
// console.log(copyRestaurant);

// const newRestaurant = { found: 2025, ...restaurant, founder: 'Jafary Mdegela' };
// console.log(newRestaurant);

// const copyRestaurant = { ...restaurant };
// copyRestaurant.name = 'Samaki samaki kinondoni';
// console.log(copyRestaurant);

//  Short circuit

// Can be any data type , return any data type , short-circuit
// Return all true value and neglect other value

// console.log('----- OR ---------');

// // console.log(3 || 'Jonas');
// // console.log(0 || 'Jafary-Shortcircuit');
// // console.log('' || 'Jonas');
// // console.log(true || 0);
// // console.log(undefined || null);
// // console.log(undefined || 0 || '' || 'Hello ' || 23 || null);

// In reustarant case study without short-circuit
// restaurant.numGuests = 20;
// const guest = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest);

// Using short circuit techniques
// restaurant.numSpecialGuest = 0;
// const guest = restaurant.numSpecialGuest || 50;
// console.log(guest);

// console.log('----- AND ---------');

// // Problem come because  0 which is false value
// // return first to false
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// consonle.log('Hello' && 23 && null && 'jonas');

// // Practicle implecations part

// if (orderPizza) {
//   restaurant.orderPizza('mashroom', 'chocolate', 'chocolate2');
// }

// // Using checking if certain value is existing using &&

// restaurant.orderDelivery &&
//   restaurant.orderPizza('mashroom', 'chocolate', 'chocolate3');

// Pratical use OR -- set default values
// Pratical use AND -- set to excute code on second operants

console.log('----- NULLISH COLLISION ---------');

restaurant.numSpecialGuest = 0;
const guest = restaurant.numSpecialGuest || 50;
console.log(guest);

// Solving 0 false problem

const guestCorrect = restaurant.numSpecialGuest ?? 10;
console.log(guestCorrect);
