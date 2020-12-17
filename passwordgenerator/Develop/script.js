// Arrays used in password generator and a blank variable array to store the generated random password
var generateBtn = document.querySelector("#generate");
generateBtn = document.addEventListener("click", generatePassword);


const passArray = [];
var useLowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var useUppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var useNumbers = ['1','2','3','4','5','6','7','8','9','0'];
var useSymbols = ['!','@','#','$','%','^','&','*','(',')','?','/','<','<','{','}','|','~'];

// Function to generate password based on user input from prompts and confirms

function generatePassword ()   
    {
     var passwordLength = ' ';

//Prompting user for the length of password. 
//If it meets criteria then will go on too ask for confirmation of characters they want to use

  var passwordLength = prompt("How long do you want your password to be, please choose the number of characters");

      if (passwordLength < 8 || passwordLength >128)
        {
            alert("You must enter a number between 8 and 128");
            passwordLength = prompt("How long do you want your password to be, please choose the number of characters");
        }
//Confirming what type of characters the user wants to use for their password
        var useLowers = confirm ("Do you want to use lowercase letters for your password");
        var useUppers = confirm("Do you want to use uppercase letters for your password");
        var useNumbers = confirm ("Do you want to use numbers letters for your password");
        var useSymbols = confirm("Do you want to use special characters for your password");
        if (!useLowers ===true && !useUppers === true && !useNumbers === true && !useSymbols === true)
        {
      alert("You must choose at least two values for the password generator to work");
      var useLowers = confirm ("Do you want to use lowercase letters for your password");
      var useUppers = confirm("Do you want to use uppercase letters for your password");
      var useNumbers = confirm ("Do you want to use numbers letters for your password");
      var useSymbols = confirm("Do you want to use special characters for your password");

        }
//For loop to generate password by slicing existing arrays and pushing them into the const passArray[]      
for(var i = 0; i < passwordLength; i++); 
    {
      


    
  if (useLowers === true)
  {
         passArray = useLowers.slice(0,26);
         passArray.push(passArray+length);
         console.log(passArray);
}
        
        
          if (useUppers === true)
	     {
        passArray = useUppers.slice(0,26);
        passArray.push(passArray+length);
        console.log(passArray);

           
             }
       
       
        if (useNumbers === true)
	   {
      passArray = useNumbers.slice(0,10);
      passArray.push(passArray+length);
      console.log(passArray);

       
           }
          
        
         if (useSymbols === true)
	    {
        passArray = useSymbols.slice(0,12);
        passArray.push(passArray+length);
        console.log(passArray);

         
            }
       console.log(passArray.toString()); 
          
        }
    }
    

// Write password to the #password input
//function writePassword(passwordLength) {
  //var password = generatePassword();
  

//var passwordText = document.querySelector("password");

//passwordText.value = password;

// Add event listener to generate button




//const generateBtn = document.getElementById("#generate");


//document.getElementById("generatePassword").addEventListener("click", function(){
//random_password = random_password_generate(16,8);
//document.getElementById("randomPassword").value = random_password;



 

