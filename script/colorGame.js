var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    //change colroDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i <squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i=0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {

    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?"
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }

    });
};

function changeColors(color) {
    // loop through all squares
    for (i=0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var color = Math.floor((Math.random() * colors.length ));
    return colors[color];
}

function generateRandomColors(num) {
    var colors = [];
    for (i=0; i < num; i++) {
        var num1 = randomColor();
        var num2 = randomColor();
        var num3 = randomColor();
        colors[i] = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
    }
    return colors;
}

function randomColor() {
    return Math.floor((Math.random() * 256))
}