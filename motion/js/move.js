"use strict"

    let box = document.getElementById("box1");
    let boxLinear = document.getElementById("box2");
    var direction = 0;

    // box.addEventListener("click", function(){  

    //   switch(direction){
    //     case 0:
    //       // box.style.left = "400";
    //       box.style.transform = "translateX(400px)";
    //       console.log("move right");
    //       direction = 1;
    //     break;

    //     case 1:
    //       // box.style.left= "0";
    //       box.style.transform = "translateX(0px)";
    //       console.log("move left");
    //       direction = 0;
    //     break;
    //   }
    //   console.log(direction);

    // })

    function move(){
        switch(direction){
        case 0:
          // box.style.left = "400";
          box.style.transform = "translateX(400px)";
          boxLinear.style.transform = "translateX(400px)";
          // console.log("move right");
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

    setInterval(move, 3000); 
