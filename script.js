

function getCurrentTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';



//Convert to 12 hour format

hours = hours % 12;
hours = hours ? hours : 12; //Handle midnight (0 hours)

//pad minutes with leading zero if neccesery
minutes = minutes < 10 ? '0' + minutes : minutes;

//create the formated time string
var formatedTime = hours + ':' + minutes + ' ' + ampm;
return formatedTime;

}
function sendMessage() {
    var userInput = document.getElementById("userInput");
    var message = userInput.value;
    
     if (message.trim() !== ""){
         appendMessage("you", message);
         userInput.value = "";
         processMessage(message);
     }
     }

     function appendMessage (sender, message){
        var chatContainer = document.getElementById("chatContainer");
        var messageElement = document.createElement("p");
        messageElement.innerHTML = "<strong>" + sender + ": </strong>" + message;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
     }


function processMessage(message){
if(message.includes("hello")){
    response = "I am the chatot."
}
else if (message.includes("weather")){
    getWeather("Davao");
    appendMessage("Chatbot", response);
    return;
}
else if(message.includes("pizza")) {
        response = "I love pizza too.";
    } 
else if (message.includes("time")) {
        var formatedTime = getCurrentTime(); 
        response = "the time is " + formatedTime;  
      } 



setTimeout(function(){
    appendMessage ("Chatbot", response);
}, 2000);

}     


function getWeather (city) {
//there I should write am API
var apiKey = "a valid API key that I do not have";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&apiid=&{apikey}";

fetch(apiUrl).then( response => response.json())
.then(data => {
    var description = data.weather[0].description; 
    response = "the weather today is ${description}"
    appendMessage("Chatbot", response);
}).catch(err =>{
    console.log("error:", err);
}); 

}