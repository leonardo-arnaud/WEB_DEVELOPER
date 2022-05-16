// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar


//let totalItems = parseInt(gets());
//let totalItems = [10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];
let totalItems = "10 4 32 34 543 3456 654 567 87 6789 98";

//let line = gets().split(" ");
//const a = parseInt(line[0]);
//const b = parseInt(line[1]);
totalItems = gets().split(" ");
for (let i = 0; i < totalItems.length; i++) {
    //const element = array[i];
    console.log(totalItems[i]);
}
console.log(totalItems);

//-------------------------------

let pares = [];
let impares = [];
let final = [];

for (let i = 0; i < totalItems.length ; i++) {

  //let number = parseInt(gets());
  let number = totalItems[i];

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

console.log("tentativa1a sequencial pares impares");
for(let i = 0; i < pares.length;i++){
  //print(        )
  console.log(pares[i]);
  final.push(pares[i]);
}
for(let i = 0; i < impares.length;i++){
  //print(          )
  console.log(impares[i]);
  final.push(impares[i]);
}
console.log("tentativa1b os 2 juntos no final");
console.log(final);

//----------------------------------
console.log("tentativa2 juntando");
const juntando = pares.concat(impares);
console.log(juntando);

console.log("tentativa3 cada elemento de juntando");
for(let i = 0; i < juntando.length;i++){
    //print(          )
    console.log(juntando[i]);
}

// let vertical = [];
// for(let i = 0; i < juntando.length;i++){
//     //print(          )
//     vertical[i][0] = juntando[i];
// }
// console.log(vertical);

console.log("tentativa4a colocando elementos de juntando em array duplo x");
var verticalArray = new Array(juntando);

for (var i = 0; i < juntando.length; i++) {

  x[i] = new Array();
  
  x[i].push(juntando[i]);
  console.log(x[i]);
}
console.log("tentativa4b array x todo");
console.log(x);



//---------------------------
 id = "demo"

let txt = "";
final.forEach(myFunction);
//document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}
console.log("tentativa5 virando string");
console.log(txt);