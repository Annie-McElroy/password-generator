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
  // store var for characters
  
  var userCharacters = window.prompt("How many characters do you want your password to be?");
  
  if (userCharacters < 8 || userCharacters > 128) {
    window.alert("Your password must be at least 8 characters long and no more than 128.");
    return;
  };
  
  // What type of characters do you want
  // special character, numbers, uppercase, and lowercase
  // window.confirm
  
  var getSpecCharacters = window.confirm("Do you want to use special characters?");
  var getNumbers = window.confirm("Do you want to use numbers?");
  var getUpper = window.confirm("Do you want to use uppercase letters?");
  var getLower = window.confirm("Do you want to use lowercase letters?");
  
  
  // if (!getSpecCharacters && !getNumbers && !getUpper && !getLower) {
    //   window.alert("Your must choose at least one type of character to create a password. Please try again.");
  //   return;
  // }
  
  // Use answers to make password
  //  vars that include all possible characters
  //  separate vars for each type, arrays
  //  EX: var upperLetters = ["A", "B", "C", "D"]
  var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}","~"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  // take all true arrays and concat into new array

  var chosenChars = "";
  
  if (getSpecCharacters) {
    chosenChars = specialCharacters.concat(chosenChars);
  };

  if (getNumbers) {
    chosenChars = numbers.concat(chosenChars);
  };

  if (getUpper) {
    chosenChars = upperCase.concat(chosenChars);
  };

  if (getLower) {
    chosenChars = lowerCase.concat(chosenChars);
    // spec characters and numbers
  };

  if (!getSpecCharacters && !getNumbers && !getUpper && !getLower) {
    window.alert("Your must choose at least one type of character to create a password. Please try again.");
      return;
  };
  
  for (i = 0; i < userCharacters; i++) {
    var passwordChars = chosenChars[Math.floor(Math.random() * chosenChars.length)];
    password = chosenChars.concat(passwordChars);
  };

  console.log (passwordChars);

  // Create for loop
  // choose random chars from array based on user input
  // var push into new array
  // var password = turn array into string .toString()



  // return password


}