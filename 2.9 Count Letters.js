/*
  You will receive a single line from the standard input containing a word (or at least a set or characters). 
  You need to print on the standard input how many times each letter is found in order of the letter appearance, 
  in format {letter} -> {times}
*/

////////////////////////// WORK IN PROGRESS ////////////////////////////

function run(){
	var text = prompt("Enter text:","apple");
	console.log(text);
	Object.getOwnPropertyNames(text).forEach (
		function (val, idx, array) {
			console.log(text[val] + " -> " + val);
		}
	);
	for (var i = 0; i<text.length; i++) {
		
	}
		
		
}
run();
