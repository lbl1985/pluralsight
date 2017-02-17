'use strict';

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, lowercase:true},
    passowrd: String,
    firstName: {type: String, required: 'First Name is required'},
    lastName: {type: String, default: ''},
    age: {type: Number, min: 18, default: 18}
});

userSchema.plugin(passportLocalMongoose);

userSchema.methods.sayHello = function () {
    return `Hello, I'm ${this.firstName}`;
}

userSchema.statics.findByName = function(name, callback){
    const query = {
        $or: [
            {
                firstName: name
            },
            {
                lastName: name
            }
        ]
    };
    return this.find(query, callback);
}

userSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
});

// post hook, after the document is saved
userSchema.post('save', function(user){
    console.log('%s has been saved', user._id);
    console.log('%s has been saved', user.id);
});

userSchema.statics.findByNameSafe = function(name, callback) {
    const query = {
        $or: [
            {
                firstName: {
                    $in:[name]
                }
            },
            {
                lastName:{
                    $in:[name]
                }
            }
        ]
    };
    return this.find(query, callback);
}

module.exports = mongoose.model('User', userSchema);