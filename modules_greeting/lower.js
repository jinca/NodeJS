console.log("Starting the 'lower.js' module \n");

module.exports.lowerCase = message => {
	let m = message.toString();
	return m.toLowerCase();
};
