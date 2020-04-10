const validator = {
  isValid: (creditCardNumber) => {
    
    let resultCardNumber = [];
    let numberPair = [];
    let numberInpair = [];

    let result = false;


    // guardamos los números de manera invertida 
    for (let index = creditCardNumber.length - 1; index >=0; index--) {
      // Obtenemos el caracter de cada número mediante el for y los almacenamos en la variable "cNumber"
      let cNumber = creditCardNumber.charAt(index);
      // Luego convertimos a número los caracteres y los guardamos en "numParse" 
      let numParse = parseInt(cNumber);

      console.log(typeof(numParse));
    }


   

    result = true;

    return result;
  },



  maskify: (creditCardNumber) =>{
    let maskify = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i <= creditCardNumber.length - 5) {
        maskify = maskify + "#";
      } else {
        maskify = maskify + creditCardNumber[i];
      }
  
      //result.innerText = "¡Tu tarjeta número " + maskify + " es válida !";
    }

    return maskify;

  } 
}

export default validator
