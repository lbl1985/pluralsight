'use strict';

const fs = require('fs');

fs.readdir('./temp', function(error, files){
    if(error) {
        throw error;
    }

    console.log('Here are the files and directorires in directory:');
    console.log(files);
})