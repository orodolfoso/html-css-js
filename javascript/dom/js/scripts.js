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

// 6 - insertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild

const navLink = document.querySelectorAll("nav ul");

const li = document.createElement("li");

navLink.appendChild(li);

// 8 - replaceChild

const h2 = document.createElement("h2");

h2.textContent = "Meu novo título!";

header.replaceChild(h2, title);

// 9 - createTExtNode

const myText = document.createTextNode("Agora vamos colocar mais um título");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer[0].appendChild(h3);

// 10 -  Trabalhando com atributos

const firstLink = navLink.querySelector("a");

console.log(firstLink);

firstLink.setAttibute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttibute("target", "_blank");











