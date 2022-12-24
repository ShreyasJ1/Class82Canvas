canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseevent = "empty";
var lastpositionofx, lastpositionofy;
var colour = "black";
var width_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    colour = document.getElementById("colour").value;
    width_line = document.getElementById("width_of_line").value;
    mouseevent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseevent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentpositionofmousex = e.clientX - canvas.offsetLeft;
    currentpositionofmousey = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") 
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_line;
        console.log("last position of x and y coordinates are ");
        console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
        ctx.moveTo(lastpositionofx, lastpositionofy);
        console.log("current positon of x and y coordinates = ");
        console.log("x = " + currentpositionofmousex + "y = " + currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex, currentpositionofmousey);
        ctx.stroke();
    }
    lastpositionofx = currentpositionofmousex;
    lastpositionofy = currentpositionofmousey;
}
function cleararea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}