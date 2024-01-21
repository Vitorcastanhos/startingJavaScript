// Calculadora de idade

let userYear = prompt("Enter your birthday-year.");
let currentYear = prompt("Enter current year.");

while (currentYear > 2024) {
	alert("invalid year, try again.");
	currentYear = prompt("Enter current year.");
}

let currentAge = Number(currentYear - userYear);
console.log(currentAge);

alert(`Your age is: ${currentAge}`);
