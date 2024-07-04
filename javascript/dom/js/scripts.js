// 1 - Movendo-se pelo DOM

console.log(document.body);

console.log(document.childNodes[1]);

console.log(document.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionando por TAG

const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - Selecionando elementos por ID

const title = document.getElementById("title");

console.log(title);

// 4 - Selecionando Elementos por Classe

const products = document.getElementsByClassName("products");

console.log(products);

// 5 - Selecionando os elementos por CSS

const productsQuery = document.querySelectorAll(".products");

console.log(productsQuery);

const mainContainer = document.querySelectorAll("#main-container");

console.log(mainContainer);



