var colors = randomColorArr(6);
var pickedColor = randomColorPicker();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var h1ColorChange = document.querySelector("h1");


for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	console.log(squares[i], colors[i]);

	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			message.textContent = "CORECT !";
			winColorChangeSquares(pickedColor);
			h1ColorChange.style.backgroundColor = pickedColor;
		} else {
			message.textContent = "TRY AGAIN !";
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