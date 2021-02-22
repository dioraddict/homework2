localStorage// Assignment Code
var generateBtn = document.querySelector("#generate");
var numchar=prompt("Choose how many numbers in your password.  No less than 8 and no more than 128.")

generateBtn.addEventListener("click",function()
{alert("Please choose your criteria for your secure Password");})


if (numchar.length>6 & numchar.length<128)
{alert("Thank you, please choose Upper or Lowercase values.")}
else {alert("please try again")}



// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

