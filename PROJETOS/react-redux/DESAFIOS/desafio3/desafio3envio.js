// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

let totalItems = parseInt(gets());
//let totalItems = [10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];

let pares = [];
let impares = [];
let final = [];

for (let i = 0; i < totalItems.length ; i++) {

  let number = parseInt(gets());
  //let number = totalItems[i];

  q = Math.floor(number / 2);
  resto = number - (2 * q);
  if ( resto == 0 ){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}

//const points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){return a - b});

//pares.sort((a, b) =>       );
//impares.sort((a, b) =>        );
pares.sort(function(a, b){return a - b});
impares.sort(function(a, b){return b - a});

for(let i = 0; i < pares.length;i++){
    //print(        )
    //console.log(pares[i]);
    final.push(pares[i]);
  }
  for(let i = 0; i < impares.length;i++){
    //print(          )
    //console.log(impares[i]);
    final.push(impares[i]);
  }
  console.log(final);

const juntando = pares.concat(impares);
console.log(juntando);
  