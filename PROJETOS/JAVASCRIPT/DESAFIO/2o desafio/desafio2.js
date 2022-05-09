// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

// let linhas = parseInt(gets());

//TODO: Complete os espaços em branco com uma solução possível para o problema.


// *** ESSE FUNCIONOU COMO STRING! ***

//let limit = parseInt(gets());
let limit = 5;

var x = new Array(limit);

for (var i = 0; i < x.length; i++) {
  //x[i] = new Array(3);
  let a = i+1;
  let b = (i+1)**2;
  let c = (i+1)**3;
  
  //console.log(a);
  //console.log(b);
  //console.log(c);
  console.log(a + ' ' + b + ' ' +c);
  
  //x[i] = new Array[i+1;y;z];
  //x[i] = new Array[a,b,c];
  
  //x[i] = new Array(3);
  x[i] = new Array();
  
  //fruits.push("Kiwi");
  x[i].push(a);
  x[i].push(b);
  x[i].push(c);
}
//console.log(x);





//--------------------------------------------------------

// *** ESSE FUNCIONOU COMO MATRIZ!! ELE QUER STRING!! ***

//let limit = parseInt(gets());
let limit = 5;

var x = new Array(limit);

for (var i = 0; i < x.length; i++) {
  //x[i] = new Array(3);
  let a = i+1;
  let b = (i+1)**2;
  let c = (i+1)**3;
  console.log(a);
  console.log(b);
  console.log(c);

  //x[i] = new Array[i+1;y;z];
  //x[i] = new Array[a,b,c];
  
  //x[i] = new Array(3);
  x[i] = new Array();
  
  //fruits.push("Kiwi");
  x[i].push(a);
  x[i].push(b);
  x[i].push(c);
}
console.log(x);

//------------------------------------------------------------------------------------

// //<p id="demo"></p>

// let limit = parseInt(gets());
// let limit = 5;

// var mA = [][];

// for (let i = 1; i == limit; i++) {
//   let X = i**2;
//   let Y = i**3;

//   //print(i X Y);
//   //console.log(i X Y);

//   //const mA = math.matrix([[i-1, i], [i-1, X], [i-1, Y]]);

//   mA[i-1, 0] = i;
//   mA[i-1, 1] = X;
//   mA[i-1, 2] = Y;

// }

// console.log(mA);
// document.getElementById("demo").innerHTML = mA;

// <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.3.2/math.js"></script>


//-------------------------------------------------------------------

// //<p id="demo"></p>

// //let limit = parseInt(gets());
// let limit = 5;

// const mA = [5][3];

// for (let i = 1; i == limit; i++) {
//   let X = i**2;
//   let Y = i**3;
	
//   //alert(i);
//   //alert(X);
//   //alert(Y);
//   //print(i, X, Y);
//   //console.log(i X Y);

//   //const mA = math.matrix([[i-1, i], [i-1, X], [i-1, Y]]);

//   mA[i-1][0] = i;
//   mA[i-1][1] = X;
//   mA[i-1][2] = Y;

// }

// //const view = mA[0][0];
// alert(mA[1]);
// //console.log(mA);
// //document.getElementById("demo").innerHTML = mA;

// //<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.3.2/math.js"></script>

//-------------------------------------------------------------------



// // a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// // Abaixo segue um exemplo de código que você pode ou não utilizar

// let linhas = parseInt(gets());

// //TODO: Complete os espaços em branco com uma solução possível para o problema.

// let limit = parseInt(gets());

// for (let i = 1; i <= limit; i++) {
//   let X =(      );
//   let Y = (     );

//   print(      );
// }