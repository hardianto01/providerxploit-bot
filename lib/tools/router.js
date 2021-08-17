const express = require('express')
const app = express();
const qrcode = require('qrcode')
const fs = require("fs")
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

module.exports = (tprovider) => {
    try{	
    let lastqr = false
    tprovider.on("qr", qr =>{
        qrcode.toDataURL(qr, function (err, url) {
        lastqr = url
        io.emit('qr', lastqr)
        })
    })	
    tprovider.on("open", () =>{
        io.emit('con', {jid: tprovider.user.jid})
        lastqr = false
    })
    tprovider.on("close", () => io.emit('close', "IDLE"))
    io.on('connection', () => io.emit('config', global.configs))
    io.on('connection', (socket) => lastqr ? io.emit('qr', lastqr) : io.emit('con', {jid: tprovider.user ? tprovider.user.jid : false})); 
    app.use(express.static('public'))
    server.listen(PORT, () => {
        console.log(`Server Berjalan Pada Port ${PORT}`)
    });
    } catch {
        
    }
    }
