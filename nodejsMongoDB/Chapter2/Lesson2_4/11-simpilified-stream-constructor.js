'use strict';

const stream = require('stream');
const transform = new stream.Transform({
    transform: function(chunk, encoding, next){
        // console.log(chunk);
    },
    flush: function(done) {
        // console.log('this is done');
    }
});