const generateId = function*() {
	let index = 0;

	while(true) 
		yield index++;
};

let a = generateId();

console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);