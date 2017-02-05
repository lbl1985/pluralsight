'use strict';

const express = require('express');
const app = express();

const users = require('./controllers/users');

app.get('/', function(request, response){
    response.send('Hello world from lesson 3.2 prac');
})

app.use('/users', users);

app.listen(3000);
console.log('Open http://127.0.0.1:3000');
