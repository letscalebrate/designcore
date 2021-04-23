let container = document.querySelector("#interaction-container");
let mograph = document.querySelector("#mograph");
let num = 0;

container.onmouseover = container.onmouseout = handler;

let currHover = false;


function increaseSequence(){
    if(num<90) {
        num++;
    }
    mograph.src = "../assets/3d/mograph-frames/second0" + num + ".png";
    setTimeout(increaseSequence, 20);
}

function decreaseSequence(){
    console.log(num);
    num--;
    mograph.src = "../assets/3d/mograph-frames/second0" + num + ".png";
    setTimeout(decreaseSequence, 20);
}

function handler(event) {

  /*function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }*/

  /*log.value += event.type + ':  ' +
    'target=' + str(event.target) +
    ',  relatedTarget=' + str(event.relatedTarget) + "\n";
  log.scrollTop = log.scrollHeight;*/

  if (event.type == 'mouseover') {
      currHover = true;
      increaseSequence();
      
  }
  if (event.type == 'mouseout') {
    event.target.style.background = '';
      currHover = false;
      //console.log("goodbye " + num);
      //decreaseSequence();
  }
}




