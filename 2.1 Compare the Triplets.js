function run(){
	var alice = [];

	for (var i=1; i<4; i++){
		var a = prompt("Enter a"+i+":");
		a = parseInt(a);
		alice.push(a);

	}
	var bob = [];
	for (var i=1; i<4; i++){
		var b = prompt("Enter b"+i+":");
		b = parseInt(b);
		bob.push(b);
	}
	console.log(alice);
	console.log(bob);

	var alicePoints = 0, bobPoints = 0;
	for (var x=0; x < alice.length; x++){
			if (alice[x]>bob[x]) {
				alicePoints++;
			} else if (alice[x]<bob[x]) {
				bobPoints++;
			}
	}
	console.log("Alice: "+alicePoints+" Bob: "+ bobPoints);
}

run();
