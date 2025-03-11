function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, symbol) {
  if (symbol === "+") {
    return add(a, b);
  } else if (symbol === "-") {
    return subtract(a, b);
  } else if (symbol === "*") {
    return multiply(a, b);
  } else if (symbol === "/") {
    return divide(a, b);
  }
}

const displayText = document.querySelector(".display p");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const buttons = document.querySelectorAll(".bottom-buttons button");

clearButton.addEventListener("click", () => {
  displayText.textContent = "0";
});

deleteButton.addEventListener("click", () => {
  if (displayText.textContent !== "0") {
    len = displayText.textContent.length;
    displayText.textContent = displayText.textContent.slice(0, len - 1);
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (displayText.textContent === "0") {
      if (event.target.innerText !== "0") {
        displayText.textContent = "" + event.target.innerText;
      }
    } else {
      displayText.textContent += event.target.innerText;
    }
  });
});
