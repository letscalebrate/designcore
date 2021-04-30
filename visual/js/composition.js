"use strict";
/* Starter Project - by Your Name
 */
let shape1;
let shape2;
let shape3;
let grid = 1;
/* setup() runs once before starting the animation loop
 */


function setup() {
	
	var element = document.getElementById('p5canvas');
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    console.log(positionInfo.y);
    var canvas = createCanvas(width, height);
    canvas.parent('p5canvas');

	// createCanvas(800, 600 );
	background(0); // Black canvas background
	colorMode(HSB); // Use Hue/Saturation/Brightness color model
	shape1 = new DraggableRect(350, 350, 100, 100);
  	shape2 = new DraggableCirc(150, 150, 100, 100);
	shape3 = new DraggableRect(300, 100, 200, 200);

}

/* draw() draws the next random step
 */


function draw() {
	background(255);

	drawgrid();
	drawShape1();
	drawShape2();
	drawShape3();
}

function drawShape1(){
	
	shape1.over();
	shape1.update();
	shape1.show();
	fill("#F83D53");
}

function drawShape2(){
	
	shape2.over();
	shape2.update();
	shape2.show();
	fill("#362FCA");
}

function drawShape3(){
	
	shape3.over();
	shape3.update();
	shape3.show();
	fill("#FFB42C");
}

function mousePressed() {
	shape1.pressed();
	shape2.pressed();
	shape3.pressed();
  }
  
function mouseReleased() {
	shape1.released();
	shape2.released();
	shape3.released();
}

function thirds(){
	stroke(0);
	strokeWeight(2);
	line(600, 599, 0, 599);
	line(600, 1, 0, 1);
	line(1, 600, 1, 0);
	line(599, 600, 599, 0);

	line(200, 0, 200, 600);
	line(400, 0, 400, 600);
	line(600, 200, 0, 200);
	line(600, 400, 0, 400);

	noStroke();
}

let img;
function preload() {
	img = loadImage('../assets/visual/fib-01.png');
	}

function fib(){
	image(img, 0, 125, 600, 371);
}

function drawgrid(){
	if (grid == "1"){
		thirds();
		
	}
	else if (grid == "0"){
		fib();
	}
}



let fibButton = document.getElementById("fibButton");

fibButton.addEventListener("click", function(e){ 
	grid = "0";
	// console.log(grid);
	let active = document.getElementsByClassName("active");
	active[0].classList.remove("active");
	e.target.classList.add("active");
	
})

let thirdsButton = document.getElementById("thirdsButton");
thirdsButton.addEventListener("click", function(e){ 
	grid = "1";
	// console.log(grid);
	let active = document.getElementsByClassName("active");
	active[0].classList.remove("active");
	// console.log(e);
	e.target.classList.add("active");
})