// se declaran las etiquetas e inputs y botones
const welcomeOutput = document.getElementById("WelcomeOutput");
const inputName = document.getElementById("InputName");
const inputMessage = document.getElementById("InputMessage");
const outputMessage = document.getElementById("OutputMessage");
const messageButton = document.getElementById("ButtonMessage");
const counterOutput = document.getElementById("CounterOutput");
const outputMessageTitle = document.getElementById("OutputMessageTitle");

// el que escucha los eventos y les asigna una
inputName.addEventListener("keyup",eventName);
inputMessage.addEventListener("keyup", eventMessage);
messageButton.addEventListener("click",eventMessage);

function eventName(event){
    if(event.keyCode == 13){
        let wordValue = event.target.value;
        welcomeOutput.innerText = wordValue.charAt(0).toUpperCase();
    }
}

function eventMessage(event){
    if(event.type == "click"){
        outputMessageTitle.innerText = "Vista previa de tu mensaje";
        outputMessage.innerText = inputMessage.value;
    }
    counterOutput.innerText = (200 - inputMessage.value.length);
    // outputMessageTitle.innerText = "Vista previa de tu mensaje";
    // outputMessage.innerText = inputMessage.value;
}


