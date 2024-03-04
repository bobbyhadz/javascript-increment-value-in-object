// EXAMPLE 1 - Increment a Value in an Object in JavaScript

const obj = {
  num: 1,
};

// ✅ Using dot notation
obj.num = obj.num + 1 || 1;
console.log(obj.num); // 👉️ 2

// -------------------------------------

// ✅ Using bracket notation
obj['num'] = obj['num'] + 1 || 1;
console.log(obj.num); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 2 - Increment a Value in an Object using nullish coalescing

// const obj = {
//   num: 1,
// };

// obj['num'] = (obj['num'] ?? 0) + 1;

// console.log(obj); // 👉️ { num: 2 }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Increment a Value in a Map using JavaScript

// const map1 = new Map([['num', 1]]);

// console.log(map1.get('num')); // 👉️ 1

// map1.set('num', map1.get('num') + 1 || 1);

// console.log(map1.get('num')); // 👉️ 2

// ------------------------------------------------------------------

// // EXAMPLE 4 - Increment a Value in a Map using the nullish coalescing operator

// const map1 = new Map([['num', 1]]);

// console.log(map1.get('num')); // 👉️ 1

// map1.set('num', (map1.get('num') ?? 0) + 1);

// console.log(map1.get('num')); // 👉️ 2
