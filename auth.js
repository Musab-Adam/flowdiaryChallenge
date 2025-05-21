function validateForn(){
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let isvalid = true;

        // Email Validation
        if (email==""){
            document.getElementById("EmailEr").textContent = "Email must be filled out";
            isvalid = false;
        }
        else if (!/^[^\s@]+ @[^\s@]+\.[^\s@]+$/.test(email)){
            isvalid = false;
        } else{
            document.getElementById("EmailEr").textContent= "";
        }

        //Password Validation
        if (password ==""){
            document.getElementById("pswEr").textContent = " Password must be filled out";
            isvalid = false;
        }else if (password.length<6){
            document.getElementById("pswEr").textContent = " Password must be at least 6 characters";
            isvalid = false;
        }else{
            document.getElementById(pswEr).textContent = "";
        }
        return isvalid;

       }