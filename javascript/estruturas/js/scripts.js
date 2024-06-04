//  1 - Variáveis
let nome = "Rodolfo";
console.log(nome);

nome = "Rodolfo Oliveira";
console.log(nome);

const idade = 39;
console.log(idade);

// idade = 38;

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variáveis
  
// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
b = 20,
c = 30;

console.log(a, b, c);

const nomecompleto = "Rodolfo Oliveira";

const nomeCompleto = "Lucas de Oliveira";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - Nomes reservados

console.log("ok");

// 4 - Função de prompt

// const age = prompt ("Digite a sua idade");
// console.log(`Você tem ${age} anos.`);

// Função de alerta

// alert("Qual é o seu nome?");

// const z = 10

// alert(`O número é ${z}`);

// 5 - Funções do JS: Math.x


// 6 - Console

// console.log("teste");

// console.error("erro!");

// console.warn("aviso!");

// 7 - IF

// const m = 10;

// if(m > 5) {
//     console.log("M é maior que 5!")
// }

// const user = "João";

// if(user === "João") {
//     console.log("Olá João!");
// }

// if(user === "Maria") {
//     console.log("Ola, Maria!");
// }

// console.log(user === "João", user === "Maria");

// // 8 - else

// const loggedIn = true

// if(loggedIn) {
//     console.log("Está autenticado!");
// } else{
//     console.log("Não está autenticado!");
// }

// const q = 10
// const w = 25 

// if(q > 5 && w > 20) {
//     console.log("Numeros mais altos")
// } else{
//     console.log("Os números não são mais altos")
// }

// // 9 - else if

// if(1 > 2) {
//     console.log("Teste");

// } else if(2 > 3) {

// } else if(5 > 1) {
//     console.log("Agora sim!");
// }

// const userName = "Rodolfo"
// const useAge = 39

// if(userName === "José") {
//     console.log("Bem vindo José!")
// } else if(userName === "Rodolfo" && useAge === 39) {
//     console.log("Olá Rodolfo, você tem 39 anos!");
// } else {
//     console.log("Nenhuma condição aceita!");
// }

// Estrutra de repetição 
// 10 - while

let p = 0

while(p <  5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;    
}



// loop inifito

// let x = 10

// while(x > 5) {
//     console.log(`Imprimindo ${x}`);
// }

//  11 - do While

// let o = 10

// do{
//     console.log(`Valor de o: ${o}`);
//      o--;
// } while(o > 1);

// 12 - For

for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo....");
}

let r = 10

for(r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo ${r}`);
}

//  13 - Identação

for(let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
    console.log(`Maior que 10! ${u}`)
    } else {
        if(u / 2 === 0 ) {
            console.log("deu 0");
        }
    }
}

// 14 - Break

for(let g = 20; g > 10; g--) {
    console.log(`O valor  de g é: ${g}`);

    if(g === 18) {
        console.log("O g é 18!");
        break;
    }

} 

//  15 - continue

for (let s = 1; s < 10; s = s + 1) {
    //  operador de resto = %
    if(s % 2 === 0) {
        console.log("Número par!");
        continue;
    }

    console.log(s);
}