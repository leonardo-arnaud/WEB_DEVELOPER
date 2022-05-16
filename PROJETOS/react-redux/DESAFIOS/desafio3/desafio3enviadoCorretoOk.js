// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar


//let totalItems = [10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];

let totalItems = parseInt(gets());
let pares = [];
let impares = [];

for (let i = 0; i < totalItems ; i++) {
  let number = parseInt(gets());

  q = Math.floor(number / 2);
  resto = number - (2 * q);
  if ( resto == 0 ){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}

pares.sort(function(a, b){return a - b});
impares.sort(function(a, b){return b - a});

const juntando = pares.concat(impares);

for(let i = 0; i < juntando.length;i++){

    console.log(juntando[i]);
}  