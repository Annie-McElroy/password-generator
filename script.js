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

function generatePassword() {
  // Prompt question how many characters in password
  // var for characters

  //  What type of characters
  // special character, numbers, uppercase, and lowercase
  // window.confirm

  // Use answers to make password
  // vars that include all possible characters
  // separate vars for each type, arrays
  // one var for special character with arrays
  // EX: var upperLetters = ["A", "B", "C", "D"]

  // take all true arrays and concat into new array - loop
  // choose random chars from array based on user input
  // var push into new array
  // var password = turn array into string .toString()

  // return password


}