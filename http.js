var http = require('http');

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('Hello from ' + __filename);
}).listen(8124);
console.log('Server runnuing on port 8124')
