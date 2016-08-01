function requestHandler(request, response){
	response.end('<h1>Hi</h1>')
}

let server = require('http').createServer();
server.on('request', requestHandler);
server.listen(8080);