// // 1 Crie uma função que receba um número inteiro como parâmetro e retorne a soma dos números pares de 1 até o número informado.

// function somaPares(numero) {
//     let soma = 0;
//     for (let i = 1; i <= numero; i++) {
//         if (i % 2 === 0) {
//             soma += i;
//         }
//     }
//     return soma;
// }
// console.log(somaPares(5))

// 2 Escreva uma função que receba um array de números inteiros como parâmetro e retorne a média aritmética dos valores.

// function ArrayDeNumeros(ar) {
//     let media=0
//     let soma = 0
//     for (let i = 0; i < ar.length; i++) {
//         soma = soma + ar[i]
//     }
//   media =   soma / ar.length
//     return media
// }
// console.log(ArrayDeNumeros([10,20]));

// // 3 Crie uma função que receba uma string como parâmetro e retorne a mesma string com as letras em ordem alfabética.

// function alfabetc(str) {
//     // primeiro conver a sting em um array de letras //   // deposis organizar o novo array em ordem alfabeica // retorne como uma string novamente 
//     let arr = str.split('').sort().join('')
//     return arr

// }
// console.log(alfabetc('davi'));

// // 4 screva uma função que receba um número inteiro como parâmetro e retorne a sequência de Fibonacci correspondente ao número informado.



// function fibo(n) {
//     let a = 0;
//     let b = 1;
//     result = new Array
//     result.push(a);
//     result.push(b);
//     for (let i = 2; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//         result.push(c);
//     } return result;

// } console.log(fibo(5));


// 5 Crie uma função que receba um array de objetos com as propriedades "nome" e "idade" e retorne um novo array apenas com os objetos que possuem idade maior ou igual a 18 anos.

// function clientes(obj) {
//     var maior = []
//     var menor = []
//     for (let i = 0; i < obj.length; i++) {
//         if (obj[i].idade >= 18) {
//             maior.push(obj[i].nome)
//         }else{
//             menor.push(obj[i].nome)
//         }
//     }
//     return {maior, menor}
// }
// console.log(clientes(

//     [
//         { nome: "Ana", idade: 25 },
//         { nome: "Pedro", idade: 42 },
//         { nome: "Maria", idade: 18 },
//         { nome: "João", idade: 6 },
//         { nome: "Lúcia", idade: 31 },
//         { nome: "Lucas", idade: 22 },
//         { nome: "Mariana", idade: 29 },
//     ]


// ))


// let idade = (arr) => arr.reduce((acumulador, atual) => {
//     atual.idade >= 18 ? acumulador.maior.push(atual.nome) : acumulador.menor.push(atual.nome);
//     return acumulador;
//   }, {maior: [], menor: []});
  
//   console.log(idade([
//     { nome: "Ana", idade: 25 },
//     { nome: "Pedro", idade: 42 },
//     { nome: "Maria", idade: 18 },
//     { nome: "João", idade: 6 },
//     { nome: "Lúcia", idade: 31 },
//     { nome: "Lucas", idade: 22 },
//     { nome: "Mariana", idade: 29 },
//   ]));
  

