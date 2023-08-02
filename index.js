
//Crea las variables que corresponden a un número al azar del 1 al 6

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

//Estas variables correpsonden a la dirección a la que correspondería cada tirada de dado.
//Por ejemplo, si sale el número 3 en randomNumber1, entonces la variable images1 correspondería a la dirección images/dice3.png

var images1 = "images/dice"+randomNumber1+".png";
var images2 = "images/dice"+randomNumber2+".png";

//Acá se buscará dentro del documento HTML el elemento con las características "dice" e "img1/img2"
//Luego, gracias al setAttribute, se reemplazará el contenido del source a la variable obtenida anteriormente
//Siguiendo el mismo ejemplo, se reemplazaría el src=images/dice6.png a src=images/dice3.png

document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
}

function refreshPage() {
    location.reload();
  }
  