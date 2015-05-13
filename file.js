var fs = require('fs');
//use sync 
fs.readFile('content.txt', 'utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
}