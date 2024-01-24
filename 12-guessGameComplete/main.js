let firstScreen = document.querySelector(".firstScreen");
let secondScreen = document.querySelector(".secondScreen");
let randomNumber;
let btn = document.querySelector("#btn");
let reset = document.querySelector("#reset");
// contador de tentativas.
let count = 1;

function handleClick(event) {
	event.preventDefault();

	inputNumber = document.querySelector("#inputNumber");
	console.log(inputNumber.value);

	// lógica para gerar número aleatório.
	randomNumber = Math.round(Math.random() * 10);
	console.log(randomNumber);

	if (Number(inputNumber.value) == randomNumber) {
		firstScreen.classList.add("hide");
		secondScreen.classList.remove("hide");

		secondScreen.querySelector("h2").innerText = `You got it with ${count} attempts. Congrats!`;
	}
	inputNumber.value = "";
	count++;
}

btn.addEventListener("click", handleClick);
reset.addEventListener("click", function () {
	firstScreen.classList.remove("hide");
	secondScreen.classList.add("hide");
	count = 1;
});
