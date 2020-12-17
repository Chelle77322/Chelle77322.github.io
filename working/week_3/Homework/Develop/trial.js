//Declaring variables and arrays to be used
var getPassword = ''
var passwordLength =''
var useLowers =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var useUppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var useNumbers = ['1','2','3','4','5','6','7','8','9','0']
var useSymbols = ['!','@','#','$','%','^','&','*','(',')','?','/','<','<','{','}','|','~']


 document.getElementById("generate").addEventListener("click", function()
 {

  random_password = random_password_generate(16,8);
 document.getElementById("randomPassword").value = random_password;
  
  

function makePassword(passwordLength) {
  var password = generatePassword();
  var passwordText = document.querySelector("password");
   passwordText.value = password;

//Prompting user for the length of password. 
//If it meets criteria then will go on too ask for confirmation of characters they want to use

  var passwordLength = prompt("How long do you want your password to be, please choose the number of characters");
      if (passwordLength < 8 || passwordLength >128)
        {
        
alert("You must enter a number between 8 and 128");

return passwordLength();
console.log(passwordLength);

}
else{
var getLower = confirm("Do you want to use lowercase letters ?");
console.log(getLower);
var getUpper = confirm("Do you want to use uppercase letters?");
console.log(getUpper);
var getNumber = confirm("Do you want to use numbers?");
console.log(getNumber);
var getSymbol = confirm("Do you want to use symbols?");
console.log(getSymbol);
    }
 if (!getLower===true && !getUpper ===true && !getNumber ===true  && !getSymbol ===true)
  {
   alert("You must select at least one value to use in your password");

  }
 else
    {}
   
   if (getLower === true && getUpper ===true && getNumber === true && getSymbol=== true)
    {

   var passChars = "";
    function useLowers()
      {
    return String.passChars(Math.floor(Math.random()*26)+97);
       }
    }

  }
}
//else{
  //for (i = 0; i < passwordLength; i++) {
    //getPassword[i]();

    //var getLower = confirm ("Do you want to use lowercase letters for your password");
    //console.log(getLower);
  //if(getLower===true){}

