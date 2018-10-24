/*
  You will receive a single line from the standard input containing a word (or at least a set or characters). 
  You need to print on the standard input how many times each letter is found in order of the letter appearance, 
  in format {letter} -> {times}
*/

function run(){
	var text = prompt("Enter text:","apple");
	var obj={};
		
	for (var i=0; i<text.length; i++){
		var key = text[i];
		obj[key] = (obj[key] || 0) + 1;
	}
	
	for(x in obj){
		console.log(x + " -> " + obj[x]);
	}
	
}
run();
