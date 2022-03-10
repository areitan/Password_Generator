# Password_Generator

## Description

The goal is to create a password generator that will generate a random password given user-selected password length and character sets (potentially including numbers, uppercase letters, lowercase letters, and/orsymbols.

Display of provided password generator box

![Display of password generator box](/assets/images/03-javascript-homework-demo.png)

Password generator showing password

![Password generator outcome](/assets/images/*******************.png)


## Process



- [Git Hub Repository](https://github.com/areitan/Password_Generator)
- [Password Generator]()


### Thinking Through The Problem

1. The first step I took was to start pseudo-coding. I wanted to get my thought process down on paper and then attempt to write the code from there.


### Popup Boxes

1. alert
2. prompt box for number of characters
3. confirm boxes for uppercase letters, lowercase letters, numbers, and symbols.
4. Turned boxes into functions to write user preferences to console
5. I made a variable called pwdLength to capture the user input from a prompt box asking for password length. I added a ```while``` loop to force user to pick length within specified range and to make sure it's a number.
6. I logged the result of each box to the console to make sure it was working propperly.
7. I added confirm modals to get user input for the types of characters to include.


### Arrays

1. I added an array for numbers beginning with 0 and ending at 9. I decided to make these strings so that the resulting password would come out correctly.
2. I added an array for uppercase letters.
3. I added an array for lowercase letters.
4. I added an array for special characters.
5. I added an empty array to hold the character sets the user selected.
6. I added an empty array to hold random characters selected for the password.


### Functions
1. After building out my boxes and arrays, I started thinking about how to collect the information and turn that into a usable array for generating characters
2. For each type of character set, I asked if the confirm evaluated to true. If it does, the array for that character set is concatinated to the empty array I created for the users prefered chracter sets to include in the password.
3. I added a for loop to pick random characters from the prefered characters array and concatinate them into an array for random characters to build the passord. 



## How To Contribute

As always suggestions are welcome. I have used the methods I have at hand at the moment, but there are many ways to get to the same end. There may be a more elegant way to write th is code, and input is welcome.


## Credits

- [W3 Schools: JavaScript Popup Boxes](https://www.w3schools.com/js/js_popup.asp)
- [W3 Schools: JavaScript Array concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)
- [O'Reilly: Chapter 5. Working with Arrays and Loops](https://www.oreilly.com/library/view/javascript-cookbook/9781449390211/ch05.html)
- [thisPointer: Convert array to string without comma in javascript](https://thispointer.com/convert-array-to-string-without-comma-in-javascript/)
- Trilogy Education Services, LLC for the original index.html and style.css files.





