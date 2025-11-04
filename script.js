let userScore = 0;
let compScore = 0;
let userName = "Користувач";

const userNum = document.getElementById("userNum");
const compNum = document.getElementById("compNum");
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const btn = document.getElementById("generateBtn");
const userLabel = document.getElementById("userLabel");

const modal = document.getElementById("nameModal");
const saveNameBtn = document.getElementById("saveNameBtn");
const userNameInput = document.getElementById("userNameInput");

window.onload = () => {
  modal.style.display = "flex";
};

saveNameBtn.onclick = () => {
  const inputName = userNameInput.value.trim();
  if (inputName !== "") {
    userName = inputName;
    userLabel.textContent = userName;
    modal.style.display = "none";
  } else {
    alert("Будь ласка, введіть своє ім’я!");
  }
};

btn.onclick = () => {
  const user = Math.floor(Math.random() * 10) + 1;
  const comp = Math.floor(Math.random() * 10) + 1;

  userNum.textContent = user;
  compNum.textContent = comp;

  if (user > comp) userScore++;
  else if (comp > user) compScore++;

  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;

  if (userScore === 3 || compScore === 3) {
    btn.disabled = true;
    btn.style.background = "gray";
    alert((userScore === 3 ? userName : "Комп'ютер") + " переміг!");
  }
};
