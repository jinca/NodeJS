let obj = {
	name: 'Veronica',
	age: 22,
	comment: [
		'It was a very awesome trip',
		'More than 21 miles you have walked',
		{
			name: 'Micaela'
		}
	]
};

theComment1 = obj['comment'][0];
theComment2 = obj['comment'][1];
nameComment = obj['comment'][2].name;

let stringObj1 = JSON.stringify(theComment1);
let stringObj2 = JSON.stringify(theComment2);
let stringObj3 = JSON.stringify(nameComment);

console.log("The comment "+stringObj1+" and "+stringObj2+" was done by "+stringObj3);

