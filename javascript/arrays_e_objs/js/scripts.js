// // 1 - arrays

// const lista = [1,2,3,4,5];

// console.log(lista);
// console.log(typeof lista);

// const itens = ["Rodolfo", true, 2, 4.12, []];

// console.log(itens);

// // 2 - mais sobre arrays

// const arr = ["a", "b", "c", "d",];

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[83]);

// // 2 - Propriedades

// const numbers = [5,3,4];

// console.log(numbers.length);

// console.log(numbers["length"]);

// const myName = "Rodolfo";

// console.log(myName.length);

// // 3 - Métodos

// const otherNumbers = [1,2,3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));

// // 4 - Objetos

// const person = {
//     name: "Rodolfo",
//     age: 39,
//     job: "Programador",
// };

// console.log(person);

// console.log(person.name);
// console.log(person.name.length);
// console.log(typeof person); 

// 5 - Criando e deletando propriedades

// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     km: 20000,
// };

// console.log(car);

// car.doors = 4;

// console.log(car);

// delete car.brand;

// console.log(car);

// // 6 - Mais sobre objetos

// const obj = {
//     a: "teste",
//     b:  true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: [],
// }

// Object.assign(obj2, obj);

// console.log(obj2);

// // 7 - Conhecendo melhor os objetos

// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // 8 - Mutação (Mutability)

// const a = {
//     name: "Rodolfo",
// };

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 39;

// console.log(a);
// console.log(b);

// delete b.age

// console.log(a);
// console.log(b);

// 9 - Loop em array

const users = ["Rodolfo", "Lucas", "Bianca", "Renata"];


for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// // 10 - Push  e Pop

// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array.length);

// array.pop();

// console.log(array);

// const itemRemovido = array.pop();

// console.log(itemRemovido);

// console.log(array);

// array.push("z", "x", "y", "z");

// console.log(array);

// // 11 - Shift e Unshift

// const letters = ["a", "b", "c"];

// const letter = letters.shift();

// console.log(letter);

// console.log(letters);

// letters.unshift("p", "q", "r");

// letters.unshift("z");

// console.log(letters);

// // 12 - IndexOf e LastindexOf

// const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

// console.log(myElements.indexOf("Maçã"));

// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);

// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate"));

// console.log(myElements.indexOf("Melão"));

// console.log(myElements.lastIndexOf("Melão"));

// 13 - Slice

const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2,4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2,4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);



