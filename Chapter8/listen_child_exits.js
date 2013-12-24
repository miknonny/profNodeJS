var spawn = require('child_process').spawn;
//listening for child exist events.

// spawn a child with the ls -la command.
var child = spawn('ls', ['-la']);

child.stdout.on('data', function (data) {
	console.log('data from child: ' + data);
});

// when the child exists.
child.on('exit', function (code) {
	console.log('child process terminated with code: ' + code);
});

//note that in the last line that we are listening to the child exist event.

// note that if we try to execute ls -la filename.txt and this file does not 
//exist we get a code 1.
