// mensage para o usuário interagir e digitar seu número.
let result = prompt("Guess the number im thinking between 0 and 10.");

// lógica para gerar número aleatório.
let randomNumber = Math.round(Math.random() * 10);

let match = Number(result) == randomNumber;

// contador de tentativas.
let count = 1;

// while loop para continuar a contagem até que o número seja encontrado.
while (Number(result) != randomNumber) {
	result = prompt("Wrong, try again.");
	let randomNumber = Math.round(Math.random() * 10);
	count++;

	console.log(match, randomNumber, result);
}

// alerta para informar que houve acertos.
alert("Congrats!");
