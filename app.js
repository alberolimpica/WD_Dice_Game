function randomDice(dice){
    var randomNumber = Math.random();
    randomNumber *= 6;
    randomNumber = Math.floor(randomNumber) + 1;

    var playerDice = document.querySelector(`.img${dice}`);
    playerDice.setAttribute("src", `images/dice${randomNumber}.png`);

    return randomNumber;

}

var diceNumberPlayer1 = randomDice(1);
var diceNumberPlayer2 = randomDice(2);

var title = document.querySelector(".title");
if(diceNumberPlayer1 > diceNumberPlayer2){
    title.innerHTML = "🚩 Player 1 Wins!";

}if(diceNumberPlayer1 < diceNumberPlayer2){

    title.innerHTML = "Player 2 Wins! 🚩";
}if(diceNumberPlayer1 === diceNumberPlayer2){
    title.innerHTML = "Draw!";

}