import PenTool from './pentool.esm.js'

// let pen = new PenTool("canvas")
// document.getElementById("btn").addEventListener("click", () => {
//     pen.enablePen();
// })

let canvas3 = document.createElement("canvas3")
let ctx3 = canvas1.getContext("2d")
let image = new Image();
image.src = "../assets/visual/pentool_bg.png";
image.onload = () => {
    let pattern = ctx3.createPattern(image, 'repeat')
    let heart = new PenTool("canvas3", {
        pathFillColor: pattern,
        isFillPath: true,
        closeState: true,
        pathColor: 'transparent'
    }, [{"pointType":"straight","type":"M","point":{"x":699,"y":245},"relationPoints":[699,245,730,189],"keyPointIndex":0},{"pointType":"mirrored","type":"C","point":{"x":552,"y":161},"relationPoints":[699,245,644,146,552,161],"keyPointIndex":1,"controller1":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":644,"y":146,"keyPointIndex":1,"handleName":"handleA","type":"circle","index":17},"controller2":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":460,"y":176,"keyPointIndex":1,"handleName":"handleB","type":"circle","index":13},"auxLine1":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":644,"y1":146,"x2":552,"y2":161,"type":"line","index":1},"auxLine2":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":460,"y1":176,"x2":552,"y2":161,"type":"line","index":2}},{"pointType":"mirrored","type":"C","point":{"x":475,"y":336},"relationPoints":[460,176,440,262,475,336],"keyPointIndex":2,"controller1":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":440,"y":262,"keyPointIndex":2,"handleName":"handleA","type":"circle","index":19},"controller2":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":510,"y":410,"keyPointIndex":2,"handleName":"handleB","type":"circle","index":14},"auxLine1":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":440,"y1":262,"x2":475,"y2":336,"type":"line","index":3},"auxLine2":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":510,"y1":410,"x2":475,"y2":336,"type":"line","index":4}},{"pointType":"straight","type":"C","point":{"x":709,"y":534},"relationPoints":[510,410,709,534,709,534],"keyPointIndex":3},{"pointType":"mirrored","type":"C","point":{"x":908,"y":345},"relationPoints":[709,534,868,404,908,345],"keyPointIndex":4,"controller1":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":868,"y":404,"keyPointIndex":4,"handleName":"handleA","type":"circle","index":15},"controller2":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":948,"y":286,"keyPointIndex":4,"handleName":"handleB","type":"circle","index":12},"auxLine1":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":868,"y1":404,"x2":908,"y2":345,"type":"line","index":5},"auxLine2":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":948,"y1":286,"x2":908,"y2":345,"type":"line","index":6}},{"pointType":"disjointed","type":"C","point":{"x":839,"y":155},"relationPoints":[948,286,952,165,839,155],"keyPointIndex":5,"controller1":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":952,"y":165,"keyPointIndex":5,"handleName":"handleA","type":"circle","index":20},"controller2":{"penType":"penAux","stroke":"#006cff","fill":"#fff","lineWidth":1,"radius":3,"x":737,"y":138,"keyPointIndex":5,"handleName":"handleB","type":"circle","index":18},"auxLine1":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":952,"y1":165,"x2":839,"y2":155,"type":"line","index":7},"auxLine2":{"penType":"penAux","stroke":"#ff56b1","fill":"#fff","lineWidth":1,"x1":737,"y1":138,"x2":839,"y2":155,"type":"line","index":8}}]);


}