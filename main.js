var mouseEvent="empty";
var lastpositionx,lastpositiony;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="red";
widthofline=3;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
currentpositionx=e.clientX-canvas.offsetLeft;
currentpositiony=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.moveTo(lastpositionx,lastpositiony);
    ctx.lineTo(currentpositionx,currentpositiony);
    ctx.stroke();
}
lastpositionx=currentpositionx;
lastpositiony=currentpositiony;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
}