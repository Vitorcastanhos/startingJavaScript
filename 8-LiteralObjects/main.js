/*
Crie uma lista de pacientes

Cada paciente dentro da lista deverá conter 
    nome
    idade
    peso
    altura
Escreva uma lista contendo o nome dos pacientes.
*/

// object literal

const patients = [
	{
		name: "Luis",
		age: 20,
		weight: 100,
		height: 190,
	},
	{
		name: "Catherin",
		age: 27,
		weight: 61,
		height: 160,
	},
	{
		name: "Claudio",
		age: 55,
		weight: 45,
		height: 168,
	},
];

let patientsNames = [];

// for (let patient of patients) {
// 	patientsNames.push(patient.name);
// }

/// funçòes named, anonimas e arrow functions

//segunda forma de se fazer...
//funcao separada para o calculo..
function IMC(weight, height) {
	return (weight / (height / 100) ** 2).toFixed(2);
}

function printPatientsImc(patient) {
	return `Patient ${patient.name} has IMC of ${IMC(patient.weight, patient.height)}`;
}

//primeira forma de se fazer.. calculo dentro da funcao
// function printPatientsImc(patient) {
// 	return `Patient ${patient.name} has IMC of ${(patient.weight / (patient.height / 100) ** 2).toFixed(2)}`;
// }

for (let patient of patients) {
	let IMCmessage = printPatientsImc(patient);
	alert(IMCmessage);
}

// --------- outra forma de fazer -----------

function showPatientsInfo(patient) {
	alert(`${patient.name} tem ${patient.age} anos de idade, ${patient.weight} kilos e ${patient.height} de altura`);
}
showPatientsInfo(patients[0]);
showPatientsInfo(patients[1]);
showPatientsInfo(patients[2]);
