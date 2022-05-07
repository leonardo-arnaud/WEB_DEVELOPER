function validateForm() {
  let a = document.forms["myForm"]["primeiro"].value;
  let b = document.forms["myForm"]["segundo"].value;
  
  q = a / b;
  console.log(q);