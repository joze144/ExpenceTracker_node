var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/insert/:full_name/:facebook_id', function(req, res, next) {
  res.send('insert user with facebookId: ' + req.params.facebook_id + ' and name: ' + req.params.full_name);
});

module.exports = router;