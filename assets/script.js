
const color = [
    "blue", //#88C4D7
    "yellow", //#EEE8AB
    "orange", //#EA915E
    "red", //#FF6962
    "green", //#85B464
    "white", //#F4F4F4
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
var stockBest = 0;
function promptMe(){
    colorChoice = prompt("Choice your color");
    setBackGround = event.target;
    if(colorChoice === "red") 
        setBackGround.setAttribute("style", "background-color: #FF6962");
    if(colorChoice === "blue")
        setBackGround.setAttribute("style", "background-color: #88C4D7");
    if(colorChoice === "green")
        setBackGround.setAttribute("style", "background-color: #85B464");
    if(colorChoice === "yellow")
        setBackGround.setAttribute("style", "background-color: #EEE8AB");
    if(colorChoice === "orange")
        setBackGround.setAttribute("style", "background-color: #EA915E");
    if(colorChoice === "white")
        setBackGround.setAttribute("style", "background-color: #F4F4F4");
    event.target.disabled = "true";
    stockPrompt++;
    // console.log("prompt= " + stockPrompt);
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
    if(stockPrompt === 4) {
        stockBest = stockGoodColor;
        stockPrompt = 0;
        stockGoodColor = 0;
        document.getElementById("textP").innerHTML = "Best find: " + stockBest;
    }
    if(stockBest === 4) {
        document.getElementById("colorGood").innerHTML = "";
        document.getElementById("textP").innerHTML = "";
        document.getElementById("winner").innerHTML = "You find the color, you Win";
    }
    // console.log(stockGoodColor);
    document.getElementById("colorGood").innerHTML = "Good color: " + stockGoodColor;
}

// console.log(randomNumber);
// console.log(randomColor);
console.log(colorOne);
console.log(colorTwo);
console.log(colorTree);
console.log(colorFour);