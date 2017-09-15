let arr = ["Apple", "Orange", "Pear",1];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for(let fruit of arr) {
	console.log(fruit);
}

for (let key in arr) {
	console.log(arr[key]);
}

arr.forEach((item, index, array) => {
	console.log(`${item} is at index ${index} in ${array}`);
});
