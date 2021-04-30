"use strict";
/* Starter Project - by Your Name
 */
let shape1;
let shape2;
let img;
/* setup() runs once before starting the animation loop
 */

function preload() {
	img = loadImage('testphoto.jpg');
  }

function setup() {
	createCanvas(800, 600);
	background(0); // Black canvas background
	colorMode(HSB); // Use Hue/Saturation/Brightness color model
	shape1 = new Draggable(100, 100, 100, 100);
  	shape2 = new Draggable(150, 100, 100, 100);
	image(img, 0, 0);
}

/* draw() draws the next random step
 */
function draw() {
	background(255);
	blendMode(BLEND);

	image(img, 0, 0);

	drawShape1();
	change_blend();
	drawShape2();
}

function drawShape1(){
	blendMode(BLEND);
	
	shape1.over();
	shape1.update();
	shape1.show();
	fill(0,100,100);
}

function drawShape2(){
	blendMode(MULTIPLY);
	
	shape2.over();
	shape2.update();
	shape2.show();
	fill(0,0,0);
}

function mousePressed() {
	shape1.pressed();
	shape2.pressed();
  }
  
function mouseReleased() {
	shape1.released();
	shape2.released();
  }


function change_blend(){
	let bmode = document.getElementById("blendDropdown").value;
	blendMode(bmode);
	console.log(document.getElementById("blendDropdown").value);
	return true;
	}