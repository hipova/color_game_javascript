var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var numberBlocks = squares.length;
var colors;
var pickedColor;


reset(numberBlocks);


function reset(num) {
    //generate all new colors
    colors = generateRandomColors(num);

    // pick a new random color from array
    pickedColor = pickColor();

    //change colroDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    h1.style.backgroundColor = "steelblue";

    messageDisplay.textContent = "";

    // display 3 or 6 squares
    for(var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else { squares[i].style.display = "none"; }
    }

    resetButton.textContent = "New Colours";
}

for (var i=0; i < numberBlocks; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {

        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare color to pickedColor if win
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } // if didn'n guess
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
};

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener ("click", function() {

        // toggling between Easy and Hard mode
        if(this.textContent==="Easy" && numberBlocks !== 3) {
            numberBlocks = 3; 
            toggleClassBtn();
        } else if (this.textContent==="Hard" && numberBlocks !== 6){            numberBlocks = 6;
            toggleClassBtn();
        };
        reset(numberBlocks);
    });
};

resetButton.addEventListener("click", function(){
    reset(numberBlocks);
});

function toggleClassBtn() {
    for (i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.toggle("selected");
    }
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

function pickColor() {
    var color = Math.floor((Math.random() * colors.length ));
    return colors[color];
}

function randomColor() {
    return Math.floor((Math.random() * 256))
}

function changeColors(color) {
    // loop through all squares
    for (i=0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}
