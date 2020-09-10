var colorPicker1 = document.getElementById("colorPicker1");
var colorPicker2 = document.getElementById("colorPicker2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var btnRandom = document.getElementById("random");

setGradient();

colorPicker1.addEventListener("input", setGradient);

colorPicker2.addEventListener("input", setGradient);

 function setGradient(){
    body.style.background =
      "linear-gradient(to right, "
      + colorPicker1.value
      + ", "
      + colorPicker2.value
      + ")";
      css.textContent = body.style.background + ";";
 }




btnRandom.addEventListener("click", function(){

    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

    console.log(randomColor1);

    body.style.background =
      "linear-gradient(to right, "
      + "#" +randomColor1
      + ", "
      + "#" +randomColor2
      + ")";
      css.textContent = body.style.background + ";";

})


var a = 9;

a === 5 ? console.log("Richtig") : console.log("Falsch");

var a = prompt("Bitte eine Zahl eingeben");
var b = Number(a);

switch(b){

    case 1: console.log("Eins");
    break;

    case 2: console.log("Zwei");
    break;

    case 3: console.log("Drei");
    break;

    case 4: console.log("Vier");
    break;

    default: console.log("irgendeine Zahl");
}

 