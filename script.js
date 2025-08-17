// Game variables
const bnhChoices = ["Bear", "Ninja", "Human"];
const oracleResponses = [
  "Yes", "No", "Definitely", "Ask again", "Unclear", "Absolutely", "Never", "Possibly"
];

// Game 1: Declaration Function
function playBNH() {
  let playing = true;
  while (playing) {
    let player = prompt("Choose Bear, Ninja, or Human:");
    if (!player || !bnhChoices.includes(player)) {
      alert("Invalid input. Try again.");
      continue;
    }

    let computer = bnhChoices[Math.floor(Math.random() * bnhChoices.length)];
    let result = "";

    if (player === computer) {
      result = `Tie! You both chose ${player}.`;
    } else if (
      (player === "Bear" && computer === "Human") ||
      (player === "Human" && computer === "Ninja") ||
      (player === "Ninja" && computer === "Bear")
    ) {
      result = `You win! ${player} beats ${computer}.`;
    } else {
      result = `Computer wins! ${computer} beats ${player}.`;
    }

    alert(result);
    playing = keepPlaying();
  }

  handleEndOfGame();
}

// Game 2: Expression Function
const magicEightBall = function () {
  let playing = true;
  while (playing) {
    let question = prompt("Ask the Oracle a yes/no question:");
    if (!question) {
      alert("You must ask something!");
      continue;
    }

    let answer = oracleResponses[Math.floor(Math.random() * oracleResponses.length)];
    alert(`The Oracle says: ${answer}`);

    playing = keepPlaying();
  }

  handleEndOfGame();
};

// Game 3: Arrow Function
const guessNumber = () => {
  let playing = true;
  while (playing) {
    let target = Math.floor(Math.random() * 10) + 1;
    let guess = prompt("Guess a number between 1 and 10:");

    if (!guess || isNaN(guess)) {
      alert("Invalid input. Enter a number.");
      continue;
    }

    guess = parseInt(guess);
    let result = guess === target
      ? "Correct! You guessed the number."
      : `Wrong! The number was ${target}.`;

    alert(result);
    playing = keepPlaying();
  }

  handleEndOfGame();
};

// End session and show farewell
function endSession() {
  document.getElementById("farewell").classList.remove("d-none");
}

function keepPlaying() {
  return prompt("Would you like to keep playing this game? y/n") === "y" ? true : false;
}
function handleEndOfGame() {
  prompt("Would you like to pick another game to play? y/n") === "y"
    ? null
    : endSession();
}
