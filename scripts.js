// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
let upperCasedCharacters = [
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
    // Variable to store length of password from user input
    let length = parseInt(
        prompt('How many characters would you like your password to contain?')
    );

    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(length)) {
        alert('Password length must be provided as a number');
        return;
    }

    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length < 8 || length > 128) {
        alert('Password length must be at least 8 characters and no more than 129 characters');
        return;
    }

    // Variable to store boolean regarding the inclusion of special characters
    const hasSpecialCharacters = confirm(
        'Click OK to confirm including special characters.'
    );

    // Variable to store boolean regarding the inclusion of numeric characters
    const hasNumericCharacters = confirm(
        'Click OK to confirm including numeric characters.'
    );

    // Variable to store boolean regarding the inclusion of lowercase characters
    const hasLowerCasedCharacters = confirm(
        'Click OK to confirm including lowercase characters.'
    );

    // Variable to store boolean regarding the inclusion of uppercase characters
    const hasUpperCasedCharacters = confirm(
        'Click OK to confirm including uppercase characters.'
    );

    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (
        hasSpecialCharacters === false &&
        hasNumericCharacters === false &&
        hasLowerCasedCharacters === false &&
        hasUpperCasedCharacters === false
    ) {
        alert('Must select at least one character type');
        return;
    }

    // Object to store user input
    var passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters,
    };

    return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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