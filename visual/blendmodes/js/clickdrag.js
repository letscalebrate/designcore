var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Query = Matter.Query,
    Common = Matter.Common
    // Mouse = Matter.Mouse,
    // MouseConstraint = Matter.MouseConstraint;


    var Mouse = Matter.Mouse;
    var MouseConstraint = Matter.MouseConstraint;
    

// create an engine
var engine;
var world;
// var boxA;
var boxes = [];

var ground;
// var mConstraint;
var mouseConstraint;


let clickdragp5 = new p5((p) => {
    let x = 0;
    let y = 0;

// p.preload = function preload(){
//     img = p.loadImage('../media/mentorship.png');
// }

p.setup = function(){
    var element = document.getElementById('matterCanvas');
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    console.log(positionInfo.y);
    var canvas = p.createCanvas(width, height, p.WEBGL);
    canvas.parent('matterCanvas');
    // p.perspective(p.PI / 3.0, width / height, 0.5, 500);
    // p.camera(0, 0, (height/2.0) / p.tan(p.PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0)

    // var imageRatio = img.height/img.width;


    // var canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    // canvas.parent("matterCanvas");
    p.background(0,0,0);
    engine = Engine.create();
    world = engine.world; 
    world.gravity.y = 0;
    world.gravity.x = 0;
    Engine.run(engine);
    var boundaryoptions = {
        isStatic: true
    }



    var bodyAttractor = Matter.Bodies.circle(0, 0, 10, {
        plugin: {
          attractors: [
            function(bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 2e-6,
                y: (bodyA.position.y - bodyB.position.y) * 2e-6,
              };
            }
          ]
        }
    });

    ground = Bodies.rectangle(0, (p.height / 2) + 50, p.width, 100, boundaryoptions);
    ceiling = Bodies.rectangle(0, (-p.height / 2) - 50, p.width, 100, boundaryoptions);
    left = Bodies.rectangle((-p.width / 2) - 50, 0, 100, p.height, boundaryoptions);
    right = Bodies.rectangle((p.width / 2) + 50, 0, 100, p.height, boundaryoptions);
    // console.log(boxA);
    // console.log(World)
    World.add(world, bodyAttractor);
    World.add(world, ground);
    World.add(world, ceiling);
    World.add(world, left);
    World.add(world, right);
    

    var colors = ['#090254', '#362FCA', '#F83D53', '#FFB42C'];
    var randomColor = colors[Math.floor(Math.random()*colors.length)];

    // boxes.push(new Box1(0, 0, 100, 100, colors[Math.floor(Math.random()*colors.length)], p));
    // boxes.push(new Box1(0, 0, 100, 100, colors[Math.floor(Math.random()*colors.length)], p));
    // boxes.push(new Circle(0, 0, 50, colors[Math.floor(Math.random()*colors.length)], p));
    // boxes.push(new Circle(0, 0, 50, colors[Math.floor(Math.random()*colors.length)], p));
    
    // Matter.Bodies.fromVertices(x, y, [[vector]], [options], [flagInternal=false], [removeCollinear=0.01], [minimumArea=10], [removeDuplicatePoints=0.01])
    // console.log("clickdragbox 1 created");
    // boxes.push(new Box1(0, 0, 200, 200, colors[Math.floor(Math.random()*colors.length)], p));
    // boxes.push(new Box1(0, 0, 200, 200, colors[Math.floor(Math.random()*colors.length)], p));
    // boxes.push(new Box1(0, 0, 200, 200, colors[Math.floor(Math.random()*colors.length)], p));

    // boxes.push(new PhysicsImg(0, 0, 252, 60, colors[Math.floor(Math.random()*colors.length)], p));
    // boxes.push(new PhysicsH1(0, 0, 540, 73, colors[Math.floor(Math.random()*colors.length)], p));
    // boxes.push(new PhysicsP(0, 0, 454, 150, colors[Math.floor(Math.random()*colors.length)], p));
    boxes.push(new PhysicsBlock(0, 0, 200, 200, colors[Math.floor(Math.random()*colors.length)], p));
    // boxes.push(new PhysicsBlock2(0, 0, 100, 100, colors[Math.floor(Math.random()*colors.length)], p));

    // console.log("clickdragbox 2 created");

    p.noStroke();

    // p.rectMode(p.CENTER);

    var mouse = Mouse.create(canvas.elt);
        mouse.offset = {
        x: -p.width/2,
        y: -p.height/2
    }

  var mouseParams = {
    mouse: mouse,
    constraint: {
    //   stiffness: 0.1,
    }
  }
  
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.pixelRatio = p.pixelDensity();
  World.add(world, mouseConstraint);


}

p.draw = function draw(){
    p.background(255, 255, 255);
    p.colorMode(p.HSB);
    p.clear();
    
    // background((mouseX/width) * 255 , ((mouseY/height) * 255),255, 100);
    
    for(var i = 0; i < boxes.length; i++){
        boxes[i].show();
        if (boxes[i].isOffScreen()){
            boxes[i].removeFromWorld();
            boxes.splice(i, 1);
            i--;
            // console.log("rect removed")
        }
        // if (boxes[i].inField()){
            // console.log("in field")
            // var timer = setTimeout("triggerPage()", 5000);    
            // console.log(timer);
        // }
        // else {
            // clearTimeout(timer);
            // console.log("timer cleared")
        // }
        
    }

    // var scale = 0.75;
    // p.imageMode(p.CENTER);
    // p.image(img, 0, 0, p.width, p.width*0.65241343127);

    // console.log(Query.point([boxes.Bodies], { x: 0, y: 0 }));

    // if (Query.point(boxes, { x: 0, y: 0 }).length === 0) {
    //     console.log("Mouse over box!")
    // }
}

// p.mousePressed = function mousePressed(){
//     console.log(p.mouseX, p.mouseY);
// }


// p.windowResized = function(){
//     var element = document.getElementById('matterCanvas');
//     var positionInfo = element.getBoundingClientRect();
//     var height = positionInfo.height;
//     var width = positionInfo.width;
//     p.resizeCanvas(width, height);
//     // img.resize(width, width*0.65241343127);
// }



});

// function triggerPage(){
//     console.log("change page")
//     document.location.href = "../index.html";
// }

function change_blend(){
	let bmode = document.getElementById("blendDropdown").value;
	let circle = document.getElementById("htmlBlock");
  circle.style.mixBlendMode = bmode;
	console.log(document.getElementById("blendDropdown").value);
	return true;
	}
  