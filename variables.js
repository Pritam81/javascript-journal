console.log("Welcome back\nWe are learning variables in Javascript!");
//variable using let keyword
let userName='Pritam STP'
console.log('The username is',userName);
console.log('The datatype of userName is',typeof userName);//string
let age= 22;
console.log('Age is',age);
console.log('The dataType of age is',typeof age);
let isPritamHappy;
isPritamHappy=true;
console.log(isPritamHappy);
//the type of value the variable hold its datatype changes with respect to that value
age='twenty two'
console.log('Age is ',age);
console.log('The datatype of age is now',typeof age);
//accessing the character of username
console.log(userName[3],userName[2]);

//variable using const
const dob='22/02/2003'; //const value must be initialized 
console.log('the value of ',dob);
console.log(`the datatype of dob is`,typeof dob);
dob='1'//this gives error , const variables cannot be changes

