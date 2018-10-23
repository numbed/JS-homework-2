/*
	https://www.hackerrank.com/challenges/camelcase/problem
*/


function run(){
  var sentence = prompt("Enter camelCase sentence:", "fuckThisShitForeverLokoSofia");
  console.log(sentence);
  var capitalNumber = 0;
  var newSentence;
  for (i=0; i<sentence.length; i++) {
  
    if (sentence[i] === sentence[i].toUpperCase()) {
		  capitalNumber++;
		  var x = sentence.indexOf(sentence[i]);
      console.log(sentence[i]+"-"+x);
	  }
  }
 
  console.log(capitalNumber);
 
}

run();
