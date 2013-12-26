//importing the http module to our script
var http = require ('http');

//creating the http server
var server = http.createServer();

//listeining for incoming request
server.on ('request', function (req, res) {
	//setting the mime type and 200ok response
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World!')
	//var buffer = new Buffer('hello world')
	//res.write(buffer);
	res.end();
});


server.listen(4000);


