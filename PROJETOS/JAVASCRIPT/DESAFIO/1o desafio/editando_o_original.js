// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let line = gets().split(" ");
const a = parseInt(line[0]);
const b = parseInt(line[1]);

  //testando b e limites:
  if ((b == 0) || (a < -1000) || (a > 1000) || (b < -1000) || (b > 1000)) {
    alert("Valor digitado invalido");
    print("Valor digitado invalido");
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

print(q + " " + r);