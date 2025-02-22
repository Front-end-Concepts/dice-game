function playGame() {
  var number1 = Math.floor(Math.random() * 6) + 1;
  var number2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", `images/dice${number1}.png`);
  console.log(number1);

  document
    .querySelector(".img2")
    .setAttribute("src", `images/dice${number2}.png`);

  if (number1 === number2) {
    document.querySelector("h1").textContent = "Draw";
  } else if (number1 > number2) {
    document.querySelector("h1").textContent = "Player 1 Wins";
  } else {
    document.querySelector("h1").textContent = "Player 2 Wins";
  }
}

const play_btn = document.querySelector("button");

play_btn.addEventListener("click", function () {
  playGame();
});
