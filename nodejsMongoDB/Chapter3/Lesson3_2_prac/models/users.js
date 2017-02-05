'use strict';

const User = {
    names:[
        'Zebra',
        'Andrew',
        'Binlong',
        'Cindy'
    ],
    getNamesList:function() {
        return this.names.sort();
    }
}

module.exports = User;