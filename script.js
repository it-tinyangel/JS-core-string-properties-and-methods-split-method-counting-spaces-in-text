const userInputText = prompt('Input your text:');

// let numberOfSpaces = userInputText.split(' ').length - 1;
let numberOfSpaces = userInputText.split(/\s+/).length - 1;

console.log(`The number of spaces in the inputted text: ${numberOfSpaces}`);
