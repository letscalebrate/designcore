// GLobal Variables
let colors = document.querySelectorAll(".color");
let palette = document.querySelector(".palette");
let hex = "abcdef123456789";


// Generate random hex

let randHex = () => {
  let hexString = "#";
  for (let i = 0; i < 6; i++) {
    hexString += hex[Math.round(Math.random() * 6)];
  }

  return hexString;
};

const copyToClipboard = (str) => {
  let el = document.querySelector("textarea");
  el.value = str;
  el.select();
  el.setSelectionRange(0, 99999);

  document.execCommand("copy");
};

// generate colors
let generate = () => {
  colors.forEach((color) => {
    color.style.backgroundColor = randHex();
  });
};
generate();

// Generate colors on click
document.querySelector(".btn").addEventListener("click", generate);

palette.addEventListener("click", (e) => {
  if (e.target.classList.contains("color")) {
    let color = e.target;
    copyToClipboard(window.getComputedStyle(color).backgroundColor);
    document.querySelector(".notification").classList.remove("close");
    setTimeout(() => {
      document.querySelector(".notification").classList.add("close");
    }, 1800);
  }
});