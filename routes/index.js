var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', (req, res) => {
  // Her skal jeg tjekke for korrekte credidentials
  if (req.body.username == "Witt" && req.body.password =="123") {
      res.cookie('username', req.body.username, { maxAge: 900000, httpOnly: true });
      console.log('Cookie has been set');
      console.log(`User with username: ${req.body.username}, logged in`);
      res.send("Du er logget ind.");
      

  } else {
      res.send("Fail");
      console.log(`User with username: ${req.body.username}, failed to log in`);
  }
 
});

module.exports = router;


/*
      res.cookie('username', req.body.username, { maxAge: 900000, httpOnly: true });
      console.log('Cookie has been set');
*/