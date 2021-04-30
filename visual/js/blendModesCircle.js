
function PhysicsBlock(x, y, w, h, confettiColor, p){
    var options = {
        friction: 0.2,
        frictionAir: 0.1,
        restitution: 0.5,
        density: 1
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    // this.body.collisionFilter = {
    //     'group': -1,
    //     'category': 2,
    //     'mask': 0,
    //   };

    // let img;
    // img = p.loadImage('../p.png')



    // explosion force vector based on https://observablehq.com/@timhau/playing-with-matter-js
    // const forceMagnitude = random(0.01,0.01) * this.body.mass;
    // Matter.Body.applyForce(this.body, this.body.position, {
    //     x: (forceMagnitude + random(0.01,0.01) * random(0.01,0.01) * forceMagnitude),
    //     y: (-forceMagnitude + random(0.01,0.01) * random(0.01,0.01) * -forceMagnitude)
    //   });
    // const forceMagnitude = p.random(0.01,0.01) * this.body.mass;
    // Matter.Body.applyForce(this.body, this.body.position, {
    //     x: (forceMagnitude + p.random(0.01,0.01) * p.random(0.01,0.01) * forceMagnitude),
    //     y: (-forceMagnitude + p.random(0.01,0.01) * p.random(0.01,0.01) * -forceMagnitude)
    //   });
      

    World.add(world, this.body);


    this.isOffScreen = function(){
        var pos = this.body.position;
        return (pos.y > p.height + 100);
    }

    this.removeFromWorld = function() {
        World.remove(world, this.body);
      };

    this.inField = function(){
        let matterCanvas = document.getElementById("matterCanvas");
        let matterWindowHeight = matterCanvas.offsetHeight;
        let matterWindowWidth = matterCanvas.offsetWidth;

        var pos = this.body.position;
        return (pos.y < 100 - (matterWindowHeight/2));

    }

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        // console.log(angle);

        let matterCanvas = document.getElementById("matterCanvas");
        let matterWindowHeight = matterCanvas.offsetHeight;
        let matterWindowWidth = matterCanvas.offsetWidth;
        // console.log(matterWindowHeight);

        let htmlBlock;
        htmlBlock = document.getElementById("htmlBlock");
        // console.log(htmlBlock.offsetHeight);
        let blockWidth = htmlBlock.offsetWidth;
        let blockHeight = htmlBlock.offsetWidth;
        // htmlBlock.translate(pos.x, pos.y);
        // console.log(pos.x);
        // htmlBlock.style.top = pos.y;
        htmlBlock.style.transform = "translateY("+(pos.y-(matterWindowHeight/2)-(blockHeight/2))+"px) translateX("+(pos.x+(matterWindowWidth/2)-(blockWidth/2))+"px) rotate("+angle+"rad)";
        // htmlBlock.style.transform = "";
        // console.log("rotate("+pos.y+")");
        // console.log(htmlBlock.style.top);
        // htmlBlock.style.left = pos.x;

        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(angle);
        p.rectMode(p.CENTER);
        p.colorMode(p.HSB);
        p.fill(confettiColor);
        p.strokeWeight(0);
        // p.rect(0, 0, this.w, this.h);
        // p.image(img, -this.w/2, -this.h/2, 454, 150)
        // box(this.w, this.h, 1, 1);
        // rotateY(millis() / 1000);
        p.pop();
    }

}