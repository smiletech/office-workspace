// Using typeof

const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const screen = document.querySelector(".screen");

function addNumbers(a, b) {
  if (typeof a === Number && typeof b === Number) screen.innerHTML = a + b;
  else screen.innerHTML = parseInt(a) + parseInt(b);
}

button.addEventListener("click", () =>
  addNumbers(firstInput.value, secondInput.value)
);
