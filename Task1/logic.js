let access_number=false;
let access_email=false;
let access=false
function userData() {
    let html_password = document.getElementById("password").value;
    let html_confirm_password = document.getElementById("confirmpassword").value;
    
    if ( html_confirm_password == html_password && access_number && access_email && access) {
        alert("User is registered");
    }
    else {
        alert("user name or email or password is not matching")
    };
};
function numberValid(){
    let html_number = document.getElementById("number").value;
    if(String(html_number).length==10){
        document.getElementById("number_error").innerHTML='';
        access_number=true
    }else{
        access_number=false
        document.getElementById("number_error").innerHTML='Invalid number'
    }
};
function nameValid(){
    let html_name = document.getElementById("name").value;
    if (html_name.length < 1) {
        access=false
        document.getElementById('name_error').innerHTML = 'Name must be filled out';
        // alert("Name length should be greater than 5")
    }else{
        access=true
        document.getElementById('name_error').innerHTML = '';
    }
};
function passwordValid(){
    let html_password = document.getElementById("password").value;
    let html_confirm_password = document.getElementById("confirmpassword").value;
    if (html_confirm_password != html_password) {
        document.getElementById('password_error').innerHTML = 'Password does not match';
    }else{
        document.getElementById('password_error').innerHTML = '';
    };
};
function emailValid(){
    let html_email = document.getElementById("email").value;
    if (html_email.includes("@") && html_email.includes(".com")){
        access_email=true;
        document.getElementById('email_error').innerHTML = '';
        console.log("hiii")
    }else{
        access_email=false;
        document.getElementById('email_error').innerHTML = 'not a valid mail';
    }
};