var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";


var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src", randomImage);
image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").textContent = "Draw!";

}