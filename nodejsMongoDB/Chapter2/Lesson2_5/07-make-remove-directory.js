'use strict';

const fs = require('fs');
const path = './temp/dir-from-script';

fs.mkdir(path, function(error){
    if(error) {
        throw error;
    }

    console.log('Directory created');
});

fs.rmdir(path, function(error){
    if(error) {
        console.log('Directory does not existed');
    } else {
        console.log('Directory removed');
    }
});