// variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// event listener for button click with callback funciton to change colour
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  console.log(hexColor);
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// generate random number between 0 & hex array length
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
