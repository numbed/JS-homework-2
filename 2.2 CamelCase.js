/*
Alice wrote a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , print the number of words in  on a new line.

For example, . There are  words in the string.
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
