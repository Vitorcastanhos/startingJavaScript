/*
Faça um programa que tenha um menu e aoresente a seguinte mensagem: 
Olá usuário! Digite o número da opção desejada

1.cadastrar um item na lista
2. mostrar itens cadastrados
3. sair do programa

o programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista.
Caso o usuário digite 2, ele poderá ver os items cadastrados.
Se não houver nenhum item cadastrado, mostrar a mensagem:
	"não existem items cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

let options;
let items = [];

while (options != 3) {
	let options = Number(
		prompt(`
	Hello user! Chose one of your options.
	
	1. Store an item on the FileList
	2. Show items stored
	3. Leave the program
	`)
	);

	switch (options) {
		case 1:
			let item = prompt("Type the item");
			items.push(item);
			break;
		case 2:
			if (items.length == 0) {
				alert("No items stored");
			} else {
				alert(items.join(", "));
			}
			break;
		case 3:
			alert("Bye");
			break;
		default:
			alert("Invalid option")
	}
}
