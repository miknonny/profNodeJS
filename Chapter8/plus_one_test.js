var spawn = require('child_process').spawn;

// Spawn the child with a node executing the plus one app.

var child = spawn('node', ['plus_one.js']);
// call this function every 1 second. (1000 milliseconds).

setInterval(function () {
	//creates a random number smaller than  10000;
	var number = Math.floor(Math.random() * 10000);
	//send the number to the child process.
	child.stdin.write(number + "\n");
	//get the response from the child process and print it.
	child.stdout.once('data', function (data) {
		console.log('child replied to ' + number + ' with: ' + data);
	});
}, 1000);

child.stderr.on('data', function (data) {
	process.stdout.write(data);
});


/**
 * here we lauch the plus_one app as a child process
 * use the interval function to do the following every one second.
 * create a random natural number smaller than 10,000
 * send the number as a string to the child process
 * wait for the child process to reply with a string.
 */


