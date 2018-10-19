function run(){
	var a = [];
	var arraySum=0;
	while (true) {
		var x = prompt("Enter int number.\nCancel to stop.");
		if (!x) break;
		x = parseInt(x);
		a.push(x);
	}
	console.log(a);
	for (var i=0; i<a.length; i++) {
		arraySum += a[i];
	}
	console.log(arraySum);
}

run();
