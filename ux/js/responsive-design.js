let innerBoxes = document.querySelectorAll(".boxes");
let outer = document.querySelector("#outer-box");
let inner = document.querySelector("#inner-box");
let selection = document.querySelectorAll(".selection");
let device = document.querySelector("#device");

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
        outer.style.width = "550px";
        outer.style.height = "420px";
        inner.style.width = "500px";
        inner.style.height = "370px";
        this.style.backgroundColor = "#F27575";
        container.style.paddingTop = "0px";
        device.textContent = "DESKTOP";
    }
    if(this.id=='tablet') {
        outer.style.width = "395px";
        outer.style.height = "420px";
        inner.style.width = "345px";
        inner.style.height = "370px";
        this.style.backgroundColor = "#F27575";
        container.style.paddingTop = "0px";
        device.textContent = "TABLET";
    }
    if(this.id=='mobile') {
        outer.style.width = "240px";
        outer.style.height = "360px";
        inner.style.width = "190px";
        inner.style.height = "310px";
        this.style.backgroundColor = "#F27575";
        container.style.paddingTop = "40px";
        device.textContent = "MOBILE";
    }
    
}