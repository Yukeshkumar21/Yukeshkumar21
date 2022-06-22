function validate() {  
    var name1 = document.getElementById("fname").value;
        //check empty first name field
        if(name1 == "") {
            document.getElementById("fname_blankMsg").innerHTML = "Fill the First Name";
            return false;
        }
    var name1 = document.getElementById("lname").value;
          //check empty first name field
          if(name1 == "") {
              document.getElementById("lname_blankMsg").innerHTML = "Fill the Last Name";
              return false;
            }
    var name1 = document.getElementById("email").value;
            //check empty first name field
            if(name1 == "") {
                document.getElementById("email_blankMsg").innerHTML = "**Fill the Email ID";
                return false;
            }
    var name1 = document.getElementById("pwd").value;
              //check empty first name field
              if(name1 == "") {
                  document.getElementById("pwd_blankMsg").innerHTML = "**Fill the Password";
                  return false;
                }
   var name1 = document.getElementById("phone").value;
                 //check empty first name field
                 if(name1 == "") {
                  document.getElementById("phone_blankMsg").innerHTML = "**Fill the Phone Number";
                  return false;
                } 
}
// function myFunction () {
//     var x = document.getElementById("submit");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }



  var formSubmit = document.getElementById("myForm");
  var regForm = document.getElementById("registrationForm");
  var successMessage = document.getElementById("successMessage");
  var stbButton = document.getElementById("stbButton");

  successMessage.style.display = "none";
  formSubmit.onclick = function() {
    validate();
    regForm.style.display = "none";
    successMessage.style.display = "block";
    stbButton.style.display = "none";

    // if (regForm.style.display === "block") {
    //   regForm.style.display = "none";
    // }
    // else {
    //   regForm.style.display = "block";
    // }

  }
  
 