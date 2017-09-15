console.log("Starting app...\n");

const _ = require("lodash");

let users = [
  {
    first: "Gerson",
    last: "Garrido",
    email: "ggarrido@uni.gg",
    age: 25},
  {
    first: "Lizeth",
    last: "Quispe",
    email: "lquispe@uni.gg",
    age: 24},
  {
    first: "George",
    last: "Prado",
    email: "gprado@uni.gg",
    age: 23}
];

// Here we create a new propertie called fullName
_.forEach(users, function(user, index) {
  user.fullName = user.first + " " + user.last; });

// This will give us a users with age>23
let filteredByAge = _.filter(users, function(user) {
	if ((user.age > 23) == true)
	   console.log(user.fullName);});
