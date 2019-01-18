function verify(){
        var un = document.loginform.email.value;
        var pw = document.loginform.password.value;
        var username = "jwalp@sjci.com";
        var password = "password";
        if ((un == username) && (pw == password)) {
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
}
