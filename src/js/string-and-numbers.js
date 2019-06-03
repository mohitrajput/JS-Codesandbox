// String
let theString = "Hello, My name is Mohit Rajput";
// Methods for String : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2

console.info(`charAt()
Returns the character (exactly one UTF-16 code unit) at the specified index.`);
console.log(`${theString.charAt(0)}`); // H

console.info(`charCodeAt()
Returns a number that is the UTF-16 code unit value at the given index.`);
console.log(`${theString.charCodeAt(0)}`); // 72 - ASCII of H

console.info(`concat()
Combines the text of two strings and returns a new string.`);
let newString = theString.concat(" and I'm an developer");
console.log(`Concated String is: ${newString}`); // H

console.info(`includes()
Determines whether one string may be found within another string.`);
console.log(`${theString.includes("Mohit")}`); // true

console.info(`endsWith()
Determines whether a string ends with the characters of another string.`);
console.log(`${theString.endsWith("Rajput")}`); // true

console.info(`indexOf()
Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.`);
console.log(`${theString.indexOf("Mohit")}`); // 18

console.info(`lastIndexOf()
Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.`);
console.log(`${theString.lastIndexOf("a")}`); // 25

console.info(`match()
Used to match a regular expression against a string.`);
console.log(`${theString.match(/[A-Z]/g)}`); // H,M,M,R

console.info(`matchAll()
Returns an iterator of all matches.`);
console.warn(`Complicated need more work on this.`); // Not completely clear

console.info(`padEnd()
Pads the current string from the end with a given string to create a new string from a given length.`);
console.log(`${theString.padEnd(50, ".")}`); // Hello, My name is Mohit Rajput....................

console.info(`padStart()
Pads the current string from the start with a given string to create a new string from a given length.`);
console.log(`${theString.padStart(50, "_")}`); //____________________Hello, My name is Mohit Rajput

console.info(`repeat()
Returns a string consisting of the elements of the object repeated the given times.`);
console.log(`${theString.repeat(2)}`); // Hello, My name is Mohit RajputHello, My name is Mohit Rajput

console.info(`replace()
Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.`);
console.log(`${theString.replace("Mohit Rajput", "M S Rajput")}`); // Hello, My name is M S Rajput

console.info(`search()
Executes the search for a match between a regular expression and a specified string.`);
console.log(`${theString.search("Mohit")}`); // 18

console.info(`slice()
Extracts a section of a string and returns a new string.`);
console.log(`${theString.slice(18)}`); // Mohit Rajput

console.info(`split()
Splits a String object into an array of strings by separating the string into substrings.`);
console.log(`${theString.split(" ", 3)}`); // [Hello,,My,name]

console.info(`startsWith()
Determines whether a string begins with the characters of another string.`);
console.log(`${theString.startsWith("H")}`); // true

console.info(`substring()
Returns the characters in a string between two indexes into the string.`);
console.log(`${theString.substring(10, 18)}`); // name is

console.info(`toLowerCase(), toLocaleLowerCase()
Returns the calling string value converted to lower case.`);
console.log(`${theString.toLowerCase()}`); // hello, my name is mohit rajput

console.info(`toString()
Returns a string representing the specified object. Overrides the Object.prototype.toString() method.`);
console.log(`${theString.toString()}`); // Hello, My name is Mohit Rajput

console.info(`toUpperCase()
Returns the calling string value converted to uppercase.`);
console.log(`${theString.toUpperCase()}`); // HELLO, MY NAME IS MOHIT RAJPUT

console.info(`trim(), [trimStart(), trimLeft()], [trimEnd(), trimRight()]
Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.`);
console.log(`${"  _ Mohit _  ".trim()}`); // _ Mohit _

console.info(`[@@iterator]()
Returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value.
`);

let iterator = theString[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== " ") {
  console.log(theChar.value);
  theChar = iterator.next();
  // expected output: "H"
  //                  "e"
  //                  "l"
  //                  "l"
  //                  "o"
  //                  ","
}
