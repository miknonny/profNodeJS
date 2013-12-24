

var fs = require('fs');
/**
 * if you have an open file you can read stream from it using the fd 
 * option.
 */
var path = '/Users/nonnycode/Documents/lab/profNodeJs/Chapter9/readstream.txt';
fs.open(path, 'r', function (err, fd) {
	fs.createReadStream(null, {fd: fd, encoding: 'utf8'});
	fs.on('data', console.log);
});