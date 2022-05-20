var express = require('express');
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
httpProxy = require('http-proxy'),

io.on("connection", (socket) =>{
    var address = socket.request.connection.remoteAddress;
    console.log('New connection from ' + address);

    console.log("Conectou: " + socket.id)

    socket.on("disconnect",() => {
        console.log("X desconectou: " + socket.id)
    })
    
    socket.on("msg", (data) => {
        io.emit("showmsg",data);
        
        console.log(data);
    })

});

app.set("view engine","ejs");

app.get("/", (req,res) => {
    res.render("index")
})


http.listen(8000, () => {
    console.log("APP RODANDO")
})