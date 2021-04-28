let choices = document.querySelectorAll(".texture-choices");
let model = document.querySelector("#main-model");

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", changeTexture);
}

function changeTexture () {
    //clear the selected style on all of them 
    clearLine();
    console.log("hello " + this.id);
    model.src = "../assets/3d/texture/" + this.id + ".png";
    this.style.border = "4px solid #272197";
}

function clearLine() {
    for (let i = 0; i < choices.length; i++) {
        choices[i].style.border = "4px solid #ffffff";
    }
}
