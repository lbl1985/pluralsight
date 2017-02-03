'use strict';
// type in npm install --save express to make this app work.
const express = require('express');
const app = express();

app.get('/', function(request, response){
    response.send('Hello World');
});

app.listen(3000);

console.log('Open http://127.0.0.1:3000');