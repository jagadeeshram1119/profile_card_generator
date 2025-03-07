var card = document.getElementById("card");
var btn = document.getElementById("generatorbtn");

function generator() {
  var cardIteam = document.createElement("div");
  cardIteam.className = "carditeam";
  var cardImg = document.createElement("img");
  cardImg.className = "cardimg";
  cardImg.src = "https://avatars.githubusercontent.com/u/106391470?v=4";

  var cardTitle = document.createElement("h3");
  cardTitle.textContent = "Jagadeesh Ram";
  var cardDec = document.createElement("p");
  cardDec.textContent =
    "simple code to get this profile by using html,css and js";
  cardIteam.appendChild(cardImg);
  cardIteam.appendChild(cardTitle);
  cardIteam.appendChild(cardDec);
  card.appendChild(cardIteam);
}
btn.addEventListener("click", generator);
