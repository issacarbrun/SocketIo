var express = require('express');
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket) =>{
    var address = socket.request.connection.remoteAddress;
    console.log('New connection from ' + address);
    console.log("Conectou: " + socket.id)
    socket.on("disconnect",() => {
        console.log("X desconectou: " + socket.id)
    })
    
    socket.on("boasvindas",(data) =>{
        console.log(data);
    })
    socket.on("palavra",(data) => {
        console.log(data);
        socket.emit("resultado", data + " - Guia do Programador");        
    });

});

app.set("view engine","ejs");

app.get("/", (req,res) => {
    res.render("index")
})



http.listen(8000, () => {
    console.log("APP RODANDO")
})