function validateForm() {
  let a = document.forms["myForm"]["primeiro"].value;
  let b = document.forms["myForm"]["segundo"].value;
  

  //testando b e limites:
  if ((b == 0) || (a < -1000) || (a > 1000) || (b < -1000) || (b > 1000)) {
    alert("Valor digitado invalido");
    return false;
  }

  //checando se + ou -
  if (((Math.sign(a) == 1) && (Math.sign(b) == 1)) || ((Math.sign(a) == -1) && (Math.sign(b) == 1))) {
    	q = Math.floor(a / b);
    	r = a - (b * q);
 	} 
  if (((Math.sign(a) == 1) && (Math.sign(b) == -1)) || ((Math.sign(a) == -1) && (Math.sign(b) == -1))) 		 {
    	q = Math.ceil(a / b);
    	r = a - (b * q);
  }
   
   
  //resultados
  console.log(q);
  alert("Quociente: " + q + "  _  Resto: " + r);
  return false;
}