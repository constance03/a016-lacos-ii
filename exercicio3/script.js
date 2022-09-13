// Crie um array com 5 strings. Faça um programa que percorra este array e 
//imprima as strings em formato de ranking, como no exemplo abaixo:

// Utilize o for...of para resolver

// //entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
let contador = 1
for (i of maioresPaises) {
  console.log(`${contador} - ${i}`);
  contador ++
}