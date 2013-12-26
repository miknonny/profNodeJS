var server = require('net').createServer(function (socket) {
	console.log('new connection');

	socket.setEncoding('utf-8');

	socket.write("hello! You can start typing. Type 'quit' to exit.\n ")
	socket.on('data', function (data) {
		console.log('got:', data.toString());
		if (data.trim().toLowerCase() === 'quit') {
			socket.write('see ya!');
			return socket.end();
		}
		socket.write(data);
	});
	socket.on('end', function () {
		console.log('client connection ended');
	});
}).listen(4001);

/**
 * because the socket object is a readable stream you can control the 
 * flow by calling socket.pause(), socket.resume() or even pipe it to
 * writable stream.
 */






