// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword()

  passwordText.value = password;
    
  }

  
  
 









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)




//need to write prompts for password criteria
//length of password criteria.  at least 8 characters and no more than 128
//character types.  lowercase uppercase numeric and or special characters
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page