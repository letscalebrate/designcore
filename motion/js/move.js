"use strict"

    let box = document.getElementById("box1");
    let boxLinear = document.getElementById("box2");
    var direction = 0;
let transformString;

let screenRez = screen.width;
if(screenRez>420) {
    transformString = "translateX(90px)";
}
else {
    transformString = "translateX(90px)";
}

    function move(){
        switch(direction){
        case 0:
          box.style.transform = transformString;
          boxLinear.style.transform = transformString;
          direction = 1;
        break;

        case 1:
          // box.style.left= "0";
          box.style.transform = "translateX(0px)";
          boxLinear.style.transform = "translateX(0px)";
          // console.log("move left");
          direction = 0;
        break;
      }
    }

    setInterval(move, 2000); 
