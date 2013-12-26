
//creating file mysocketdump
var ws = require('fs').createWriteStream('mysocketdump.txt');

var net = require('net');

net.createServer(function (socket) {
	//piping the inputs from the ws writestream.
	socket.pipe(ws);
}).listen(4001);

/**
 * note that you have to press enter atleast once to flush the server.
 * 
 */