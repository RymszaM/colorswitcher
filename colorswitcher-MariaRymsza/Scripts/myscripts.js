"use strict";
//Color Palette used: https://coolors.co/05668d-443742-709255

//create click event and add function to button1
document.getElementsByTagName("button")[0].onclick = changeBlue;
function changeBlue() {
document.getElementsByTagName("body")[0].style.backgroundColor = "#05668d";
}

//create click event and add function to button2
document.getElementsByTagName("button")[1].onclick = changeBlack;
function changeBlack() {
document.getElementsByTagName("body")[0].style.backgroundColor = "#443742";
}

//create click event and add function to button3
document.getElementsByTagName("button")[2].onclick = changeGreen;
function changeGreen() {
document.getElementsByTagName("body")[0].style.backgroundColor = "#709255";
}

//create click event and add function to button4
document.getElementsByTagName("button")[3].onclick = changeReset;
function changeReset() {
document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFFFF";
}