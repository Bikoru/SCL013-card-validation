/*import validator from './validator.js';

console.log(validator);
 Lo que esta arriba es del index.js original de laboratoria */

document.getElementById("btnAll").addEventListener("click", function () {
  let cardNumber = document.getElementById("numberCard").value;
  let result = document.getElementById("result");

  /* Validar*/
  let receptor = Array.from(cardNumber);
  let pairs = [];
  let odd = [];
  let newPairs = [];
  let isValid = "";

  for (var i = 0; i <= numeros.length; i++) {
    numero = numeros[i];
    suma += numero;
  }

  /* Mascara */

  let maskify = "";
  for (let i = 0; i < cardNumber.length; i++) {
    if (i <= cardNumber.length - 5) {
      maskify = maskify + "#";
    } else {
      maskify = maskify + cardNumber[i];
    }

    result.innerText = "¡Tu tarjeta número " + maskify + " es válida !";
  }

  
});
