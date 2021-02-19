var mouseEvent= "empty";
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="purple";
width=3;
radius=5;
canvas.addEventListener("mousedown",myMousedown);

function myMousedown(e){
color= document.getElementById("color").value;
width= document.getElementById("width").value;
radius= document.getElementById("radius").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",myMousemove);

function myMousemove(e){
position_mouseX= e.clientX - canvas.offsetLeft;
position_mouseY= e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown"){
console.log("Current position of X & Y coordinates= "+" X="+position_mouseX+" Y="+position_mouseY);
}

if (mouseEvent=="mouseDown"){
console.log("Current position of X & Y coordinates= "+" X="+position_mouseX+" Y="+position_mouseY);
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= width;

ctx.arc(position_mouseX,position_mouseY,radius,0,2*Math.PI);
ctx.stroke();
}
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave",myMouseleave);
function myMouseleave(e){
mouseEvent = "mouseleave";
}
function clear_page(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}