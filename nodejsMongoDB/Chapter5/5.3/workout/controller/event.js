'use strict';

const express = require('express');
const router = express.Router();
const Event = require('./../models/Event');
const config = require('./../config/config');

router.get('/scrape', function(req, res, next){
    if(req.query.token != config.token){
        return res.status(400).send('Bad Request');
    }
    Event.apiGetPastEvent(function(error, events){
        if(error) {
            return next(error);
        }
        Event.saveEvents(events.results, function(error){
            if(error){
                return next(error);
            }
            res.send('Scrape completed');
        });
    });
});

module.exports = router;