var form = document.getElementById("form");
// var urme = document.getElementById("urme") ;
// var mnumber = document.getElementById("mnumber") ;
// var email = document.getElementById("email") ;
// var pwd = document.getElementById("pwd");
// var ppwd = document.getElementById("ppwd");
// 

// form.addEventListener("submit", (e) => {
    // e.preventDefault();
// 
    // validate();
// })
// 
// 




function validate() {
       let urme = document.getElementById("urme") ;
       let mnumber = document.getElementById("mnumber") ;
       let email = document.getElementById("email") ;
       let pwd = document.getElementById("pwd").value.trim() ;
       let ppwd = document.getElementById("ppwd").value.trim() ;

        var usercheck = /^([A-Za-z\.]{3,80})$/ ;
        var mncheck = /^([5-9][0-9]{9})$|^([5-9][0-9]{2}\-[0-9]{3}\-[0-9]{4})$|^([5-9][0-9]{2}\.[0-9]{3}\.[0-9]{4})$|^([5-9][0-9]{2}\ [0-9]{3}\ [0-9]{4})$/;
        var emailcheck = /^([A-Za-z][A-Za-z0-9\.\-\_]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
        var pwdcheck = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/

        
        
        
        
        if (usercheck.test(urme.value.trim())) {
            document.getElementById("usrerror").innerHTML="";
                // setUsrError.style.color ="blue";
                urme.style.border="5px solid green";
        } 
          
       
        
        
        else {
           document.getElementById("usrerror").innerHTML="**invalid";
           urme.style.border="5px solid red";
        // setErrorFor(urme, 'username can.t be blank');
          
           return false;
        }

        
        
        
    

        if (mncheck.test(mnumber.value.trim())) {
            document.getElementById("mnerror").innerHTML="";
            mnumber.style.border="5px solid green";

        } else {
            document.getElementById("mnerror").innerHTML="**mobile number is invalid";
            mnumber.style.border="5px solid red";
            return false;
            
        }
    
        if (emailcheck.test(email.value.trim())) {
            document.getElementById("emailerror").innerHTML="";
            email.style.border="5px solid green";

        } else {
            document.getElementById("emailerror").innerHTML="**email is invalid";
            email.style.border="5px solid red";
            return false;
            
        }
        if (pwdcheck.test(pwd)){
            document.getElementById("perror").innerHTML="valid";
            // pwd.style.border="5px solid green";
        } else {
            document.getElementById("perror").innerHTML="**password is invalid";
            // pwd.style.border="5px solid red";
            return false;
            
        }
        if (ppwd.match(pwd)) {
            document.getElementById("pperror").innerHTML="valid";
            // ppwd.style.border="5px solid green";
        } else {
            document.getElementById("pperror").innerHTML="**password not matching";
            // ppwd.style.border="5px solid red";
            return false;
            
        }

       
       
       
       
       
    
    }

    
    var myInput = document.getElementById("pwd");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var spclchar = document.getElementById("spclchar");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    // When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    //validate spclchar
    var specialcharacter = /[!@#$%^&*]/;
    if(myInput.value.match(specialcharacter)) {
    spclchar.classList.remove("invalid");
    spclchar.classList.add("valid");
    } else {
    spclchar.classList.remove("valid");
    spclchar.classList.add("invalid");
    }
    
    // Validate numbers
    var numbers = /[0-9]/;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }











  let timeout;
  let password = document.getElementById('pwd');
  let strengthBadge = document.getElementById('StrengthDisp');
  let strongPassword = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}')
  let mediumPassword = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,}|(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{6,}|(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{6,}|(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Z0-9!@#$%^&*]{6,}')

  function StrengthChecker(PasswordParameter) {
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
    } else if(mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "orange";
        strengthBadge.textContent = 'Medium';
    } else {
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Weak';
    }
}
password.addEventListener("input", () => {
    strengthBadge.style.display = 'block';
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);
    if(password.value.length !== 0) {
        strengthBadge.style.display != 'block';
    } else {
        strengthBadge.style.display = 'none';
    }
});








    // loginvalidate


    function loginvalidate(){

        var loginemail=document.getElementById("loginemail");
        var loginpassword=document.getElementById("loginpassword");

        var loginemailcheck = /^([A-Za-z][A-Za-z0-9\.\-\_]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
        var loginpasswordcheck = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/


        if (loginemailcheck.test(loginemail.value.trim())) {
            document.getElementById("loginemailerror").innerHTML="valid";
            loginemail.style.border ="2px solid green";
            // loginemailerror.style.color = "green";
            // document.getElementById("loginemailerror").style.color="green";
        } else {
            document.getElementById("loginemailerror").innerHTML="email is invalid";
            loginemail.style.border ="2px solid red";
            return false;
        }

        if (loginpasswordcheck.test(loginpassword.value.trim())) {
            document.getElementById("loginpassworderror").innerHTML="valid";
            loginpassword.style.border="2px solid green";
            // loginpassworderror.style.color = "green";
            // loginpassworderror.removeAttribute("hidden", "true");
        } else {
            document.getElementById("loginpassworderror").innerHTML="password is invalid";
            loginpassword.style.border="2px solid red";
            // loginpassworderror.style.color = "red";
            // loginpassworderror.removeAttribute("hidden", "true");
            return false;
        }      
  
  
  

        
    }




    // var pass =document.getElementById("password").value;
    // pass.addEventListener('keyup', function(){
        // checkPassword(pass.value)
    // })
    // function checkPassword(password){
        // var strengthbar = document.getElementById("strength");
        // var strength = 0 ;
        // if (password.match(/[A-Za-z]+/)){
            // strength +=1
        // }
        // if (password.match(/[!@#$%^&*]+/)){
            // strength +=1
        // }
        // if (password.match(/[0-9]+/)){
            // strength +=1
        // }
        // if (password.length > 8){
            // strength +=1
        // }
        // switch(strength){
            // case 0: 
                // strengthbar.value = 20;
                // break  
            // case 1: 
                // strengthbar.value = 40;
                // break 
                // 
            // case 2: 
                // strengthbar.value = 60;
                // break
            // case 3: 
                // strengthbar.value = 80;
                // break  
            // case 4: 
                // strengthbar.value = 100;
                // break  
        // }
    // }



    
    
    
    
    