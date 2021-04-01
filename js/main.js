//score of the two players
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function rollButton() {
  //random number for the dices
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  //remove the class attribute from the players dice
  let removeAttributeDice1 = document
    .getElementById("dice1")
    .removeAttribute("class");
  let removeAttributeDice2 = document
    .getElementById("dice2")
    .removeAttribute("class");

  //put the dice image for player 1
  switch (randomNumber1) {
    case 1:
      document
        .getElementById("dice1")
        .classList.add("fa", "fa-9x", "fa-dice-one");
      break;
    case 2:
      document
        .getElementById("dice1")
        .classList.add("fa", "fa-9x", "fa-dice-two");
      break;
    case 3:
      document
        .getElementById("dice1")
        .classList.add("fa", "fa-9x", "fa-dice-three");
      break;
    case 4:
      document
        .getElementById("dice1")
        .classList.add("fa", "fa-9x", "fa-dice-four");
      break;
    case 5:
      document
        .getElementById("dice1")
        .classList.add("fa", "fa-9x", "fa-dice-five");
      break;
    case 6:
      document
        .getElementById("dice1")
        .classList.add("fa", "fa-9x", "fa-dice-six");
      break;
  }

  //put the dice image for player 2
  switch (randomNumber2) {
    case 1:
      document
        .getElementById("dice2")
        .classList.add("fa", "fa-9x", "fa-dice-one");
      break;
    case 2:
      document
        .getElementById("dice2")
        .classList.add("fa", "fa-9x", "fa-dice-two");
      break;
    case 3:
      document
        .getElementById("dice2")
        .classList.add("fa", "fa-9x", "fa-dice-three");
      break;
    case 4:
      document
        .getElementById("dice2")
        .classList.add("fa", "fa-9x", "fa-dice-four");
      break;
    case 5:
      document
        .getElementById("dice2")
        .classList.add("fa", "fa-9x", "fa-dice-five");
      break;
    case 6:
      document
        .getElementById("dice2")
        .classList.add("fa", "fa-9x", "fa-dice-six");
      break;
  }

  //condition to determine who is the winner
  switch (true) {
    case randomNumber1 > randomNumber2:
      document.getElementById("winner").innerHTML = "Player 1 wins!";
      scorePlayer1++;
      document.getElementById("player1").innerHTML = `${scorePlayer1}`;
      break;
    case randomNumber1 < randomNumber2:
      document.getElementById("winner").innerHTML = "Player 2 wins!";
      scorePlayer2++;
      document.getElementById("player2").innerHTML = `${scorePlayer2}`;
      break;
    case randomNumber1 === randomNumber2:
      document.getElementById("winner").innerHTML = "It's a draw...";
      break;
  }
}

function resetButton() {
  //reset the score for both players
  scorePlayer1 = 0;
  document.getElementById("player1").innerHTML = `${scorePlayer1}`;
  scorePlayer2 = 0;
  document.getElementById("player2").innerHTML = `${scorePlayer2}`;

  //return the original text for h2
  document.getElementById("winner").innerHTML =
    "Roll the dices and see who will win.";
}
