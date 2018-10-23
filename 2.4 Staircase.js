/*
	https://www.hackerrank.com/challenges/staircase/problem
*/


function run(){
	var n = prompt("Enter number:");
	for (var x=1; x<=n; x++){
		var space=" ";
		var hash="#";
		console.log(space.repeat(n-x)+hash.repeat(x));
	}
}
run();
