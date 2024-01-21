/*
Calculdora lógica
*/

let firstNumber = Number(prompt("Enter your first number."));
let operator = prompt("Enter your logical operator.");

while (operator != "-" && operator != "+" && operator != "/" && operator != "*") {
	alert("Operator invalid");
	operator = prompt("Enter your logical operator.");
}
let secondNumber = Number(prompt("Enter your second number."));

let result;

if (operator == "+") {
	result = firstNumber + secondNumber;
} else if (operator == "-") {
	result = firstNumber - secondNumber;
} else if (operator == "/") {
	result = Math.round(firstNumber / secondNumber);
} else if (operator == "*") {
	result = Math.round(firstNumber * secondNumber);
}
console.log(result);
alert(result);
