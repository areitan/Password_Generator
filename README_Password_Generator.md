# Password_Generator

## Description

The goal was to create a password generator that will generate a random password given user-selected password length and character sets (potentially including numbers, uppercase letters, lowercase letters, and/or symbols).

Display of provided password generator box

![Display of password generator box](/assets/images/03-javascript-homework-demo.png)

Password generator showing password

![Password generator outcome](/assets/images/password.png)


By enering data into the prompts, you generate a random password containing characters from the users chosen character sets.

Prompt for password length on button click

![Prompt for length](/assets/images/pwd_length_screen1.png)

Prompt for invalid password length entry

![Prompt for invalid length](/assets/images/pwd_length.png)

Confirm for uppercase letters

![Confirm for uppercase ](/assets/images/uppercase.png)

Confirm for lowercase letters

![Confirm for lowercase](/assets/images/lowercase.png)

Confirm for numbers 

![Confirm for numbers](/assets/images/numbers.png)

Confirm for special characters

![Confirm for symbols](/assets/images/symbols.png)



## Process

- [Git Hub Repository](https://github.com/areitan/Password_Generator)
- [Password Generator]()


### Thinking Through The Problem

1. The first step I took was to start pseudo-coding. I wanted to get my thought process down on paper and then attempt to write the code from there.


### Popup Boxes For User Input

1. I added a prompt box for the number of characters.
2. I added a variable called pwLength to capture the user input from the prompt box asking for password length.
3. I added confirm boxes for uppercase letters, lowercase letters, numbers, and symbols.
4. I made a variable called pwLength to capture the user input from a prompt box asking for password length. 
5. I added a ```while``` loop to the password length prompt box to force user to pick length within specified range.
6. I logged the result of each box to the console to make sure it was working propperly.


### Arrays and variables

1. I added an array for numbers beginning with 0 and ending at 9.
2. I added an array for uppercase letters.
3. I added an array for lowercase letters.
4. I added an array for special characters.
5. I added an empty global array to hold the character sets the user selected called preferenceArray.
6. I added an empty global array to hold random characters selected for the password called randomArray.
7. I declared the variables I wanted to use to store user preference input.
8. I added the preferenceArray (which receives the user-selected character set arrays) and the randomArray (which receives random characters selected for the password) inside the function to re-assign those arrays as empty each time the function runs.


### Functions

1. After building out my boxes and arrays, I started thinking about how to collect the information and turn that into a usable array for generating characters.
2. For each type of character set, I asked if the confirm evaluated to true. If it did, the array for that character set is concatinated to the empty array I created for the users prefered chracter sets to include in the password.
3. In order to garantee that there be at least 1 character from each user-selected character set, I generated a random character from that set if the function evaluated to true and pushed it to the randomArray that holds what will become the password.
4. I added a for loop to pick random characters from the user's prefered characters. Then those are pushed into an array for random characters to build the passord. 


### Joining the Random Array into a password string

1. I used ```.join``` in order take the characters that were selected into my array for the randomly selected characters and join them into a string to form the final password.

## How To Contribute

As always suggestions are welcome. I have used the methods I have at hand at the moment, but there are many ways to get to the same end. There may be a more elegant way to write th is code, and input is welcome.


## Credits

- [W3 Schools: JavaScript Popup Boxes](https://www.w3schools.com/js/js_popup.asp)
- [W3 Schools: JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)
- [MDN Web Docs: Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [O'Reilly: Chapter 5. Working with Arrays and Loops](https://www.oreilly.com/library/view/javascript-cookbook/9781449390211/ch05.html)
- [thisPointer: Convert array to string without comma in javascript](https://thispointer.com/convert-array-to-string-without-comma-in-javascript/)
- Trilogy Education Services, LLC for the original index.html and style.css files.





