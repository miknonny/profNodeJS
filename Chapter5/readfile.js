var fs = require('fs');

fs.readFile('/etc/paswd', function (error, fileContent) {
	if (error) {
		throw error;
	}
	console.log('file content', fileContent.toString());
});