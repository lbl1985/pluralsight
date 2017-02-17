var express = require('express');
var router = express.Router();
const passport = require('./../config/passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const User = require('./../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res){
  const user = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }

  User.register(new User(user), req.body.password, function(error, user){
    if(error) {
      let message = error.message + '\n';
      if(error && error.errors && error.errors.firstName){
        message = error.errors.firstName.message;
      }
      return res.send(message);
    }
    res.send('User ' + user.fullName + " registered");
  })  
});

router.post('/hello', function(req, res, next){
  const id = req.body.id;
  
  User.findById(id, function(error, user) {
    if(error) {
      return next(error);
    }
    if(!user) {
      return res.send(`User ${id} not found`);
    }
    res.send(user.sayHello());
  })
})

router.post('/static-method', function(req, res){
  const name = req.body.name;
  User.findByName(name, function(error, users){
    res.json({'users': users});
  })
})

// update the document with retriving it first
router.post('/update', function(req, res, next){
  const id = req.body.id;

  User.findById(id, function(error, user){
    if(error) {
      return next(error);
    }
    if(!user) {
      return res.send(`User {id} is not found`);
    }

    user.age += 3;

    user.save(function(error){
      if(error) {
        return next(error);
      }

      res.send(user);
    });
  });
});

// Update the document without retriving that
router.post('/update2', function(req, res, next){
  const id = req.body.id;

  const conditions = {_id: id};
  const changes = {$set: {age: 90}};
  const options = {runValidation: true};

  User.update(conditions, changes, options, function(error, raw){
    if(error) {
      return next(error);
    }
    res.send('Updated');
  })
})

// Update the document by using find the id and update
router.post('/update3', function(req, res, next){
  const id = req.body.id;

  const changes = {$unset:{firstName: true}, $set: {age: 66}};

  User.findByIdAndUpdate(id, changes, function(error, user){
    if(error) {
      return next(error);
    }

    res.send(user);
  })
});
module.exports = router;
