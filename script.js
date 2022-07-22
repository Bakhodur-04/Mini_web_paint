const colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("white");
colorCircles[7] = document.getElementById("orange");
colorCircles[8] = document.getElementById("black");
colorCircles[9] = document.getElementById("grey");

let targetColor = "#F00";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

const sizeCircles = [];
sizeCircles[0] = document.getElementById("verySmall");
sizeCircles[1] = document.getElementById("small");
sizeCircles[2] = document.getElementById("medium");
sizeCircles[3] = document.getElementById("big");
sizeCircles[4] = document.getElementById("veryBig");

const list = document.getElementById("list");
list.addEventListener("click", pickColor);

const canvas = document.querySelector("canvas");
let canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

const sizePen = document.getElementById("listPen");
sizePen.addEventListener("click", pickSize)

function pickColor(e) {
	if (e.target.tagName == "LI") {
		if (e.target.id == "red") {
			targetColor = "#F00"
		}
		else if (e.target.id == "blue") {
			targetColor = "#00F"
		}
		else if (e.target.id == "green") {
			targetColor = "#0F0"
		}
		else if (e.target.id == "yellow") {
			targetColor = "#FF0"
		}
		else if (e.target.id == "cyan") {
			targetColor = "#0FF"
		}
		else if (e.target.id == "magenta") {
			targetColor = "#F0F"
		}
		else if (e.target.id == "white") {
			targetColor = "#FFF"
		}
		else if (e.target.id == "orange") {
			targetColor = "orange"
		}
		else if (e.target.id == "black") {
			targetColor = "#000"
		}
		else if (e.target.id == "grey") {
			targetColor = "grey"
		}
		for (let i=0; i<=9; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}

let targetSize = 25;
sizeCircles[2].style.outline = "5px solid red";

function pickSize(e) {
	if (e.target.tagName == "LI") {
		if (e.target.id == "verySmall") {
			targetSize = 5;
		}
		else if (e.target.id == "small") {
			targetSize = 10;
		}
		else if (e.target.id == "medium") {
			targetSize = 25;
		}
		else if (e.target.id == "big") {
			targetSize = 50;
		}
		else if (e.target.id == "veryBig") {
			targetSize = 80;
		}
		for (let i=0; i<=4; i++) {
			sizeCircles[i].style.outline = "none";
		}
		e.target.style.outline = "5px solid red";
	}
}

function drawOnCanvas(e) {
	if (e.which == 1) {
		canvasContext.fillStyle = targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, targetSize, 0, Math.PI*2);
		canvasContext.fill();
	}
}
