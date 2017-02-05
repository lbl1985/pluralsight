'use strict';

const express = require('express');
const router = express.Router();

const path = require('path');
const users = require('../models/users');

router.get('/', function(request, response){
    console.log(users.getNamesList());
    response.sendFile(path.resolve('views/names.html'));
})

module.exports = router;