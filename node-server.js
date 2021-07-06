const mongoose = require('mongoose');
const { Schema } = mongoose;

const Message = new Schema({
    sender: String,
    status: String,
    sendingTime: { type: Date, default: Date.now },
    messageData: String
});

const Contact = new Schema({
    firstName: String,
    lastName: String
});

const Chat = new Schema ({
    lastMessage: Message,
    allMessages: [Message],
    name: String,
    contacts: [Contact]
});

const User = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    chats: [Chat]
});

var Users = new Map();

var express = require('express');
var app = express();
var fs = require("fs");

// app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//    });
// })

// app.get('/user/:id', function (req, res) {

// });


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

app.post('/login', (req, res) => {
  console.error(req.body);
  // res.end(Users);
  res.end(JSON.stringify(Users));
});

app.post('/createUser', (req, res) => {
  res.end(Users);
});

app.get('/chats/:userId', (req, res) => {
  console.log(req.params.userId);
  // res.end();
});

app.get('/messages/:userId/:chatId', (req, res) => {
  res.end(Users);
});

app.post('/sendMessage', (req, res) => {
  res.end(Users);
});

app.delete('/deleteUser/:userId', (req, res) => {
  res.end(Users);
});