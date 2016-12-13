const express = require('express');
const app = express();
var mongoose = require('mongoose');
var User = require('./models/user');

mongoose.connect('mongodb://localhost/healthapp');

app.listen(3000, function() {
  console.log('listening on 3000')
});

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.post('/userPost', (req, res) => {
  var u = new User({
    name: 'kavitha',
    username: 'vbudumuri',
    password: 'kavitha',
    role: 'doctor'
  });
  u.save(err => {if(err) throw err; else console.log('saved');});
});
