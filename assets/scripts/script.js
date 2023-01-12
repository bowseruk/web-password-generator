// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Function used to remove repitition
  function confirmOption(name, characterSet, optionArray) {
    // Check for user input to decide to include the character set or not
    if (confirm(`Use ${name} Characters? Press OK to use ${name} characters or cancel to not include them in the password.`))
      // Add the options to the array if the user chooses ok,
      return optionArray.push(...characterSet);
    else {
      // Return the original array if the user does not want to include the options.
      return optionArray;
    };
  }
  // Create the variables outside of the loops
  let characterNumber;
  let characterArray = [];
  while (true) {
    // An infinite loop is used until a correct number is input.
    characterNumber = parseInt(prompt("Choose a number of characters between 10 - 64."));
    if ((typeof characterNumber === "number") && (characterNumber >= 10) && (characterNumber <= 64)){
      break;
    }
    alert("The value input is not a numeric value between 10 - 64")
  }
  while (true) {
    confirmOption("Uppercase", upperCasedCharacters, characterArray);
    confirmOption("Lowercase", lowerCasedCharacters, characterArray);
    confirmOption("Numeric", numericCharacters, characterArray);
    confirmOption("Special", specialCharacters, characterArray);
    if (characterArray.length === 0) {
      continue;
    }
    return new Array(characterNumber).fill(characterArray)
  } 
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  let password = "";
  let possibilities = getPasswordOptions();
  for (i = 0; i < possibilities.length; i++) {
    password += (getRandom(possibilities[i]));
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);