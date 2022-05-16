// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const PI = 3.14159;

//let R = parseFloat(gets());
let R = 3;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

VOLUME = ((4.0/3) * PI * (R ** 3))

//print("VOLUME = "  +  VOLUME);
console.log(VOLUME);
//let Vol3decimals = VOLUME.toPrecision(5);
//console.log(Vol3decimals);
let Vol3decimals = VOLUME.toFixed(3);
console.log(Vol3decimals);

let text = "VOLUME = "  +  Vol3decimals;
console.log(text);


