const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const PORT = 3000;

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render("index");
});

io.on('connection', (socket) => {
    socket.on('write', (msg, userName) => {
        io.emit('write2', msg, userName);
    });
  });

server.listen(PORT, function () {
    console.log(`서버가 ${PORT} 포트로 열렸습니다.`);
});
