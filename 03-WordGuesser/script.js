// Create a word guesser game
// There are 6 boxes containing 6 scattered letter for a full 6 letter word
// The letters are hidden within the boxes
// Player will have a limit of revealing 3 of the 6 letters to give them the clue on the word they need to guess

//constant variables
const buttonContainer = document.getElementById("letter-container");
const submit = document.getElementById("submit");
const answerBox = document.getElementById("answer");
const words = ["father", "develop", "website", "software", "coffee"];
//variables
let message = document.getElementById("message");
let button;
let buttons;
let revealCount = 0;
let count = 0;

//generate buttons based on the letter length
function generateLetterButtons(word) {
  for (let i = 0; i < word.length; i++) {
    button = document.createElement("button");
    button.setAttribute("id", "letter-" + (i + 1));
    button.textContent = "?";
    buttonContainer.appendChild(button);
  }
  buttons = buttonContainer.querySelectorAll("button");
  buttonContainer.classList.add("bounce-in");
  setTimeout(() => {
    buttonContainer.classList.remove("bounce-in");
  }, 1000);
}

//display letter on clicked button
function displayLetter(word) {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (revealCount >= 3) {
        return;
      }
      button.textContent = word.charAt(index);
      button.classList.add("flip");
      revealCount++;
    });
  });
}

//go to the next word
function nextWord() {
  message.textContent = "You got it correct";
  revealCount = 0;
  answerBox.value = "";
  setTimeout(() => {
    message.textContent = "";
    buttonContainer.replaceChildren();
    start(words[count]);
  }, 1000);
}

//restart game
function restart() {
  message.textContent = "Thank you for playing";
  revealCount = 0;
  answerBox.value = "";
  setTimeout(() => {
    message.textContent = "";
    buttonContainer.replaceChildren();
    buttonContainer.textContent = "Thank you for playing.";
  }, 1000);
}

//submit answer
function submitAnswer(correctAnswer) {
  submit.addEventListener("click", () => {
    let userAnswer = answerBox.value.toLowerCase();
    if (userAnswer == correctAnswer) {
      count = count + 1;
      if (words.indexOf(correctAnswer) == words.length - 1) {
        count = 0;
        restart();
      }
      nextWord();
    } else {
      message.textContent =
        "Wrong answer, Hint: it ends with ..." +
        correctAnswer.slice(correctAnswer.length - 2, correctAnswer.length);
    }
  });
}

//start function
function start(word) {
  generateLetterButtons(word);
  displayLetter(word);
  submitAnswer(word);
}

//main function
function main() {
  start(words[count]);
}
main();
