/*
Capture 10 items para compor a lista de um supermercado.

Após capturar os 10 items, imprima-os, separando por vírgula.
*/
let items = [];

// for loop logic
for (let item = 0; item <= 2; item++) {
	// variavel para obter items do usuário.
	let list = prompt("Type your item");

	items[item] = list;
}

alert(items.join(", "));
