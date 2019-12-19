const readline = require('readline');

function create(prompt){
	return readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt
	});
}

function input(prompt){
	return new Promise((resolve) => {
		var rl = create(prompt);
		
		rl.on('line', (cmd) => {
			rl.close();
			resolve(cmd);
		});
		
		prompt && rl.prompt();
	});
}

function inkey(prompt){
	return new Promise(resolve => {
		var rl = create(prompt);
		
		process.stdin.once('keypress', (s, key)=>{
			rl.close();
			resolve(key);
		});
		prompt && rl.prompt();
	});
}

module.exports = {
	input,
	inkey
};

