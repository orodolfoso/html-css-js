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

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.brand;

console.log(car);

// 6 - Mais sobre objetos

const obj = {
    a: "teste",
    b:  true,
};

console.log(obj instanceof object);

const obj2 = {
    c: [],
}

Object.assign(obj2, obj);

console.log(obj2);