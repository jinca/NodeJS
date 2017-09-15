let obj = {
	name: 'Gishe',
	age: 22,
	comentario: [
		'asdasdasdasd',
		'asdasdasdasd',
		{
			name: 'ErickALV'
		}
	]
};

t = obj['comentario'][2].name;

let stringObj = JSON.stringify(t);
console.log(stringObj);

let jsonString = '{"name": "Gerson","age": 25}';
let persona = JSON.parse(jsonString);
console.log(typeof(persona));

