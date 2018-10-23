/*
	Find the largest number; the input numbers might contain negatives.
*/

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
	var aSorted = a.sort(function(a,b){return a-b});
	console.log(aSorted);
	console.log(aSorted.pop());

}
run();
