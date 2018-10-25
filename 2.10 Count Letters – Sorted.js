/*
  You will receive a single line from the standard input containing a word (or at least a set or characters). 
  You need to print on the standard input how many times each letter is found in order of the letter appearance, 
  in format {letter} -> {times}
  
  !!!!!!!!!!!!!!!!!
  the output should be sorted by the times a letter has occurred in descending order, then in order of appearance.
  !!!!!!!!!!!!!!!!!
*/

function run(){
	var text = prompt("Enter text:","banana");
	var obj={};
	var sorted =[];
		
	for (var i=0; i<text.length; i++){
		var key = text[i];
		obj[key] = (obj[key] || 0) + 1;
	}
	
	for(var x in obj){
		sorted.push([x, obj[x]]);
	}
	sorted.sort(function(a,b) {return b[1]-a[1];});
	
	for (var n in sorted) {
	console.log(sorted[n][0]+ " -> " +sorted[n][1] );
	}
}
run();
