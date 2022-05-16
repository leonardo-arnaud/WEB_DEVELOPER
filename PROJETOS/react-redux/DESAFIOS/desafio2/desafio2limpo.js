// R = 3
// V !=1 (<R)  , V = 20 (>R)

// R + (R+1)+ (R+2)+... > V
// 3+4 = 7 < 20  cont=2
// 3+4+5 = 12 < 20  cont=3
// 3+4+5+6 = 18 < 20  cont=4
// 3+4+5+6+7 = 25 > 20  cont=5
// cont = 5

//-----------------------------

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let R = parseInt(gets());
let V = 0;
//let R = 3;
//let V = 20;

// Complete os espaços em branco com uma possível solução para o problema

while(true){
  V = parseInt(gets())
  if( V > R ){
    break
  }
}

let cont = 2;
let it = R + 1;

const soma = [];
soma[cont] = R + it;


while(soma[cont] < V){

    it++
    soma[(cont + 1)] = soma[cont] + it
    cont++

    //console.log(soma);
    //console.log(cont);
    //console.log(it);
  
}

console.log(cont);