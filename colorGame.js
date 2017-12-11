var numSquare = 6;
var colors;
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1ColorChange = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var gameModeButtons = document.querySelectorAll(".gameMode");


init();




function init(){
	setupSquares();
	setupGameModeButtons();
	reset();
}

function setupSquares(){

	for (var i = 0; i < squares.length; i++) {
		
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				message.textContent = "Corect !";
				winColorChangeSquares(pickedColor);
				h1ColorChange.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play again?";
			} else {
				message.textContent = "Try Again !";
				this.style.backgroundColor = "#232323";
			}
		});
	
	}
}

function setupGameModeButtons(){

	for (var i = 0; i < gameModeButtons.length; i++) {
		gameModeButtons[i].addEventListener("click", function () {
			gameModeButtons[0].classList.remove("selected");
			gameModeButtons[1].classList.remove("selected");
			this.classList.add("selected");
	
			this.textContent === "Easy Mode" ? numSquare = 3 : numSquare = 6; //ternary operator javascript
			// if (this.textContent === "Easy Mode") {
			// 	numSquare = 3;
			// } else {
			// 	numSquare = 6;
			// }
	
			reset();
	
		});
	}
}

resetButton.addEventListener("click", function () {
	reset();
});

function reset() {
	colors = randomColorArr(numSquare);
	pickedColor = randomColorPicker();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1ColorChange.style.backgroundColor = "steelblue";
	message.textContent = "";
	resetButton.textContent = "New Color";
}

function winColorChangeSquares(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function randomColorPicker() {
	var i = Math.floor(Math.random() * colors.length);
	return colors[i];
}

function randomColorArr(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(buildRandomColor());
	}

	return arr;
}

function buildRandomColor() {
	// red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}