// 1 - Métodos

const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au")
    }
};

console.log(animal.nome);

animal.latir();

// 2 - Aprofundando em Métodos

const pessoa = {
    nome: "Rodolfo",
    getNome: function() {
        return this.nome;
    },

    setNome: function(novonome) {
        this.nome = novonome;
    }
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Lucas");

console.log(pessoa.getNome());

// 3 - Prototypes

const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre Prototypes

const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);


