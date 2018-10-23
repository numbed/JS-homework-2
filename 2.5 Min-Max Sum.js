/*
	https://www.hackerrank.com/challenges/mini-max-sum/problem
*/


function run(){
	var arr = [];
	for (var i=1; i<6; i++){
		var a = prompt("Enter a"+i+":");
		a = parseInt(a);
		arr.push(a);
	}
	console.log(arr);
	arrSorted = arr.sort(function(a, b){return a - b});
	console.log(arrSorted);
	
	var arrSum=0, minSum=0, maxSum=0;
	for (var n=0; n<arrSorted.length; n++) {
		arrSum += arrSorted[n];
	}
		
	console.log("arrSum: "+arrSum);
	console.log("minSum: "+(arrSum - arrSorted.pop()));
	console.log("maxSum: "+(arrSum - arrSorted.shift()));
	
}
run();
