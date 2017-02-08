var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mustache', function(req, res){
  res.render('mustache', {
    name: 'Andrew',
    htmlString: 'This <strong>contains</strong> HTML tags',
    isLoggedIn: true,
    isAdmin: false,
    names: [
      'Andrew',
      'Cindy',
      'Brain'
    ],
    emptyList: [],
    user:{
      firstName: 'Binlong',
      lastName: 'Li',
      contacts: {
        twitter: 'lbl1985',
        email: 'herbert19lee@gmail.com'
      }
    }
  })
})
module.exports = router;
