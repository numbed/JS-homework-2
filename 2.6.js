function run(){
	
	var text = prompt("Enter text:","and THIS is the new shit");
	var caesarShift = prompt("Enter Caesar shift factor:",3);
	caesarShift = parseInt(caesarShift);
	var encryptedText="";
	var textCharCode="";
	for (var n=0; n<text.length; n++){
		 var textChar = text.charCodeAt(n);
		 if (textChar => 65 && textChar <= 90) { 
			encryptedText += String.fromCharCode((textChar - 65 + caesarShift) % 26 +65);
		} else if (textChar => 97 && textChar <= 122) {
			encryptedText += String.fromCharCode((textChar - 97 + caesarShift) % 26 + 97);
		} else {
			encryptedText += String.fromCharCode(textChar);
		}
		textCharCode += (textChar+" ");	
	}
	
	console.log(text);
	console.log(textCharCode);
	console.log(encryptedText);

	
}
run();
