alert("Here comes your dialog box!");//  returns void
let result= confirm("Do you want to proceed?") ;//returns boolean , true if ok else false
result?alert("You chose to proceed!"):alert("You chose not to proceed!");
let name=prompt("Please enter your name:");//return string if user enters something, null if user clicks cancel
console.log(name);