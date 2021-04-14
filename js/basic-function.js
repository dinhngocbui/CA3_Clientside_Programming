// Create a variable called msg to hold a new message
var msg = "Hello this is some testing message";

// Create a function to update the content of an element(id=msg)
function updateMessage(){
    doucument.getElementById('message').textContent = msg;
}

updateMessage();