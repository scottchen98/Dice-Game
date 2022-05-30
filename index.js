document.querySelector(".dice-icon").addEventListener("click", diceWinner)


function diceWinner() {

    var randomNumber1 = Math.floor((Math.random() * 6) +1); 
    document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");


    var randomNumber2 = Math.floor((Math.random() * 6) +1); 
    document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🎉 Player 1 Wins!";
        document.querySelector(".dice .img1").classList.remove("fade");
        document.querySelector(".dice .img2").classList.add("fade");

    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
        document.querySelector(".dice .img2").classList.remove("fade");
        document.querySelector(".dice .img1").classList.add("fade");

    } else {
        document.querySelector("h1").innerHTML = "It's a tie. Roll again!";
        document.querySelector(".dice .img1").classList.remove("fade");
        document.querySelector(".dice .img2").classList.remove("fade");
        
    }

}