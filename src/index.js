import validator from "./validator.js";

//console.log(validator);
//Lo que esta arriba es del index.js original de laboratoria

document.getElementById("btnAll").addEventListener(
  "click",
  function () {
    let cardNumber = document.getElementById("numberCard").value;
    let result = document.getElementById("result");
    let textR = "";
    /* Validar*/

    let newNumber = validator.isValid(cardNumber);
    if (newNumber === true) {
      textR = "es valida";
    } else {
      textR = "no es valido";
    }

    /* Mascara */

    let nMaskify = validator.maskify(cardNumber);

    result.innerText = "¡Tu tarjeta número " + nMaskify + " " + textR;
  }
  );