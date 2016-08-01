let promise = new Promise((resolve, reject) => {
	let random = Math.round(Math.random());

	setTimeout(() => {
		if(random){
			resolve(random);
		} else {
			reject(`An error occured: ${random}`);
		}
	}, 1000);
});

promise.then(value => {
	console.log(value);
})
.catch(error => {
	console.log(error);
})