'use strict';

const fs = require('fs');
const stream = fs.createWriteStream('output.txt');

stream.write('Hello ');
stream.write('World');

stream.end('THE END');

stream.on('finish', function(){
    console.log('Finished writing to stream');
})

stream.on('error', function(error){
    console.log('Did you call write after end() method?') ;
    console.log(error.stack);
})

stream.write('Not allowed to write after the end()');