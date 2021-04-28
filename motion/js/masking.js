let blue = document.querySelector("#blue");
let per1 = 21;
let per2 = 3;
let per3 = 78;
let per4 = 3;
let per5 = 78;
let per6 = 95;
let per7 = 21;
let per8 = 94;

var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        rect = {},
        poly ={},
        drag = false,
        mouseX,
        mouseY,
        closeEnough = 7,
        dragTL = dragBL = dragTR = dragBR = false;

    function init() {
        canvas.addEventListener('mousedown', mouseDown, false);
        canvas.addEventListener('mouseup', mouseUp, false);
        canvas.addEventListener('mousemove', mouseMove, false);

        rect = {
            startX: 160,
            startY: 50,
            w: 425, 
            h: 650
        }
    }

    function mouseDown(e) {
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop;

        // if there isn't a rect yet
        if (rect.w === undefined) {
            rect.startX = mouseY;
            rect.startY = mouseX;
            dragBR = true;
        }

        // if there is, check which corner (if any) was clicked
        // 1. top left
        else if (checkCloseEnough(mouseX, rect.startX) && checkCloseEnough(mouseY, rect.startY)) {
            dragTL = true;
        }
        // 2. top right
        else if (checkCloseEnough(mouseX, rect.startX + rect.w) && checkCloseEnough(mouseY, rect.startY)) {
            dragTR = true;

        }
        // 3. bottom left
        else if (checkCloseEnough(mouseX, rect.startX) && checkCloseEnough(mouseY, rect.startY + rect.h)) {
            dragBL = true;

        }
        // 4. bottom right
        else if (checkCloseEnough(mouseX, rect.startX + rect.w) && checkCloseEnough(mouseY, rect.startY + rect.h)) {
            dragBR = true;

        }
        // (5.) none of them
        else {
            // handle not resizing
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();

    }

    function checkCloseEnough(p1, p2) {
        return Math.abs(p1 - p2) < closeEnough;
    }

    function mouseUp() {
        dragTL = dragTR = dragBL = dragBR = false;
    }

    function mouseMove(e) {
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop;
        if (dragTL) {
            rect.w += rect.startX - mouseX;
            rect.h += rect.startY - mouseY;
            rect.startX = mouseX;
            rect.startY = mouseY;
            let divX = Math.floor((mouseX / 740) * 100);
            let divY = Math.floor((mouseY / 740) * 100);
            per1 = divX;
            per2 = divY;
            per4 = divY;
            per7 = divX;
        } else if (dragTR) {
            rect.w = Math.abs(rect.startX - mouseX);
            rect.h += rect.startY - mouseY;
            rect.startY = mouseY;
            let divX = Math.floor((mouseX / 740) * 100);
            let divY = Math.floor((mouseY / 740) * 100);
            per3 = divX;
            per4 = divY;
            per5 = divX;
            per2 = divY;
        } else if (dragBL) {
            rect.w += rect.startX - mouseX;
            rect.h = Math.abs(rect.startY - mouseY);
            rect.startX = mouseX;
            let divX = Math.floor((mouseX / 740) * 100);
            let divY = Math.floor((mouseY / 740) * 100);
            per7 = divX;
            per8 = divY;
            per6 = divY;
            per1 = divX;
        } else if (dragBR) {
            rect.w = Math.abs(rect.startX - mouseX);
            rect.h = Math.abs(rect.startY - mouseY);
            let divX = Math.floor((mouseX / 740) * 100);
            let divY = Math.floor((mouseY / 740) * 100);
            per5 = divX;
            per6 = divY;
            per8 = divY;
            per3 = divX;
        }
        blue.style.clipPath = "polygon(" + per1 + "% " + per2 + "%, " + per3 + "% " + per4 + "%, " + per5 + "% " + per6 + "%, " + per7 + "% " + per8 + "%)";
        //console.log("polygon(" + per1 + "% " + per2 + "%, " + per3 + "% " + per4 + "%, " + per5 + "% " + per6 + "%, " + per7 + "% " + per8 + "%)");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();
    }

    function draw() {
        ctx.strokeStyle = "#EACCD6";
        ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
        drawHandles();
    }
   
function drawCircle(x, y, radius) {
    ctx.fillStyle = "#EACCD6";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function drawHandles() {
    drawCircle(rect.startX, rect.startY, closeEnough);
    drawCircle(rect.startX + rect.w, rect.startY, closeEnough);
    drawCircle(rect.startX + rect.w, rect.startY + rect.h, closeEnough);
    drawCircle(rect.startX, rect.startY + rect.h, closeEnough);
}

init();