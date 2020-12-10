var fname= " ";
var lname = " ";
var email = " ";

function validateForm() {
    var x = fname["contact-form"]["fname"]+fname;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }

    var x = lname["contact-form"]["lname"]+lname;
    if (x == "") {
      alert("Last name must be filled out");
      return false;
    }
  
  }
  function confirmInput (){
alert(" Thanks for contacting us" + fname + lname)
}


