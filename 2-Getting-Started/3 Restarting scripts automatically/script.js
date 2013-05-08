var os = require('os');

var message = 'We are running ' + process.version +
			' on a ' + os.type() + '-based operating system.';

console.log(message);