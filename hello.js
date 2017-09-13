console.log("Starting the 'hello.js' module \n");

module.exports.greetings = name => {
	return "Hello " + name + "... welcome to the GNU/Linux world \n";
};

module.exports.validate = name => {
	if (typeof name == "string") return true;
	else console.log("Please enter a valid name...");
};
