// import Typed from 'typed.js';

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    // strings: [
    //     '1TYPOGRAPHY',
    //     '2TYPOGRAPHY',
    //     '3TYPOGRAPHY',
    //     '4TYPOGRAPHY'
    // ],
    // stringsElement: null,
    smartBackspace: false,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 700,
    loop: true,

    preStringTyped: (arrayPos, self) => {
        // console.log(arrayPos);
        // console.log(self);
        // console.log(self.stringsElement.children[arrayPos].dataset.font);
        let fontID = self.stringsElement.children[arrayPos].dataset.font;
        let fontLink = self.stringsElement.children[arrayPos].dataset.fontlink;
        // console.log(self.stringsElement.children[arrayPos].dataset.fontlink);
        // let wordVal = self.strings[arrayPos].slice(1);
        // self.strings[arrayPos] = wordVal;
        // console.log(self.strings[arrayPos]);
        let word = document.getElementById("typed")
        // console.log(word);

        word.style.fontFamily = fontID;
        
        word.addEventListener("click", function(){
            window.open(
                fontLink, "_blank");
        })
    },
  });

