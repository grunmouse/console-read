const {input, inkey} = require('..');

async function testing(){
	console.log('input:');
	let value = await input('input>');
	console.log(value);

	console.log('inkey:');
	let key = await inkey();
	console.log(key);

}

testing();