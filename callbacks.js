//callback functions= can do async things

function displayWelcomeMessage() {
    const welcomeMessage = document.createElement("h2");
    welcomeMessage.textContent = "Welcome to our website!";
    document.body.appendChild(welcomeMessage);
}
setTimeout(displayWelcomeMessage, 3000);
function x(y){
    console.log("x");
    y();

}
x(function y(){
    console.log("y");

})

document.getElementById("clickMe")
.addEventListener("click", function clicked(){
    console.log("Button is clicked!")
})

function addCount(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function clicked(){
    console.log("Button is clicked!", ++count)
})
}
addCount();

//garbage collection and removeEventListeners
// when these are removed they are collected by the garbage collector.