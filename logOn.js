let user = null;
let welcomeMessage = document.getElementById("welcomeMessage")

let logInButton = document.getElementById("logInButton")
logInButton.addEventListener("click", checkUserLogIn)

let userName = document.getElementById("userName")
let password = document.getElementById("password")

let userInformation = [("tim", "abc"), ("john", "abc")]

function checkUserLogIn(){
    for (const userConst of userInformation){
        if (user === null){
            welcomeMessage.innerHTML = "please enter your information"
        }
        if (userConst[0] == userName && userConst[1] == password){
            user = userConst;
            welcomeMessage.innerHTML = "Welcome" + user[0];
            return;
        }
    }
    welcomeMessage.innerHTML = "wrong user information"

}