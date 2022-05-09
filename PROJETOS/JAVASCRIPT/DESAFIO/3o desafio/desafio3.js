// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

let totalDeDias = parseInt(gets());
//let totalDeDias = 400;

let qtdAnos, qtdMeses;

//qtdAnos = parseInt(          );
qtdAnos = Math.floor(totalDeDias / 365);
//console.log(qtdAnos);
restoDiasMeses = totalDeDias - (365 * qtdAnos);
//console.log(restoDiasMeses);
qtdMeses = Math.floor(restoDiasMeses / 30);
//console.log(qtdMeses);
restoDias = restoDiasMeses - (30 * qtdMeses);
//console.log(restoDias);

// totalDeDias= totalDeDias %       ;

// qtdMeses= parseInt(             );
// totalDeDias=                            ;

// let resultado = (qtdAnos + " ano(s) " + '\n' + 
// qtdMeses +" mes(es)" + '\n' +
// totalDeDias + " dia(s)");
let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
restoDias + " dia(s)");

//print(resultado);
//console.log(a + ' ' + b + ' ' +c);
console.log(resultado);

//----------------------------------------------------------

// //original:

// // a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// // Abaixo segue um exemplo de código que você pode ou não utilizar

// let totalDeDias = parseInt(gets());

// let qtdAnos, qtdMeses;

// qtdAnos = parseInt(          );
// totalDeDias= totalDeDias %       ;

// qtdMeses= parseInt(             );
// totalDeDias=                            ;

// let resultado = (qtdAnos + " ano(s) " + '\n' + 
// qtdMeses +" mes(es)" + '\n' +
// totalDeDias + " dia(s)");

// print(resultado);