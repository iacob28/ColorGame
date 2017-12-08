var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

var pickedColor = randomColor();


var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message")


for(var i = 0; i < squares.length; i++){
	
	squares[i].style.backgroundColor = colors[i];

	
	squares[i].addEventListener("click", function() {
		
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor) {
			this.style.backgroundColor = changeColor(pickedColor);
			messageDisplay.textContent = "CORECT !";
		} else {
			messageDisplay.textContent = "Try Again !";
			this.style.backgroundColor = "#232323";
		}
	});
}


function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function randomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}