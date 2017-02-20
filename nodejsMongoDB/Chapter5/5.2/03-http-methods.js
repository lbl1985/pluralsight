 'use strict';
 const express = require('express');
 const app = express();
 const router = express.Router();

 // http://expressjs.com/4x/api/html#app.METHOD
 app.route('/events')
    .get(function(req, res){
        //
    })
    .post(function(req, res){
        // http://expressjs.com/4x/api.html#app.post.method
    })
    .put(function(req, res){
        // http://expressjs.com/4x/api.html#app.put.method
    })
    .delete(function(req, res){
        // http://expressjs.com/4x/api.html#app.delete.method
    })
;

router.get('/events', function(req, res){
    //http://expressjs.com/4x/api.html#router.METHOD
});