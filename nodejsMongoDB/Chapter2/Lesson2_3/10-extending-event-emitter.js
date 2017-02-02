'use strict';

const util = require('util');
const EventEmitter = require('events').EventEmitter;

const Box = function() {
    let self = this;
    EventEmitter.call(this);

    setTimeout(function(){
        self.emit('newMail');
    });

    self.on('delete', function(id){
        console.log('Deleing mail with id: ' + id);
    })
};

util.inherits(Box, EventEmitter);

module.exports = Box;