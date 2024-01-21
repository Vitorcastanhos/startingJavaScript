function Person() {
	this.name = "Vitor";
	this.age = 31;
	this.printName = function (number) {
		alert(number);
	};
	this.returnAnimal = function (animal) {
		return animal;
	};
}

function Animal() {
    this.name = "Pan"
    this.race = "Viralata"
}

let person = new Person()
let animal = new Animal()
animal.race = "Something"

alert(returnAnimal(animal))

// function Person() {
// 	this.name = "Vitor";
// 	this.name1 = "Joel";
// 	this.name2 = "Paula";
// 	this.name3 = "Fio";
// }

// let person = new Person();

// console.log(person.name1);
