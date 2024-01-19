// mensage para o usuário interagir e digitar seu número.
let result = prompt("Guess the number im thinking between 0 and 10.");

// lógica para gerar número aleatório.
let randomNumber = Math.round(Math.random() * 10);

// contador de tentativas.
let count = 1;

// while loop para continuar a contagem até que o número seja encontrado.
while (Number(result) != randomNumber) {
	result = Number(prompt("Wrong, try again."));
	randomNumber = Math.round(Math.random() * 10);
	count++;

	// variavel para obter valor booleano.
	let match = Number(result) == randomNumber;

	console.log(match, randomNumber, result);
}
// alerta para informar que houve acertos.
if (count <= 1) {
	alert(`Congrats! You got the number with ${count} attempt.`);
}
alert(`Congrats! You got the number with ${count} attempts.`);
