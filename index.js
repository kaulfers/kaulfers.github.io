function displayHelloWorld(){
    document.getElementById("helloWorld").innerHTML = "Hello World";
}

let button = document.getElementById("helloWorldButton");
button.addEventListener("click", displayHelloWorld);

