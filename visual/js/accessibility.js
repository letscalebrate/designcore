let backPicker = document.querySelector("#back-color");
let textPicker = document.querySelector("#text-color");
let text1, text2, mainBackground, quoteImg, quote, quoteMark;
let aal, aaal, aan, aaan;
/*
backPicker.addEventListener("input", updateFirst, false);
backPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
      console.log('hello');
  });
}
*/
var colorWell, colorWell2;
var defaultFont = "#000000";
var defaultBC = "#ffffff";
let rgb1 = "#ffffff";
let rgb2 = "#000000";
let currContrast = 21;
let rgbArr1 = [255,255,255];
let rgbArr2 = [0,0,0];
let aalarge = true;
let aaalarge = true;
let aanormal = true;
let aaanormal = true;

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#back-color");
  colorWell2 = document.querySelector("#text-color");
  text1 = document.querySelector("#text1");
  text2 = document.querySelector("#text2");
  quote = document.querySelector("#quote");
  quoteMark = document.querySelector("#quote-mark");
  mainBackground = document.querySelector("#accBody");
  colorWell.value = defaultBC;
  colorWell2.value = defaultFont;
  colorWell.addEventListener("input", updateBc, false);
  colorWell2.addEventListener("input", updateFont, false);
    aal = document.querySelector("#aal");
    aaal = document.querySelector("#aaal");
    aan = document.querySelector("#aan");
    aaan = document.querySelector("#aaan");
}

function updateBc(event) {
    text1.textContent = event.target.value.toUpperCase();
    mainBackground.style.backgroundColor = event.target.value;
    rgb1 = hexToRGB(event.target.value);
    rgbArr1 = rgb1.replace(/[^\d,]/g, '').split(',');
    currContrast = contrast(rgbArr1, rgbArr2);
    console.log(currContrast);
    checkRatio(currContrast);
    console.log(aalarge + " " + aaalarge + " " + aanormal + " " + aaanormal);
}

function updateFont(event) {
    text2.textContent = event.target.value.toUpperCase();
    quote.style.color = event.target.value;
    quoteMark.style.color = event.target.value;
    rgb2 = hexToRGB(event.target.value);
    rgbArr2 = rgb2.replace(/[^\d,]/g, '').split(',');
    currContrast = contrast(rgbArr1, rgbArr2);
    console.log(currContrast);
    checkRatio(currContrast);
}

function updateSrc() {
    if(aalarge) {aal.src = "../assets/visual/yes.png"}
    else {aal.src = "../assets/visual/no.png" }
    if(aaalarge) {aaal.src = "../assets/visual/yes.png"}
    else {aaal.src = "../assets/visual/no.png" }
    if(aanormal) {aan.src = "../assets/visual/yes.png"}
    else {aan.src = "../assets/visual/no.png" }
    if(aaanormal) {aaan.src = "../assets/visual/yes.png"}
    else {aaan.src = "../assets/visual/no.png" }
}

function checkRatio(ratio) {
    if(ratio<7.0) {
        aaanormal = false;
        if(ratio<4.5) {
            aanormal = false;
            aaalarge = false;
            if(ratio<3.0) {
                aalarge = false;
            }
            else {
                aalarge = true;
            }
        }
        else {
            aanormal = true;
            aaalarge = true;
        }
    }
    else {
        //7.0 or greater, its compliant with all of them
        aalarge = true;
        aaalarge = true;
        aanormal = true;
        aaanormal = true;
    }
    updateSrc();
}

//calculations for color contrast
//https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors
function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
    var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
    var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05)
         / (darkest + 0.05);
}
contrast([255, 255, 255], [255, 255, 0]); // 1.074 for yellow
contrast([255, 255, 255], [0, 0, 255]); // 8.592 for blue
// minimal recommended contrast ratio is 4.5, or 3 for larger font-sizes

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return "rgb("+ +r + "," + +g + "," + +b + ")";
}