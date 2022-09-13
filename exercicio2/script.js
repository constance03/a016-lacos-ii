// Crie um programa que peça um input de número para o usuário. 
//Com este número, o código deve imprimir a tabuada do número, de 1 a 10.
// Utilize o for...in para resolver

// const numero = Number(prompt("Insira um numero"))

// for (let i = 1; i <= 10; i++) {
//     for (i in numero) { 
//         console.log(i*numero);
//     }
// }

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const x = Number(prompt("insira um número"))

for (let i in numero) {
        console.log(`${numero[i]} x ${x} = ${x*numero[i]}`)
    }