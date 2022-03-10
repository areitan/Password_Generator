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
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Creates an array containing possible UPPERCARE letters
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Creates an array containing possible uppercase letters
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creates an array containing possible uppercase letters
var symbolArray = ["!", "#", "'", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"', "\\"];

// An empty array for random values
var randomArray = []

// An empty array for pushing user preferences
var preferenceArray = []

// function to build password
function generatePassword() {

  // Initial popup boxes
// password alert
alert("Would you like to generate a password?");

// Select length
var pwLength = prompt("Please enter password length.", "Select 8 to 128 characters");
  while ((pwLength < 8) || (pwLength > 128) || isNaN(pwLength)) {
    pwLength = prompt("Please enter a valid password length.", "8 to 128 characters");
  }
    console.log(pwLength);
   

  // Confirm uppercase
  function includeUpper(){
    var getUpper = confirm("Would you like to include uppercase letters?\nExample: A,B,C,...");
      console.log(getUpper);
      if (getUpper === true) {
        // Concat array upperArray to preferenceArray
        preferenceArray.concat[upperArray]
      }
    };

  // Confirm lowercase
  function includeLower(){
    var getLower = confirm("Would you like to include lowercase letters?\nExample: a, b, c...");
      console.log(getLower);
      if (getLower === true) {
        // Concat array lowerArray to preferenceArray
        preferenceArray.concat[lowerArray]
      }
    };

  // Confirm numbers
  function includeNum(){
    var getNumbers = confirm("Would you like to include numbers?\nExample: 1,2,3,...");
      console.log(getNumbers);
      if (getNumbers === true) {
        // Concat array numberArray to preferenceArray
        preferenceArray.concat[numberArray]
      }
    };

  // Confirm symbols
  function includeSymbol(){
    var getSymbols = confirm("Would you like to include symbols?\nExample: #, &, @...");
      console.log(getSymbols);
      if (getSymbols === true) {
        // Concat array symbolArray to preferenceArray
        preferenceArray.concat[symbolArray]
      }
    };
    console.log(preferenceArray);

  includeUpper()
  includeLower()
  includeNum()
  includeSymbol()

// Loops through preferenceArray picking random characters until it reaches pwLength length
  for (var i = 0; i < pwLength; i++) { 
  // Picks random characters
var rand = Math.floor(Math.random() * preferenceArray.length);
  // Concatinates random characters to randomArray
randomArray.concat(preferenceArray[rand])
return randomArray;
};



// convert password to string without commas
var finalPassword  = randomArray.join(""); 
alert("Your password is " + finalPassword);
};

// Generate the password
generatePassword();
