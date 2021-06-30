
const color = [
    "blue",
    "yellow",
    "orange",
    "red",
    "green",
    "white",
]

// var randomNumber = Math.floor(Math.random() * 6);
// var randomColor = color[randomNumber];
for(var i = 0; i < 7; i++) {
    var colorOne = color[Math.floor(Math.random() * 6)];
    var colorTwo = color[Math.floor(Math.random() * 6)];
    var colorTree = color[Math.floor(Math.random() * 6)];
    var colorFour = color[Math.floor(Math.random() * 6)];
}
for(var a = 1; a < 13; a++) {
    let divSquare = document.createElement("div");
    divSquare.setAttribute("class", "squareFlex");
    divSquare.setAttribute("id", "square" + a);
    document.getElementById("stockSquare").appendChild(divSquare);
}
for(var b = 1; b < 13; b++) {
    for(var a = 1; a < 5; a++) {
        let sqBox = document.createElement("button");
        sqBox.setAttribute("class", "box");
        sqBox.setAttribute("onclick", "promptMe()");
        // sqBox.innerHTML= a;
        document.getElementById("square" + b).appendChild(sqBox);
    }
}
const buttons =  document.querySelectorAll(".box")
buttons.forEach((btn) => {
    btn.addEventListener("click", checkColorTrue)
});
var coloChoice;
let stockPrompt = 0;
var stockGoodColor = 0;
function promptMe(){
    colorChoice = prompt("Choice your color");
    setBackGround = event.target;
    setBackGround.setAttribute("style", "background-color:" + colorChoice);
    event.target.disabled = "true";
    stockPrompt++;
    // console.log(stockPrompt);
}
function checkColorTrue() {
    if(colorChoice === colorOne) {
        stockGoodColor++;
    }
    else if(colorChoice === colorTwo) {
        stockGoodColor++;
    }
    else if(colorChoice === colorTree) {
        stockGoodColor++;
    }
    else if(colorChoice === colorFour) {
        stockGoodColor++;
    }
    else if(stockPrompt === 4) {
        stockGoodColor = 0;
        document.getElementById("testo").innerHTML = "Good color: " + stockGoodColor;
    }
    console.log(stockGoodColor);
    document.getElementById("testo").innerHTML = "Good color: " + stockGoodColor;
}

// function createText() {
//     let testP = document.createElement("p");
//     testP.setAttribute("class", "testP");
//     testP.setAttribute("id", "testo" + a);
//     testP.innerHTML = stockGoodColor;
//     document.getElementById("square1").appendChild(testP);
// }
// console.log(randomNumber);
// console.log(randomColor);
console.log(colorOne);
console.log(colorTwo);
console.log(colorTree);
console.log(colorFour);