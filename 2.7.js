function run(){
	var text = prompt("Enter text:","aaabccddd");
		//console.log(text);
	text = text.split("");
	for (i=1; i<text.length; i++) {
		if (text[i] === text[i-1]) {
			text.splice(i-1, 2);
			i = 0;
			console.log(text);
		}		
	}	
	
	console.log("Super Reduced String: " + text.join("") || "Empty string");

}
run();
