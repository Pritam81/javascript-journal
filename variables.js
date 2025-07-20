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
//dob='1'//this gives error , const variables cannot be changes

//variable using var (not recommended its old)
//difference between var and let is that var retains the value inside as well as inside block but let retains only inside block and not outside

//block1
{
    let x=10
    console.log(`inside block of let-`,x);

}
//accessing variable declared with let keyword outside block gives error 
//console.log(x);
{
    var y=20;
    console.log(`inside block of var -`,y);
}
console.log(`outside block of var -`,y);

//declaration diff of var and let
var sister = "anjani"
var sister = "soring"
let brother ="sugam"
//let brother= "Amypme"
