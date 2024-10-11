let user = null;
let welcomeMessage = document.getElementById("welcomeMessage");

let logInButton = document.getElementById("logInButton");
logInButton.addEventListener("click", checkUserLogIn);

let userNameInput = document.getElementById("userName");
let passwordInput = document.getElementById("password");

let userInformation = [
    { username: "tim", password: "abc" },
    { username: "john", password: "abc" }
];

function checkUserLogIn(event) {
    event.preventDefault();  // Prevent form submission
    
    let enteredUserName = userNameInput.value;
    let enteredPassword = passwordInput.value;
    console.log("username: " + userNameInput.value + "    pw: " + passwordInput.value)

    if (!enteredUserName || !enteredPassword) {
        welcomeMessage.innerHTML = "Please enter your information";
        return;
    }

    for (const userObj of userInformation) {
        if (userObj.username === enteredUserName && userObj.password === enteredPassword) {
            user = userObj;
            welcomeMessage.innerHTML = "Welcome " + user.username;
            return;
        }
    }

    welcomeMessage.innerHTML = "Wrong user information";
}
