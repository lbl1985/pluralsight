'use strict';

const express = require('express');
const app = express();
const router = express.Router();

// http://expressjs.com/4x/api.html#app.route
app.route('/events')
    .get(function(req, res){
        //
    })
    .post(function(req, res){
        //
    })
;

// http://expressjs.com/4x/api.html#router.route
router.route('/events')
    .get(function(req, res){
        //
    })
    .post(function(req, res){
        //
    })
;
