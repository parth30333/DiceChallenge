var randomNummber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "images/dice" +  randomNummber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);


var randomNummber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice" +  randomNummber2 + ".png";
var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src",randomDiceImage2);


if(randomNummber1 > randomNummber2) {
  document.querySelector("H1").textContent = "Player 1 Wins! 🚩";
}
else if(randomNummber1 < randomNummber2) {
  document.querySelector("H1").textContent = "🚩 Player 2 Wins!";
}
else {
  document.querySelector("H1").textContent = "Draw!";
}
