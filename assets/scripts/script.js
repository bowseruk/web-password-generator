// Array of special characters to be included in password.
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

// Array of uppercase characters to be included in password.
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

// Function to prompt user for password options.
function getPasswordOptions() {
  // Function used to remove repitition.
  function confirmOption(name, characterSet, optionArray) {
    // Check for user input to decide to include the character set or not.
    if (confirm(`Use ${name} Characters? Press OK to use ${name} characters or cancel to not include them in the password.`))
      // Add the options to the array if the user chooses ok,
      return optionArray.push(...characterSet);
    else {
      // Return the original array if the user does not want to include the options.
      return optionArray;
    };
  }
  // Create the variables outside of the loops.
  let characterNumber;
  let characterArray = [];
  while (true) {
    // An infinite loop is used until a correct number is input.
    characterNumber = parseInt(prompt("Choose a number of characters between 10 - 64."));
    // Check the length is correct and the type is correct before moving on to the next step.
    if ((typeof characterNumber === "number") && (characterNumber >= 10) && (characterNumber <= 64)){
      break;
    }
    alert("The value input is not a numeric value between 10 - 64")
  }
  while (true) {
    // Infinite loop that asks for each special character.
    confirmOption("Uppercase", upperCasedCharacters, characterArray);
    confirmOption("Lowercase", lowerCasedCharacters, characterArray);
    confirmOption("Numeric", numericCharacters, characterArray);
    confirmOption("Special", specialCharacters, characterArray);
    // Redo the loop if no options are chosen.
    if (characterArray.length === 0) {
      continue;
    }
    // Return an array that is the length of the password, with an array with all the possibilities in each position of the array.
    return new Array(characterNumber).fill(characterArray)
  } 
}

// Function for getting a random element from an array.
function getRandom(arr) {
  // Get the length of the array and choose a number between the start and the end randomly.
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input.
function generatePassword() {
  // Create an empty string.
  let password = "";
  // Get an array the length of the password, with each one being all the possible characters in that position.
  let possibilities = getPasswordOptions();
  // For every character choose one of the possibilities at random.
  for (i = 0; i < possibilities.length; i++) {
    password += (getRandom(possibilities[i]));
  }
  // Return the constructed password.
  return password;
}

// Get references to the #generate element.
var generateBtn = document.querySelector('#generate');

// Write password to the #password input.
function writePassword() {
  document.getElementById('favicon').setAttribute("href", `assets/images/unlocked.ico`)
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  // Set the password field on the page to the generated password.
  passwordText.value = password;
  document.getElementById('favicon').setAttribute("href", `assets/images/locked.ico`)
}

// Add event listener to generate button.
generateBtn.addEventListener('click', writePassword);