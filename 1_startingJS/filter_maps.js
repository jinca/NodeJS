a = {id: 1, name: "Gerson", period: "5to"}
b = {id: 2, name: "ErickLV", period: "6to"}
c = {id: 3, name: "George", period: "7to"}

let users = [a,b,c]

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); 

let names = ["Julita ","Inca","Chiroque"]

let lengths = names.map(item => item.length);
console.log(lengths);
