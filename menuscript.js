let clicked = 0;
function openNav() {
            if(clicked==0) {
                console.log("clicked 1");
                clicked++;
                document.querySelector("#myNav").style.width = "100%";
            }
            else {
                console.log(clicked);
                console.log("hello we are clicked");
                closeNav();
            }
        }
        function closeNav() {
            clicked = 0;
            document.querySelector("#myNav").style.width = "0%";
        }