let name = document.getElementById("nameRegister");
let lastname = document.getElementById("lastnameRegister");
let email = document.getElementById("emailRegister");
let password = document.getElementById("passwordRegister");
let phonenumber = document.getElementById("phonenumberRegister");
let address = document.getElementById("addressRegister");

function Validar(){
    
    if(lastname.value === null || lastname.value === "" || name.value === null || name.value === "" || email.value === null || email.value === "" || password.value === null || 
    password.value === "" ||address.value === null || address.value === "" ||phonenumber.value === null || phonenumber.value === "" ){
        alert("Hay campos vacios, por favor diligencielos")
    }


    return false;
}