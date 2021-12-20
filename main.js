



// Prevent animation on load
setTimeout(() => {
  document.body.classList.remove("preload");
}, 500);

setTimeout(() => {
  document.body.classList.remove("preload");
}, 500);

// DOM


const CHOICES = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "rock",
    beats: "scissors",
  },
];


//document element 
const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");

const scoreNumber = document.querySelector(".score__number");
let score = 0;
function isWinner(results) {
  return results[0].beats === results[1].name;
}

function keepScore(point) {
  score += point;
  scoreNumber.innerText = score;
}
// Game Logic
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function choose(choice) {
  const aichoice = computerChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

function computerChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}


const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");




const scoreNumber = document.querySelector(".score__number");
let score = 0;

// Game Logic
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function choose(choice) {
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}




