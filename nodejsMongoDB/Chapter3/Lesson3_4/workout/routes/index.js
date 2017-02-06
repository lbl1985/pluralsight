var express = require('express');
var router = express.Router();
const passport = require('../lib/passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/login')
  .get(function(req, res){
    res.render('login', {error:req.flash('error')});
  })
  .post(passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }))

router.get('/logout', function(req, res){
  req.logout();

  res.redirect('/');
})

router.get('/profile',ensureLoggedIn(), function(req, res){
  res.send('Hello ' + req.user.username);
})

module.exports = router;
