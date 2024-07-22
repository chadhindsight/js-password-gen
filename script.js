// Array of special characters to be included in password
const specialCharacters = [
    '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    let length = parseInt(prompt('How many characters would you like your password to contain?'));

    if (isNaN(length)) {
        alert('Password length must be provided as a number');
        return;
    }

    if (length < 8 || length > 128) {
        alert('Password length must be at least 8 characters and no more than 128 characters');
        return;
    }

    const hasSpecialCharacters = confirm('Click OK to confirm including special characters.');
    const hasNumericCharacters = confirm('Click OK to confirm including numeric characters.');
    const hasLowerCasedCharacters = confirm('Click OK to confirm including lowercase characters.');
    const hasUpperCasedCharacters = confirm('Click OK to confirm including uppercase characters.');

    if (!(hasSpecialCharacters || hasNumericCharacters || hasLowerCasedCharacters || hasUpperCasedCharacters)) {
        alert('Must select at least one character type');
        return;
    }

    return {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters,
    };
}

// Function for getting a random element from a string
function getRandomCharacter(str) {
    return str[Math.floor(Math.random() * str.length)];
}

// Function to generate password with user input
function generatePassword() {
    const options = getPasswordOptions();

    if (!options) return ''; // Return early if options are invalid

    const result = [];
    let possibleCharacters = '';
    let guaranteedCharacters = '';

    if (options.hasSpecialCharacters) {
        possibleCharacters += specialCharacters.join('');
        guaranteedCharacters += getRandomCharacter(specialCharacters.join(''));
    }

    if (options.hasNumericCharacters) {
        possibleCharacters += numericCharacters.join('');
        guaranteedCharacters += getRandomCharacter(numericCharacters.join(''));
    }

    if (options.hasLowerCasedCharacters) {
        possibleCharacters += lowerCasedCharacters.join('');
        guaranteedCharacters += getRandomCharacter(lowerCasedCharacters.join(''));
    }

    if (options.hasUpperCasedCharacters) {
        possibleCharacters += upperCasedCharacters.join('');
        guaranteedCharacters += getRandomCharacter(upperCasedCharacters.join(''));
    }

    // Ensure we have enough characters in the result
    for (let i = 0; i < options.length; i++) {
        let selected = getRandomCharacter(possibleCharacters);
        result.push(selected);
    }

    // Ensure at least one of each guaranteed character is included
    for (let i = 0; i < guaranteedCharacters.length; i++) {
        if (i < result.length) {
            result[i] = guaranteedCharacters[i];
        }
    }

    // Shuffle the result array to mix guaranteed characters with random ones
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]]; // Swap elements
    }

    // Return the final password as a string
    return result.join('');
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
