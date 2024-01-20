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
