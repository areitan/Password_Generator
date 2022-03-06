// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Creates an array containing possible numbers
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Creates an array containing possible UPPERCARE letters
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Creates an array containing possible uppercase letters
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creates an array containing possible uppercase letters
var symbolArray = ["!", "#", "'", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"'];

// "\"

// Creates an empty array for pushing random values to
var randomArray = []

// Creates an empty array for pushing user preferences
var preferenceArray = []

// Initial popup boxes
// password alert
alert("Would you like to generate a password?");

// Select length
function getLength(){
  var pwLength = prompt("How many characters?", "Select 8 to 128 characters");
  while ((pwLength < 8) || (pwLength > 128)) {
    pwLength = prompt("How many characters?", "Select 8 to 128 characters");
  }
    console.log(pwLength);
  }

  // Confirm uppercase
  function includeUpper(){
    var getUpper = confirm("Would you like to include numbers?\nExample: 1,2,3,...");
      console.log(getUpper);
    }

  // Confirm lowercase
  function includeLower(){
    var getLower = confirm("Would you like to include lowercase letters?\nExample: a, b, c...");
      console.log(getLower);
    }

  // Confirm numbers
  function includeNum(){
    var getNumbers = confirm("Would you like to include numbers?\nExample: 1,2,3,...");
      console.log(getNumbers);
    }

  // Confirm symbols
  function includeSymbol(){
    var getSymbols = confirm("Would you like to include symbols?\nExample: #, &, @...");
      console.log(getSymbols);
    }

  getLength()
  includeUpper()
  includeLower()
  includeNum()
  includeSymbol()

  

  // if (getUpper === true) {
  //   temporary.push()
  // }


// Make values on console available for use in if statements
  // if (uppercase == false && lowercase === false && numbers === false && symbols === false){
  //   alert("You have not chosen any character types");
  // }
  


// Creates a temporary array for user preferences
// var preferenceArray = [getUpper, getLower, getNumbers, getSymbols];
// console.log(preferenceArray);



// Loops through temporary array picking random characters until it reaches pasword length
//   for (var i = 0; i < pwLength; i++) { 
//     console.log("");
// }

// Random characters
// var rand = Math.floor(Math.random() * randomArray.length);
// var concat = randomArray[rand];
// function random() {
//    document.getElementById("demo").innerHTML = (concat);
// }




// {
//   return password
// }

