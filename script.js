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
  console.log(userCharacters);
  
  if (userCharacters < 8 || userCharacters > 128) {
    window.alert("Your password must be at least 8 characters long and no more than 128.");
    return;
  };
  
  window.confirm("Do you want to use special characters?");
  window.confirm("Do you want to use numbers?");
  window.confirm("Do you want to use uppercase letters?");
  window.confirm("Do you want to use lowercase letters?");
  
  var specialCharacters = ["!", "U+0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "U+005C", "]", "^", "_", "`", "{", "|", "}","~"];

  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  
  // if (userCharacters >=8  <=128) {
    
    // }


  //  What type of characters
  // special character, numbers, uppercase, and lowercase
  // window.confirm



  // Use answers to make password
  // vars that include all possible characters
  // separate vars for each type, arrays
  // EX: var upperLetters = ["A", "B", "C", "D"]
  
  if (specialCharacters && numbers && upperCase && lowerCase) {
    var allTrue = specialCharacters.concat(numbers, upperCase, lowerCase);
  } else if (specialCharacters && numbers && upperCase) {
    var specNumUpper = specialCharacters.concat(numbers, upperCase);
  } else if (specialCharacters && numbers) {
    var specNum = specialCharacters.concat(numbers);
  } else if (specNum && lowerCase) {
    var specNumLower = specNum.concat(lowerCase);
  }
  console.log (allTrue)

  // take all true arrays and concat into new array - loop
  // choose random chars from array based on user input
  // var push into new array
  // var password = turn array into string .toString()



  // return password


}