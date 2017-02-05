'use strict';
// curl http://127.0.0.1:3000
// curl -X POST http://127.0.0.1:3000
const express = require('express');
const app = express();

app.route('/')
    .all(function(request, response, next){
        console.log('Executed an all (' + request.method + ') methods');
        next();
    })
    .get(function(request, response){
        response.send('Hello world from get message');
    })
    .post(function(request, response){
        response.send('Responding from post message');
    })
;

app.get('/about', function(request, response){
    response.send('About page');
})

app.get('/bo+o', function(request, response){
    response.send('booo Page');
})

app.get(/.*ula$/, function(request, response){
    response.send('Bla Bla Bla');
})

app.get('/multiple', function(request, response, next){
    response.user = 'Andrew';
    response.msg = 'Response from first stage\n';
    next();
}, function(request, response){
    response.send(response.msg + 'Hello ' + response.user);
});

app.get('/skip', function(request, response, next){
    console.log('Will skip the rest');
    next('route');
}, function(request, response){
    response.send('Never Called');
})

app.listen(3000);

console.log('open http://127.0.0.1:3000');