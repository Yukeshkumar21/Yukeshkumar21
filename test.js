// //function validate() {  
//     // var fname = document.f1.fname;  
//     // var lname = document.f1.lname;
//     // var email = document.f1.email;
//     // var pwd = document.f1.pwd;
//     // var phone = document.f1.phone;  
//     // if (fname.value.length <= 0) {  
//     //     alert("First Name is required");  
//     //     fname.focus();  
//     //     return false;  
//     // }  
//     // if (lname.value.length <= 0) {
//     //     alert("Last Name is required");
//     //     lname.focus();
//     //     return false;  
//     // } 
//     // if (email.value.length <= 0) {
//     //       alert("Email is required");
//     //       email.focus();
//     //       return false;    
//     // }
//     // if (pwd.value.length <= 0) {
//     //     alert("Password is required");
//     //     pwd.focus();
//     //     return false;    
//     // }
//     // if (phone.value.length <= 0) {
//     //     alert("Phone Number is required");
//     //     phone.focus();
//     //     return false;    
//     // }
//     var name1 = document.getElementById("fname").value;
//         //check empty first name field
//         if(name1 == "") {
//             document.getElementById("fname_blankMsg").innerHTML = "Fill the First Name";
//             return false;
//         }
//     var name1 = document.getElementById("lname").value;
//           //check empty first name field
//           if(name1 == "") {
//               document.getElementById("lname_blankMsg").innerHTML = "Fill the Last Name";
//               return false;
//             }
//     var name1 = document.getElementById("email").value;
//             //check empty first name field
//             if(name1 == "") {
//                 document.getElementById("email_blankMsg").innerHTML = "**Fill the Email ID";
//                 return false;
//             }
//     var name1 = document.getElementById("pwd").value;
//               //check empty first name field
//               if(name1 == "") {
//                   document.getElementById("pwd_blankMsg").innerHTML = "**Fill the Password";
//                   return false;
//                 }
//    var name1 = document.getElementById("phone").value;
//                  //check empty first name field
//                  if(name1 == "") {
//                   document.getElementById("phone_blankMsg").innerHTML = "**Fill the Phone Number";
//                   return false;
//                 } 
// }
function myFunction() {
    var x = document.getElementById("f1");
    if (x.style.display === "none") {
      
    } else {
      x.style.display = "none";
    }
  }