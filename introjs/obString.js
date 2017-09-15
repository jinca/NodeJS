let obj = {
    name: 'Veronica',
    age: 32,
    comment:[
        'Best friend ever',
	'yes, you are',
	'since I have met you'
    ]
};
myObj = obj['comment'][2];
let stringObj = JSON.stringify(myObj);
console.log(stringObj);
