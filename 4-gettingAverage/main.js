let names = prompt("Enter your name: ");
let note1 = prompt("Enter your first note: ");
let note2 = prompt("Enter your second note: ");
let note3 = prompt("Enter your third note: ");

let sum = (Number(note1) + Number(note2) + Number(note3)) / 3;

sum = sum.toFixed(1);

if (sum >= 6) {
	alert(`Hi ${names}, you were accepted with: ${sum} points total.`);
} else {
	alert("Hi " + names + ", you were rejected with: " + sum + " points total");
}
