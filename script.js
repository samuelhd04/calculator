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
  } else if (symbol === "x") {
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
  displayText.textContent = "";
});

deleteButton.addEventListener("click", () => {
  if (displayText.textContent !== "") {
    let len = displayText.textContent.length;
    displayText.textContent = displayText.textContent.slice(0, len - 1);
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerText !== "=") {
      displayText.textContent += event.target.innerText;
    } else {
      for (i = 0; i < displayText.textContent.length; i++) {
        if (
          (displayText.textContent[i] === "+" ||
            displayText.textContent[i] === "-" ||
            displayText.textContent[i] === "x" ||
            displayText.textContent[i] === "/") &&
          displayText.textContent.length > 2
        ) {
          let len = displayText.textContent.length;
          let a = displayText.textContent.slice(0, i);
          let b = displayText.textContent.slice(i + 1, len);
          let symbol = displayText.textContent[i];

          if (symbol === "/" && b === "0") {
            displayText.textContent = "Error";
          } else {
            a = parseFloat(a);
            b = parseFloat(b);
            displayText.textContent = operate(a, b, symbol).toFixed(1);
          }

          break;
        }
      }
    }
  });
});
