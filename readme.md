<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Vietnamese Restaurant</title>

</head>
<body>
    <h1>Look-Eat-Enjoy</h1>
    <div id="message">Welcome to our restaurant</div>
    <script src="js/basic-function.js"></script>
</body>
</html>


// Create a variable called msg to hold a new message
var msg = "Hello this is some testing message";
var el;
// Create a function to update the content of an element(id=msg)
function updateMessage() {
    el = document.getElementById('message');
    el.textContent = msg;

    
}

updateMessage();
