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
//indexOf method returns the index of the first occurrence of a substring in a string
console.log(sentence.indexOf("fox")); // 16
console.log(sentence.indexOf("cat")); // -1 (not found)
console.log(sentence.indexOf("o")); // 26
//lastIndexOf method returns the index of the last occurrence of a substring in a string
console.log(sentence.lastIndexOf("o")); // 41
console.log(sentence.lastIndexOf("over")); // 26
//replace method replaces a  first occouring substring with another substring in a string
let newSentence = "my name is Pritam";
console.log(newSentence,"(without replace)"); // "my name is Pritam"
console.log(newSentence.replace("P", "John") ,"(after replace)"); // "my name is ritamJohn"
console.log(newSentence.replace("m", "John") ,"(after replace)"); // "jhony name is Pritam"
//replaceAll method replaces all occurrences of a substring with another substring in a string
console.log(newSentence.replaceAll("m", "John")); // "Johny name is JohnitJohn"
//concat method concatenates two or more strings
let str1 = "Hello";
let str2 = "World";     
console.log(str1.concat(str2)); // "Hello World"
console.log(str1.concat(" ", str2,"haha")); // "Hello World haha"
console.log(str1 + " " + str2); // "Hello World" (using + operator)
//padStart and padEnd methods add padding to the start or end of a string to reach a specified length
let paddedStr = "+91";
console.log(paddedStr.padStart(12, "0")); 
console.log(paddedStr.padEnd(12, "0")); 
//charAt method returns the character at a specified index in a string
let exampleStr = "Hello, Worlda!";
console.log(exampleStr.charAt(4)); // "o"
//charCodeAt method returns the Unicode value of the character at a specified index in a string
console.log(exampleStr.charCodeAt(12)); // 97 (Unicode value of 'a')
//split method splits a string into an array of substrings based on a specified separator
let csv = "apple,banana,cherry";
console.log(csv);// "apple,banana,cherry"
console.log(csv.split(",")); // ["apple", "banana", "cherry"]
console.log(csv.split("a"));
console.log(csv.split("")); // ["a", "p", "p", "l", "e", ",", "b", "a", "n", "a", "n", "a", ",", "c", "h", "e", "r", "r", "y"]
//slice method extracts a portion of a string and returns it as a new string