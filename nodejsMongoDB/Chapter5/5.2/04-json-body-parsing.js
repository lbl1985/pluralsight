'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// http://expressjs.com/4x/api.html#req.body
app.use(bodyParser.json());

// Sending the JSON request: {title: "The title of the event"}
app.post('/events', function(req, res){
    const event = {
        id: 1,
        title: req.params.title
    };
    req
        // http://expressjs.com/4x/api.html#res.status
        .status(201)
        // http://expressjs.com/4x/api.html#res.json
        .json(event);
    ;
});