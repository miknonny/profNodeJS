/**
 * instantiate the server.
 * log some important events.
 * bind the server to port 4001.
 */


//step 1
var net = require('net');

//instantiating the TCP server
var server = net.createServer();

//creating a socket store for all connections.
var sockets = [];

//handling incoming connection.
server.on('connection', function (socket) {
	console.log('got a new connection');
	
	//pushing a new socket(client) to the socket array	
	sockets.push(socket);

	//reading data from a connection using sockets.
	socket.on('data', function (data) {
		
		console.log('got data: ', data);
		
		//Broadcasting data to every user except ofcourse the user.
		sockets.forEach(function (otherSocket) {
			if (otherSocket !== socket) {
				otherSocket.write(data);
			}
		});

	});
	//removing a closed connection from the sockets array.
	socket.on('close' function () {
		var index = sockets.indexOf(socket);
		sockets.splice(index, 1);
	})
});



//logging some important events like error and close;
server.on ('error', function (err) {
	console.log('Server error: ', err.message);
})

server.on('close', function () {
	console.log('connection closed');
	
});


server.listen(4001);





