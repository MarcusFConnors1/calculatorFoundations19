const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? Formatting Example: + 2 2", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	if (mathSymbol == "+") {
		console.log(`the number is ${num1+num2}`)
	} else if (mathSymbol == "-") {
		console.log(`the number is ${num1-num2}`)
	} else if (mathSymbol == "*") {
		console.log(`the number is ${num1*num2}`)
	} else if (mathSymbol == "/") {
		console.log(`the number is ${num1/num2}`)
	} else if (mathSymbol == "sqrt") {
		console.log(`the number is ${Math.sqrt(num1)}`)
	}
	// This line closes the connection to the command line interface.
	reader.close()

});
