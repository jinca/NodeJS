console.log("Starting our first JS application.....\n");

const hello = require("./hello.js");
const lower = require("./lower.js");

let name = "GERSON GARRIDO, THANKS FOR YOUR JS HELP!";

if (hello.validate(name) === true){
	t = lower.lowerCase(hello.greetings(name)).toString();
	console.log(t);
}
