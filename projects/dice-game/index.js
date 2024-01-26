// function
const randNum = () => Math.floor(Math.random() * 5 + 1);
const getDiceHtml = (num, playerNum) =>
  `<img class="img${playerNum}" src="images/dice${num}.png"></img>`;

// global
const titleElement = document.getElementsByTagName("h1")[0];
const flag = "🚩";

// player 1's number
const p1Num = randNum();

// player 2's number
const p2Num = randNum();

document.querySelector(".container .img1").outerHTML = getDiceHtml(p1Num, 1);
document.querySelector(".container .img2").outerHTML = getDiceHtml(p2Num, 2);

if (p1Num > p2Num) titleElement.innerHTML = `${flag} Player 1 Win!`;
else if (p1Num < p2Num) titleElement.innerHTML = `Player 2 Win! ${flag}`;
else titleElement.innerHTML = `${flag} Draw! ${flag}`;
