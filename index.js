var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "img/dice"+randomNumber1+".webp";
document.querySelectorAll("img")[0].setAttribute("src" , randomDiceImage1 );
//for second dice
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "img/dice"+randomNumber2+".webp";
document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImage2 );

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw!";
}