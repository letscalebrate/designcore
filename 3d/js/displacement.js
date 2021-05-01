console.log("hello!");
let img = document.querySelector("#displacement");

let slider = document.querySelector("#displacementRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  //console.log(this.value);
    img.src = "../assets/3d/displacement-frames/dispalcement_000" + this.value + ".jpg";
}