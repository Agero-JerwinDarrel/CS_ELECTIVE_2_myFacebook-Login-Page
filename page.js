function validate(){

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email=="admin" && password=="admin"){
        location.replace('fbhome.html');
    }
    else{
      alert("Incorrect Username or password");
   }
   return false;
}