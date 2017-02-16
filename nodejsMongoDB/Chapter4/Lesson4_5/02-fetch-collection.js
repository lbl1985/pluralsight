'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/mongodb';

MongoClient.connect(url, function(error, db){
    assert.equal(null, error);

    const restaurants = db.collection('restaurants');

    console.log(restaurants.namespace);

    db.close();
});