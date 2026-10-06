let bodyColor = document.getElementById("body");
let container = document.getElementById("container");
let heading = document.getElementById("heading");
let Paraghrap = document.getElementById("para");

let redBtn = document.getElementById("btn-red");
let blueBtn = document.getElementById("btn-blue");
let greenBtn = document.getElementById("btn-green");
let darkBtn = document.getElementById("btn-dark");

redBtn.addEventListener("click", function () {
    bodyColor.style.background = "red";
    redBtn.style.background = "red";
    redBtn.style.color = "white";
    container.style.background = "#f14141";
    heading.style.color = "#350909";
    Paraghrap.style.color = "#350909";
});

blueBtn.addEventListener("click", function(){
    blueBtn.style.background = "blue";
    blueBtn.style.color = "white";

    bodyColor.style.background = "blue";
    
    container.style.background = "#4150f1";
    heading.style.color = "#d1ceff";
    heading.style.textShadow = "0 10px 20px #59595a";
    Paraghrap.style.color = "#edbbbb";
});

greenBtn.addEventListener("click", function(){
    greenBtn.style.background = "green";
    greenBtn.style.color = "white";

    bodyColor.style.background = "green";

    container.style.background = "#41f15b";
    heading.style.color = "white";
    heading.style.textShadow = "0 10px 20px #59595a";
    Paraghrap.style.color = "#06240c";
});

darkBtn.addEventListener("click", function() {
    darkBtn.style.background = "#0f172a";
    darkBtn.style.color = "white";

    bodyColor.style.background = "#0f172a";

    container.style.background = "white";
    heading.style.color = "black";
    heading.style.textShadow = "0 10px 20px #59595a";
    Paraghrap.style.color = "#06240c";
});