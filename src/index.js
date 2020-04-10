import validator from './validator.js';

//console.log(validator);
 //Lo que esta arriba es del index.js original de laboratoria 

document.getElementById("btnAll").addEventListener("click", function () {
  let cardNumber = document.getElementById("numberCard").value;
  let result = document.getElementById("result");



  /* Validar*/


let newNumber = validator.isValid(cardNumber);
if(newNumber === true){
  console.log("es verdadero");
}else{
  console.log("es falso");
}


  /* Mascara */

  let elMascarasLocas = validator.maskify(cardNumber);

  if(elMascarasLocas == "4"){
    result.innerText = "fallaste perro";
  }else{
    result.innerText = "¡Tu tarjeta número " + elMascarasLocas + " es válida !";
  }
    

















  /*
  // el ciclo lo usamos para recorrer las posiciones del n° y ordenarlo a la inversa
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    // obtenemos el caracter a travez de i
    let cardCharacter = cardNumber.charAt(i);
    // lo convertimos a n° entero para aplicar operaciones matematicas
		let numberParse = parseInt(cardCharacter);

    
    numberValid = !numberValid;
	}

	return (numberCheck % 10) == 0;
*/




});
