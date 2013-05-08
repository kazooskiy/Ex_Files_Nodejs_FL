var io = require('socket.io'),
  connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) {
  socket.emit('entrance', {message: 'Welcome to the chat room!'});

  socket.on('disconnect', function  () {
    chat_room.sockets.emit('exit', {message: 'A chatter has disconnected.'});
  });

  chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});
});