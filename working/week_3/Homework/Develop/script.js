// Assignment Code
var generateBtn = document.querySelector("#generate");
//password length
var passwordLength = ""
//variable array for lowercase letters
var getLower =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//variable array for uppercase letters
var getUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
//variabe array for numbers
var getNumber = ['1','2','3','4','5','6','7','8','9','0']
//variable array for allowed symbols
var getSymbol = ['!','@','#','$','%','^','&','*','(',')','?','/','<','<','{','}','|','~']

//Prompt user for the length of password
var passwordLength = prompt("Please choose the length of your password" + passwordLength);
 if (!isNaN(+passwordLength)&& passwordLength!= 8 || passwordLength != 128) 
 
 {
   alert("You must enter a number between 8 and 128");
 }
else{
  var getLower = confirm ("Do you want to use lowercase letters for your password");
  console.log (getLower);
  var getUpper = confirm ("Do you want to use uppercase letters for your password");
  console.log (getUpper);
  var getNumber = confirm ("Do you want to use numbers for your password");
  console.log (getNumber);
  var getSymbol = confirm ("Do you want to use special characters for your password");
  console.log (getSymbol);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
