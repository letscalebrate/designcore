let circlebase = document.querySelector("#circle-base");
let circlemiddle = document.querySelector("#circle-middle");
let circletop = document.querySelector("#circle-top");

let grad1 = document.querySelector("#g-opt1");
let grad2 = document.querySelector("#g-opt2");
let grad3 = document.querySelector("#g-opt3");
let grad4 = document.querySelector("#g-opt4");
let grads = [grad1, grad2, grad3, grad4];

let stroke1 = document.querySelector("#s-opt1");
let stroke2 = document.querySelector("#s-opt2");
let stroke3 = document.querySelector("#s-opt3");
let strokes = [stroke1, stroke2, stroke3];

let startBtn = document.querySelector("#start");
let start2 = document.querySelector("#start2");
let start3 = document.querySelector("#start3");
let start4 = document.querySelector("#start4");

for (let i = 0; i < grads.length; i++) {
  grads[i].addEventListener("click", changeColor);
}

for (let i = 0; i < strokes.length; i++) {
  strokes[i].addEventListener("click", changeStroke);
}

function changeColor(e) {
    let color1 = e.srcElement.dataset.color1;
    let color2 = e.srcElement.dataset.color2;
    if(e.target.id == 'g-opt1') {
        startBtn.style.display = "block";
        start2.style.display="none";
        start3.style.display = "none";
        start4.style.display = "none";
        grad1.style.boxShadow = "0 0 0 5px #DADADA";
        grad2.style.boxShadow = "0 0 0 0px #DADADA";
        grad3.style.boxShadow = "0 0 0 0px #DADADA";
        grad4.style.boxShadow = "0 0 0 0px #DADADA";
        circlemiddle.style.borderColor = "#7447B6";
        circletop.style.borderColor = "#7447B6";
    }
    if(e.target.id == 'g-opt2') {
        startBtn.style.display = "none";
        start2.style.display="block";
        start3.style.display = "none";
        start4.style.display = "none";
        grad1.style.boxShadow = "0 0 0 0px #DADADA";
        grad2.style.boxShadow = "0 0 0 5px #DADADA";
        grad3.style.boxShadow = "0 0 0 0px #DADADA";
        grad4.style.boxShadow = "0 0 0 0px #DADADA";
        circlemiddle.style.borderColor = "#FE8D3C";
        circletop.style.borderColor = "#FE8D3C";
    }
    if(e.target.id == 'g-opt3') {
        startBtn.style.display = "none";
        start2.style.display="none";
        start3.style.display = "block";
        start4.style.display = "none";
        grad1.style.boxShadow = "0 0 0 0px #DADADA";
        grad2.style.boxShadow = "0 0 0 0px #DADADA";
        grad3.style.boxShadow = "0 0 0 5px #DADADA";
        grad4.style.boxShadow = "0 0 0 0px #DADADA";
        circlemiddle.style.borderColor = "#2F2698";
        circletop.style.borderColor = "#2F2698";
    }
    if(e.target.id == 'g-opt4') {
        startBtn.style.display = "none";
        start2.style.display="none";
        start3.style.display = "none";
        start4.style.display = "block";
        grad1.style.boxShadow = "0 0 0 0px #DADADA";
        grad2.style.boxShadow = "0 0 0 0px #DADADA";
        grad3.style.boxShadow = "0 0 0 0px #DADADA";
        grad4.style.boxShadow = "0 0 0 5px #DADADA";
        circlemiddle.style.borderColor = "#7066EB";
        circletop.style.borderColor = "#7066EB";
    }
    circlebase.style.backgroundImage = "linear-gradient(90deg, " + color1 + ", " + color2 + ")";
}

function changeStroke(e) {
    let newStroke1 = e.srcElement.dataset.thickness1;
    let newStroke2 = e.srcElement.dataset.thickness2;
    circlemiddle.style.borderWidth = newStroke1;
    circletop.style.borderWidth = newStroke2;
    console.log(e.srcElement.id);
    if(e.target.id == 's-opt1') {
        stroke1.style.boxShadow = "0 0 0 5px #DADADA";
        stroke2.style.boxShadow = "0 0 0 0px #DADADA";
        stroke3.style.boxShadow = "0 0 0 0px #DADADA";
    }
    if(e.target.id == 's-opt2') {
        stroke1.style.boxShadow = "0 0 0 0px #DADADA";
        stroke2.style.boxShadow = "0 0 0 5px #DADADA";
        stroke3.style.boxShadow = "0 0 0 0px #DADADA";
    }
    if(e.target.id == 's-opt3') {
        stroke1.style.boxShadow = "0 0 0 0px #DADADA";
        stroke2.style.boxShadow = "0 0 0 0px #DADADA";
        stroke3.style.boxShadow = "0 0 0 5px #DADADA";
    }
    console.log("hello");
}

