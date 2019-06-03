console.info(`JavaScript Types: More info: https://javascript.info/types`);

// 1. Number
let myInteger = 10,
  myFloat = 14.23;
console.log(`1. number: In JavaScript integer and float both are consider as number: ${myInteger}, ${myFloat}
Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.`);

// 2. String
let name = "Mohit Rajput";
console.log(
  `2. string: In JS Character and group are characters both fall in String category`
);

// 3. Boolean
let imTrue = true,
  imFalse = false;
console.log(`3. booleans: true or false`);

// 4. Null
let itsNull = null;
console.log(`4. null: The “null” value
The special null value does not belong to any of the types, It forms a separate type of its own which contains only the null value.
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
It’s just a special value which represents “nothing”, “empty” or “value unknown”.`);

// 5. undefined
let notDefined;
console.log(`5. undefined: The special value undefined also stands apart. It makes a type of its own, just like null.
The meaning of undefined is “value is not assigned”.
If a variable is declared, but not assigned, then its value is undefined`);

// 6. Object
let myObject = {
  prop1: "Val1",
  prop2: "Val2"
};
console.log(`6. object: The object type is special.
All other types are called “primitive” because their values can contain only a single thing. In contrast, objects are used to store collections of data and more complex entities.`);

// 7. Symbols
console.log(`7. symbols: ? `);
