var app = require('express').createServer();

app.get('/', function(req, res){
	res.send('Hello W0rld');
	console.log('Hello W0rld');
});

app.get('/user/:id', function(req, res){
	res.send('Hello ' + req.params.id);
	console.log('Hello' + req.params.id);
});

app.listen(3000)

