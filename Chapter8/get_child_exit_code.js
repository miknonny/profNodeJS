/**
 * here we are lauching a child that will execute the sleep
 * command for 10secs but before 10sec elapses we send the SIGKILL
 */


var spawn = require('child_process').spawn;

//spawn the child with a sleep 10 command.

var child = spawn('sleep', ['10']);

setTimeout(function () {
	child.kill();
}, 1000);

child.on('exit', function (code, signal) {
	if (code) {
		console.log('child process terminated with code: ' + code);
	} else if (signal) {
		console.log('child process terminated because of signal ' + signal )
	}
});



