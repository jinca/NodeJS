console.log("Iniciando hello.js");

module.exports.saludo = "Hola";

module.exports.funcSaludo = (name) => { 
    console.log("Hola " + name) 
};



=================================

console.log("Empezando app...");

const hello = require('./hello');

console.log(hello.saludo);

hello.funcSaludo("Mia <3");




const http = require("http");
const welcome = require("./welcome");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write(welcome.titulo);
    res.write("\n" + welcome.message);
    res.write("\nHoy es: " + welcome.getDateTime());
    res.end();
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





{
  "name": "lodash_module",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Ggerson",
  "license": "ISC",
  "dependencies": {
    "lodash": "^4.17.4"
  }
}

console.log("Empezando app...");

const _ = require("lodash");

console.log(_.isString(true));
console.log(_.isString("Andrew"));
console.log(_.uniq([1, 2, 3, 3, 2, 1, 4, 5]));

let users = [
  {
    first: "Keith",
    last: "Keough",
    email: "keith@codehangar.io",
    age: 35
  },
  {
    first: "Cassandra",
    last: "Wilcox",
    email: "cassie@codehangar.io",
    age: 25
  },
  {
    first: "Ian",
    last: "Grail",
    email: "ian@codehangar.io",
    age: 21
  },
  {
    first: "Georgette",
    last: "Keough",
    email: "mumabah@gmail.com",
    age: 25
  }
];

/**********************************/

// Here we create a new propertie called fullName
_.forEach(users, function(user, index) {
  user.fullName = user.first + " " + user.last;
});

/**********************************/

let usersNames = _.map(users, function(user) {
  return user.fullName;
});
// Output
//["Keith Keough", "Cassandra Wilcox", "Ian Grail", "Georgette Keough"]

/**********************************/
// This will order our array by first propertie
let sortedUsers = _.sortBy(users, "first");

/**********************************/
// This will give us a users with age>30
let filteredByAge = _.filter(users, function(user) {
	return user.age > 30;
});
/**********************************/
// This select a random item from a list
let luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];
_.sample(luckyDraw); // Colin

/**********************************/
// This remove a propertie from an object
objA = _.omit(users, ["last", "age"]);

/**********************************/
// This gets a random number between those numbers
_.random(15, 20);




