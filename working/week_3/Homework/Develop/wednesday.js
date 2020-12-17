var password = document.querySelector("#password"); // Password id text area - This is where the password will be written
var generate = generatePassword ();// variable that calls the generatePassword function???


//These are the random arrays generated from the above arrays to be then concated into the password variable as a string value

var generatePassEl = document.getElementsByClassName("btn").addEventListener("click", generatePassword());// Button element variable
 
function generatePassword ()   
    {
      var passwordLength = ' ';
      //var random = getRandom();//variable that calls the getRandom function to get random letters from the variable arrays below
      
      
      var useLowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];// Lower case array
      var useUppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];// Upper case array
      var useNumbers = ['1','2','3','4','5','6','7','8','9','0'];//Number array
      var useSymbols = ['!','@','#','$','%','^','&','*','(',')','?','/','<','<','{','}','|','~'];//Symbol array

      const pswdRandom = [useLowers + useUppers + useNumbers + useSymbols];
      

//Prompting user for the length of password. 
//If it meets criteria then will go on too ask for confirmation of characters they want to use

  var passwordLength = prompt("How long do you want your password to be, please choose the number of characters");
      if (passwordLength < 8 || passwordLength >128)
        {
            alert("You must enter a number between 8 and 128");
            return("")+ prompt("How long do you want your password to be, please choose the number of characters");
             }
       
        else{

        
   
for(var i = 0; i < passwordLength; i++); 
    {
      var useLowers = confirm ("Do you want to use lowercase letters for your password");
      var useUppers = confirm("Do you want to use uppercase letters for your password");
      var useNumbers = confirm ("Do you want to use numbers letters for your password");
      var useSymbols = confirm("Do you want to use special characters for your password");

  if (!useLowers ===true && !useUppers === true && !useNumbers === true && !useSymbols === true)
    {
  alert("You must choose at least two values for the password generator to work");
    }


      // generate random character subsets for password after meeting the critera
   else{     
        if (useLowers === true){
          
        const lowerRandom = [useLowers];
       
            
        
         console.log(lowerRandom);

  
          }
        
        
          
          if (useUppers === true){
          
           
         
          }
        }
       
        if (useSymbols === true){

       
        }
          
        
        
        if (useNumbers === true){
          
            
         
          }
        
          
        }
        //password = useLowers + useUppers + useNumbers + useSymbols;
        //password = password.split(' ');
        //shuffle(password);
        //password = password.join("");
        //console.log(password);

        }
        

        //var useUppers = confirm ("Do you want to use uppercase letters in your password");
        //console.log(useUppers);
        
        //var useNumbers = confirm ("Do you want to use numbers in your password");
        //console.log(useNumbers);

        //var useSymbols = confirm ("Do you want to use special characters in your password");
        //console.log(useSymbols);
 
        }
      