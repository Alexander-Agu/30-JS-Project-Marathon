//constant variables
const display = document.getElementById("display");
const messageDisplay = document.getElementById("prediction");
const calculatorButtons = document.getElementById("calculator-btns");
const buttons = calculatorButtons.querySelectorAll("button");

//calculate function
function calculate() {
  if (display.value == "") {
    messageDisplay.value = "Enter values to evaluate";
    setTimeout(() => {
      messageDisplay.value = "Calculator";
    }, 2000);
    return;
  }
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "error";
  }
  console.log(display.value);
}

//add button value for each button clicked
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value == "ac") {
      display.value = "";
      return;
    }
    if (button.value == "=") {
      calculate();
      return;
    }
    display.value = display.value + button.value;
  });
});
