//This file is used to demonstrate various string methods in JavaScript.
let str="Hello, World11!";
//accessing characters in a string with index
console.log(str[0]); // H
console.log(str[7]); // W
console.log(str[13]); // undefined (index out of bounds)
//length of string(total number of characters)
console.log(str.length); // 13
// . after variable name displays all the methods available for string
//uppercase and lowercase conversion
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
 // converting str to uppercase and storing it
let upperstr = str.toUpperCase();
console.log(upperstr); // "HELLO, WORLD!"
// converting str to lowercase and storing it
let lowerstr = str.toLowerCase();   
console.log(lowerstr); // "hello, world!"
//trim method removes whitespace from both ends of a string
let stringwithspaces = "   Hello, World!    ";
console.log(stringwithspaces,"without trim"); //   Hello, World!    
console.log(stringwithspaces.trim(),"after trim"); // "Hello, World!"
//trimStart and trimEnd methods remove whitespace from the start and end of a string respectively
let stringwithspaces2 = "   Hello, World!    ";
console.log(stringwithspaces2.trimStart(),"after trimStart"); // "Hello, World!    "
console.log(stringwithspaces2.trimEnd(),"after trimEnd"); // "   Hello, World!"
//includes method checks if a string contains a substring and returns boolean value
let sentence= "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("quick")); // true
console.log(sentence.includes("cat")); // false