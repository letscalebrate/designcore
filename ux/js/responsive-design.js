let innerBoxes = document.querySelectorAll(".boxes");
let outer = document.querySelector("#outer-box");
let inner = document.querySelector("#inner-box");
let selection = document.querySelectorAll(".selection");
let device = document.querySelector("#device");

let screenRez = screen.width;
console.log("Your screen resolution is: " + screen.width + "x" + screen.height);
console.log(("Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio));

for (let i = 0; i < innerBoxes.length; i++) {
  innerBoxes[i].addEventListener("click", fillBox);
}

function fillBox() {
    let col = this.dataset.color;
    this.style.backgroundColor = col;
}

for (let i = 0; i < selection.length; i++) {
  selection[i].addEventListener("click", changeSize);
}

function changeSize() {
    for (let i = 0; i < selection.length; i++) {
    selection[i].style.backgroundColor = "#ffffff";
    }
    this.style.backgroundColor = "#ffffff";
    console.log("hello " + this.id);
    if(this.id=='desktop') {
        if(screenRez>420) {
            outer.style.width = "550px";
            outer.style.height = "420px";
            inner.style.width = "500px";
            inner.style.height = "370px";
        }
        else {
            //if on mobile
            outer.style.width = "310px";
            outer.style.height = "220px";
            inner.style.width = "280px";
            inner.style.height = "190px";
        }
        this.style.backgroundColor = "#F27575";
        container.style.paddingTop = "0px";
        device.textContent = "DESKTOP";
    }
    if(this.id=='tablet') {
        if(screenRez>420) {
            outer.style.width = "395px";
            outer.style.height = "420px";
            inner.style.width = "345px";
            inner.style.height = "370px";
        }
        else {
            //if on mobile
            outer.style.width = "220px";
            outer.style.height = "220px";
            inner.style.width = "190px";
            inner.style.height = "187px";
        }
        this.style.backgroundColor = "#F27575";
        container.style.paddingTop = "0px";
        device.textContent = "TABLET";
    }
    if(this.id=='mobile') {
        if(screenRez>420) {
            outer.style.width = "240px";
            outer.style.height = "360px";
            inner.style.width = "190px";
            inner.style.height = "310px";
            container.style.paddingTop = "40px";
        }
        //if on mobile
        else {
            outer.style.width = "135px";
            outer.style.height = "180px";
            inner.style.width = "105px";
            inner.style.height = "150px";
            container.style.paddingTop = "20px";
        }
        
        this.style.backgroundColor = "#F27575";
        device.textContent = "MOBILE";
    }
    
}