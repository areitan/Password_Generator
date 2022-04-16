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
var symbolArray = ["!", "#", "'", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"', "\\"];

// An empty array for random values
var randomArray = []

// An empty array for pushing user preferences
var preferenceArray = []

// Declaring variables
var getUpper
var getLower
var getNumbers
var getSymbols
var pwLength


// function to build password
function generatePassword() {

  // Resetting arrays for selecting characters for password each time funcion runs
  randomArray = []
  preferenceArray = []

  // Initial popup boxes
  // Prompt for user to select desired password length
  pwLength = parseInt(prompt("Please enter password length.", "Select 8 to 128 characters"));
  while ((pwLength < 8) || (pwLength > 128) || isNaN(pwLength)) {
    pwLength = parseInt(prompt("Please enter a valid password length.", "8 to 128 characters"));
  }
  console.log(pwLength);

  // Confirm uppercase
  function includeUpper() {
    getUpper = confirm("Would you like to include uppercase letters?\nExample: A,B,C,...");
    console.log(getUpper);
    if (getUpper === true) {
      // pushes array upperArray to preferenceArray
      for (var i = 0; i < upperArray.length; i++) {
        preferenceArray.push(upperArray[i])
      }
    }
    return preferenceArray;
  };


  // Confirm lowercase
  function includeLower() {
    getLower = confirm("Would you like to include lowercase letters?\nExample: a, b, c...");
    console.log(getLower);
    if (getLower === true) {
      // pushes array lowerArray to preferenceArray
      for (var i = 0; i < lowerArray.length; i++) {
        preferenceArray.push(lowerArray[i])
      }
    }
    return preferenceArray;
  };

  // Confirm numbers
  function includeNum() {
    getNumbers = confirm("Would you like to include numbers?\nExample: 1,2,3,...");
    console.log(getNumbers);
    if (getNumbers === true) {
      // pushes array numberArray to preferenceArray
      for (var i = 0; i < numberArray.length; i++) {
        preferenceArray.push(numberArray[i])
      }
    }
    return preferenceArray;
  };

  // Confirm symbols
  function includeSymbol() {
    getSymbols = confirm("Would you like to include symbols?\nExample: #, &, @...");
    console.log(getSymbols);
    if (getSymbols === true) {
      // pushes array symbolArray to preferenceArray
      for (var i = 0; i < symbolArray.length; i++) {
        preferenceArray.push(symbolArray[i])
      }
    }
    return preferenceArray;
  };

  includeUpper()
  includeLower()
  includeNum()
  includeSymbol()

  console.log(pwLength)
  // Loops through preferenceArray picking random characters until it reaches pwLength length
  for (var i = 0; i < pwLength; i++) {
    // Picks random characters
    var rand = Math.floor(Math.random() * preferenceArray.length);
    // pushes random characters to randomArray
    randomArray.push(preferenceArray[rand])
    console.log(randomArray)
  };

  // convert password to string without commas
  var finalPassword = randomArray.join("");
  return finalPassword;
};


