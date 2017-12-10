var colors = randomColorArr(6);
var pickedColor = randomColorPicker();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var h1ColorChange = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");


resetButton.addEventListener("click", function () {
	colors = randomColorArr(6);
	pickedColor = randomColorPicker();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}

	h1ColorChange.style.backgroundColor = "grey";
	message.textContent = "";
	resetButton.textContent = "New Color";
});


for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

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