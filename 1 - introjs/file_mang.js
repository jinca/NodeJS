const fs = require("fs");

let contents = fs.readFile("/etc/hosts", (err, contents) => {
	console.log(contents);
});

console.log("Doing something else");
