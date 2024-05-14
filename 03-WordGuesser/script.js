// Create a word guesser game
// There are 6 boxes containing 6 scaterd letter for a full 6 letter word
// The letters are hidden within the boxes
// Player will have a limit of revealing 3 of the 6 letters to give them the clue on the word they need to guess

// programming the buttons to reveal the letters once clicked
let buttonClicked = 0;

function revealLetters(){

    function clickCounter(){
        buttonClicked++;
        console.log(buttonClicked)
        if(buttonClicked === 3){
            console.log("stop")
        }
    }

    function revealedLetters(){
        let btn1 = document.getElementById("btn-1").onclick = function(){
            document.getElementById("btn-1").textContent = "E";
            clickCounter()
        };
        let btn2 = document.getElementById("btn-2").onclick = function(){
            document.getElementById("btn-2").textContent = "T";
            clickCounter()
        };
        let btn3 = document.getElementById("btn-3").onclick = function(){
            document.getElementById("btn-3").textContent = "H";
            clickCounter()
        };
        let btn4 = document.getElementById("btn-4").onclick = function(){
            document.getElementById("btn-4").textContent = "A";
            clickCounter()
        };
        let btn5 = document.getElementById("btn-5").onclick = function(){
            document.getElementById("btn-5").textContent = "R";
            clickCounter()
        };
        let btn6 = document.getElementById("btn-6").onclick = function(){
            document.getElementById("btn-6").textContent = "F";
            clickCounter()
        };
    }

    revealedLetters()





}

revealLetters()



