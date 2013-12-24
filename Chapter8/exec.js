//import the external command defined by child_process module.


var exec = require('child_process').exec;

//launch the command ls.

exec('cat exec.js | wc -l', function (err, stdout, stderr) {
	//if the command exited or the command failed.
	if (err) {
		console.log('child process exited with code', err.code);
		return;
	}
	console.log(stdout);
});

