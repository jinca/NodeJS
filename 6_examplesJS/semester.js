let students = [
{ 	id: '20131',
 	name: 'Martin Vuelta',
	semester:'5'},

{	id: '20132',
	name: 'Toto Cabezas',
	semester:'5'},

{	id: '20133',
	name: 'Solanch Ccasa',
	semester:'4'},

{	id: '20134',
	name: 'Bruno Avila',
	semester:'3'}
];

let semester = [1,2,3,4,5,6,7,8,9,10]

function display_counter(){
	for (let i = 0; i < semester.length; i++) {
		let c = 0;
		for (let j = 0; j < students.length; j++){
			if (students[j].semester == semester[i])
				c = c + 1;}
		console.log("Number of students in semester "+[i+1]+":"+c);
 	}
};

display_counter();
