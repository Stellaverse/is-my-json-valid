


var start = new Date().getTime();
var validator = require('./');



var validate = validator({
	type: 'object',
	properties: {
		hello: {
			type: 'string',
		},
		test : {
			type : 'object',
			properties : {
				testing : { type : 'string' }
			}
		}
	}
}, {
	verbose: true
});



var data = {
	//hello : 'world!',
	test : {
		testing : '1234',
		another : '5678'
	},
	//pages : [
	//	{ pageID : '', title : '', url : '' }
	//]
}



var valid = validate(data);

if (validate.errors) {
	console.log(validate.errors);
} else {
	console.log('Valid!');
}

console.log('Duration: ' + (new Date().getTime() - start) + 'ms');


