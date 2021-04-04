// array of colours
const colours = ["red", "green", "blue", "rgba(125, 0, 125, 0.75)", "#ffff00"];

//const colour = document.querySelector(".colour");
const colour = document.getElementById("colour");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNum();
  document.body.style.backgroundColor = colours[randomNumber];
  colour.textContent = colours[randomNumber];
  console.log(randomNumber);
});

function getRandomNum() {
  return Math.floor(Math.random() * colours.length);
}
