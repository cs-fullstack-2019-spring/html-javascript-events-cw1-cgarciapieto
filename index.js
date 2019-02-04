// As the User types,  they always enter a set sentence no matter what letters they actually type (each to the
// User presses a key, your JavaScript should add the next character from your hardcoded sentence to the textarea just
// as if they typed it).



var textEvent = document.getElementById("typer");
var myArray = "carlos is the cool one";
console.log(myArray);

var count = 0;

var resetMe = document.getElementById("resetbutton");


textEvent.addEventListener('keypress', function (e) {
    textEvent.value += myArray[count];
    count++;

    e.preventDefault();

    console.log("pressed");
});


resetMe.onclick=resetFunction;

function resetFunction() {


}


