const WebSocket = require('ws')
const express = require('express');
const app = express();

app.use(express.static('game'));
app.listen(8000);

const wss = new WebSocket.Server({
    port: 8080
})

let connections = [];

wss.on('connection', ws => {
    connections.push(ws);
    ws.on('message', message => {
        for (con in connections) {
            con.send(message);
        }
    });
});