// Create a variable called msg to hold a new message
var msg = "Hello this is some testing message";
var el;
// Create a function to update the content of an element(id=msg)
function updateMessage() {
    el = document.getElementById('message');
    el.textContent = msg;

    
}

updateMessage();