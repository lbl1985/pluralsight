'use strict';
// curl http://127.0.0.1:3000
// curl -X POST http://127.0.0.1:3000
const express = require('express');
const app = express();

app.all('/', function(request, response, next){
    console.log('Execute an all (' + request.method + ') methods');
    
    next();
});

app.get('/', function(request, response){
    response.send('Hello world from get message');
});

app.post('/', function(request, response){
    response.send('Responding from post message');
});

app.listen(3000);

console.log('open http://127.0.0.1:3000');