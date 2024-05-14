// Create a word guesser game
// There are 6 boxes containing 6 scaterd letter for a full 6 letter word
// The letters are hidden within the boxes
// Player will have a limit of revealing 4 of the 6 letters to give them the clue on the word they need to guess


// programming the buttons to reveal the letters once clicked
// A max of 4 buttons can be clicked
function revealLetters() {
    let buttonClicked = 0;

    function displayLetter(buttonId, letter) {
        document.getElementById(buttonId).textContent = letter;
    }

    function handleButtonClick(buttonId, letter) {
        document.getElementById(buttonId).onclick = function () {
            if (buttonClicked < 4) {
                displayLetter(buttonId, letter);
                buttonClicked++;
                console.log(buttonClicked);
                if (buttonClicked >= 3) {
                    console.log("Max clicks reached");
                }
            } else {
                console.log("Max clicks reached");
            }
        };
    }


    const buttons = [
        { id: "btn-1", letter: "E" },
        { id: "btn-2", letter: "T" },
        { id: "btn-3", letter: "H" },
        { id: "btn-4", letter: "A" },
        { id: "btn-5", letter: "R" },
        { id: "btn-6", letter: "F" }
    ];

    // Attach click handlers to buttons
    buttons.forEach(button => {
        handleButtonClick(button.id, button.letter);
    });
}

revealLetters();

// Using the revealed letters you must get the correct answer and submit it
let answer = "";
document.getElementById("submit").onclick = function(){
    answer = "father"
    answer = answer.toLocaleUpperCase();

    let userAnswer = document.getElementById("answer").value;
    userAnswer = userAnswer.toLocaleUpperCase();

    if(userAnswer == answer){
        document.getElementById("results").textContent = `You got it corrects`
    } else{
        document.getElementById("results").textContent = `HINT: Its something black kids dont have from the moments they are born`
    }
}