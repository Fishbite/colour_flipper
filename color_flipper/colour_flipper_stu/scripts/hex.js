const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colour = document.getElementById("colour");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const randomNum = getRandomNum();
    hex += values[randomNum];
  }
  document.body.style.backgroundColor = hex;
  colour.textContent = hex;
  console.log(hex);
});

function getRandomNum() {
  return Math.floor(Math.random() * values.length);
}
