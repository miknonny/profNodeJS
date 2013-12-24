// killing a child process by sending signal from the parent.


var spawn = require('child_process').spawn;
var child = spawn('sleep', ['10']);


setTimeout(function () {
	child.kill('SIGUSR2');
}, 1000);

process.on('SIGUSR2', function () {
	console.log('Got a SIGUSR2 signal');
});
