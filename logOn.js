let user = null;

let logInButton = document.getElementById("logInButton")
logInButton.addEventListener("click", checkUserLogIn)

let userName = document.getElementById("userName")
let password = document.getElementById("password")

let userInformation = [("tim", "abc"), ("john", "abc")]

function checkUserLogIn(){
    for (const userConst of userInformation){
        if (user === null){
            document.getElementById("welcomeMessage").innerHTML = "please enter your information"
        }
        if (userConst[0] === userName && userConst[1] === password){
            user = userConst;
            document.getElementById("welcomeMessage").innerHTML = "Welcome" + user[0];
            return;
        }
    }
    document.getElementById("welcomeMessage").innerHTML = "wrong user information"

}