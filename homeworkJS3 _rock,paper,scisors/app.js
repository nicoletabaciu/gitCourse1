var game = ["Rock","Paper","Scissors"];
console.log (game);
var computerOptionRandom = parseInt( (Math.random() * 10)%3);
console.log(computerOptionRandom);

var computerOption = game[computerOptionRandom];
console.log(computerOption);

const button = document.querySelector('#OnClick')
button.addEventListener('click', play)

var x = document.getElementById("computerChoice1")
var y = document.getElementById("userChoice1")
var a = 0;
var b = 0;


function play(){
    showComputerChoice();
    if(a == b){
        alert( "No winners");
    }
    else if(a == 0 && b == 1){
        alert("User wins!")
    }
    else if( a == 0 && b==2){
        alert("Computer wins!")
    }
    else if (a == 1 && b == 0){
        alert("Computer wins!")
    }
    else if ( a == 1 && b == 2){
        alert ("User wins!")
    }
    else if( a == 2 && b == 0){
        alert("User wins!")
    }
    else {
        alert("Computer wins!")
    }
    return;
}

function showComputerChoice() {
    var x1 = document.getElementById("computerChoice1")
    var x2 = document.getElementById("computerChoice2")
    var x3 = document.getElementById("computerChoice3")

    switch(computerOptionRandom){
        case 0: 
            x = x1;
            a = 0
            break;
        case 1: 
            x = x2;
            a = 1;
            break;
        case 2: 
            x = x2;
            a = 2;
            break;
        default:
            x = x1;
            a = 0;
            break;
    }
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
  }

function showUserChoice(optiune) {
    var y1 = document.getElementById("userChoice1")
    var y2 = document.getElementById("userChoice2")
    var y3 = document.getElementById("userChoice3")
  

    switch(optiune){
        case 0: 
            y = y1;
            b = 0;
            break;
        case 1: 
            y = y2;
            b = 1;
            break;
        case 2: 
            y = y3;
            b = 2;
            break;
        default:
            y = y1;
            b = 0;
            break;
    }
    if (y.style.display === "block") {
      y.style.display = "none";
    }
    else {
      y.style.display = "block";
    }
  }
  