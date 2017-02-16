'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/mongodb';

MongoClient.connect(url, function(error, db){
    assert.equal(null, error);

    console.log("Connected to MongoDB server");

    const person = {name: 'Binlong', age: 32};

    db.collection('test').insertOne(person, function(error, results){
        assert.equal(null, error);
        console.log('Documents inserted: ' + results.insertedCount);
        console.log('ID: ' + results.insertedId);
        db.close();
    })
});