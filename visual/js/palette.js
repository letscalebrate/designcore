// GLobal Variables
let colors = document.querySelectorAll(".color");
let palette = document.querySelector(".palette");
let hex = "abcdef123456789";
let currSelection = 'random';
let genColors = [];
let col1, col2, col3, col4, col5;
let curr1, curr2, curr3, curr4, curr5;
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let p5 = document.querySelector("#p5");

$('input[type=radio][name=colors]').change(function() {
    currSelection = this.value;
});

// Generate random hex
let randHex = () => {
  let hexString = "#";
  for (let i = 0; i < 6; i++) {
    hexString += hex[Math.round(Math.random() * 6)];
  }
  return hexString;
};

// generate colors
let generate = () => {
  colors.forEach((color) => {
    let currId = color.id;
    let hexVal;
      if(currSelection=='random') {
          hexVal = randHex();
          color.style.backgroundColor = hexVal;
          if(color.id=='col1') {p1.textContent = hexVal.toUpperCase()}
          if(color.id=='col2') {p2.textContent = hexVal.toUpperCase()}
          if(color.id=='col3') {p3.textContent = hexVal.toUpperCase()}
          if(color.id=='col4') {p4.textContent = hexVal.toUpperCase()}
          if(color.id=='col5') {p5.textContent = hexVal.toUpperCase()}
      }
      else if(currSelection=='analogous') {
          if(color.id=='col1') {
              hexVal = randHex();
              console.log("NUMBER 1 " + hexVal);
              curr1 = hexVal;
              color.style.backgroundColor = "#ffffff";
              p1.textContent = "";
          }
          else {
          var colors = tinycolor(curr1).analogous();
          colors.map(function(t) { return t.toHexString(); });
              curr2=colors[1].toHexString();
              curr3=colors[2].toHexString();
              if(color.id=='col2') {
              color.style.backgroundColor = curr1;
                  p2.textContent = curr1.toUpperCase();
              }
              if(color.id=='col3') {
              color.style.backgroundColor = curr2;
                  p3.textContent = curr2.toUpperCase();
              }
              if(color.id=='col4') {
              color.style.backgroundColor = curr3;
                  p4.textContent = curr3.toUpperCase();
              }
              if(color.id=='col5') {
              color.style.backgroundColor = "#ffffff";
                  p5.textContent = "";
              }
          }
      }
      else if(currSelection=='monochromatic') {
          if(color.id=='col1') {
              hexVal = randHex();
              curr1 = hexVal;
              color.style.backgroundColor = curr1;
              p1.textContent = curr1.toUpperCase();
          }
          else {
          var colors = tinycolor(curr1).monochromatic();
          colors.map(function(t) { return t.toHexString(); });
              curr2=colors[1].toHexString();
              curr3=colors[2].toHexString();
              curr4=colors[3].toHexString();
              curr5=colors[4].toHexString();
              if(color.id=='col2') {
              color.style.backgroundColor = curr2;
                  p2.textContent = curr2.toUpperCase();
              }
              if(color.id=='col3') {
              color.style.backgroundColor = curr3;
                  p3.textContent = curr3.toUpperCase();
              }
              if(color.id=='col4') {
              color.style.backgroundColor = curr4;
                  p4.textContent = curr4.toUpperCase();
              }
              if(color.id=='col5') {
              color.style.backgroundColor = curr5;
                  p5.textContent = curr5.toUpperCase();
              }
          }
      }
      else if(currSelection=='triad') {
          if(color.id=='col1') {
              hexVal = randHex();
              console.log("NUMBER 1 " + hexVal);
              curr1 = hexVal;
              color.style.backgroundColor = "#ffffff";
              p1.textContent = "";
          }
          else {
          var colors = tinycolor(curr1).triad();
          colors.map(function(t) { return t.toHexString(); });
              curr2=colors[1].toHexString();
              curr3=colors[2].toHexString();
              if(color.id=='col2') {
              color.style.backgroundColor = curr1;
                  p2.textContent = curr1.toUpperCase();
              }
              if(color.id=='col3') {
              color.style.backgroundColor = curr2;
                  p3.textContent = curr2.toUpperCase();
              }
              if(color.id=='col4') {
              color.style.backgroundColor = curr3;
                  p4.textContent = curr3.toUpperCase();
              }
              if(color.id=='col5') {
              color.style.backgroundColor = "#ffffff";
                  p5.textContent = "";
              }
          }
      }
      else { //complementary
         if(color.id=='col1') {
              hexVal = randHex();
              curr1 = hexVal;
              color.style.backgroundColor = "#ffffff";
             p1.textContent = "";
          }
          else {
          let compl = tinycolor(curr1).complement().toHexString();
              curr2=compl;
              if(color.id=='col2') {
              color.style.backgroundColor = curr1;
                  p2.textContent = curr1.toUpperCase();
              }
              if(color.id=='col3') {
              color.style.backgroundColor = curr2;
                  p3.textContent = curr2.toUpperCase();
              }
              if(color.id=='col4') {
              color.style.backgroundColor = "#ffffff";
                  p4.textContent = "";
              }
              if(color.id=='col5') {
              color.style.backgroundColor = "#ffffff";
                  p5.textContent = "";
              }
          }
      }
  });
};
generate();

generate();

// Generate colors on click
document.querySelector(".btn").addEventListener("click", generate);