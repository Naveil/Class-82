var mouseevent="";
var lastx;
var lasty;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color="red";
var width=2;
canvas.addEventListener("mousedown", mousedown);
function mousedown(e){
    mouseevent="mousedown";
}

canvas.addEventListener("mousemove", mousemove);
function mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

    if(mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastx, lasty);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
    }
    lastx = currentx;
    lasty = currenty;
}
canvas.addEventListener("mouseleave", mouseleave);
function mouseleave(e){
    mouseevent = "mouseleave";
}
canvas.addEventListener("mouseup", mouseup);
function mouseup(e){
    mouseevent = "mouseup";
}
