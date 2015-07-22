var express = require('express');
var socketio = require('socket.io');
var app = express();

var server = app.listen(8000, function() { console.log('Starting server on http://localhost:8000'); });
var io = socketio.listen(server);

app.use(express.static('dist'));
app.get('/', function(req, res) {
	return res.sendFile('index.html');
});

var messages = [{time: '12:33:24', text: 'SERVER_TEST 1'}, {time: '12:35:01', text: 'SERVER_TEST 2'}];

io.on('connection', function(socket) {
	
	console.log('New socket connection!');
	
	socket.on('disconnect', function() {
		console.log('Client disconnected');
	});

	socket.on('new message', function(msg) {
		console.log('new message :', msg);
		messages.push(msg);

		io.emit('new message', msg);
	})

	socket.emit('chat history', messages);
});