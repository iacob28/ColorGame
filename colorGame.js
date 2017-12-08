var colors = generateRandomColors(6);
var pickedColor = random();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

	squares[i].style.backgroundColor = colors[i];


	squares[i].addEventListener("click", function () {

		var clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor) {
			this.style.backgroundColor = changeColor(pickedColor);
			messageDisplay.textContent = "CORECT !";
			h1.style.backgroundColor = pickedColor;
		} else {
			messageDisplay.textContent = "Try Again !";
			this.style.backgroundColor = "#232323";
		}
	});
}


function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function random() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColorArr());
	}

	return arr;
}

function randomColorArr() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}