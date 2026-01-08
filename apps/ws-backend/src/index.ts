import { WebSocket } from "ws";

const wss = new WebSocket.Server({ port: 8081 });

wss.on("connection", function connection(ws){
    ws.on("message",function message(data){
        ws.send("pong");
    });
});
