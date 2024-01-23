let inputNumber = document.querySelector("#inputNumber");

let randomNumber;

// contador de tentativas.
let count = 1;

function empty(event) {
	event.preventDefault();
	if (Number(inputNumber.value) == "") {
		document.querySelector(".error").innerText = `Please, enter a number.`;
	}
	handleClick();
}

function handleClick() {
	inputNumber = document.querySelector("#inputNumber");
	console.log(inputNumber.value);

	// lógica para gerar número aleatório.
	randomNumber = Math.round(Math.random() * 10);
	console.log(randomNumber);

	if (Number(inputNumber.value) == randomNumber) {
		document.querySelector(".firstScreen").classList.add("hide");
		document.querySelector(".secondScreen").classList.remove("hide");

		document.querySelector(".secondScreen h2").innerText = `acertou em ${count} tentativas`;
	}

	count++;
}
