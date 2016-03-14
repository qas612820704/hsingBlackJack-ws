var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  console.log('req.path', req.path);
  res.render('partial'.concat(req.path));
});

module.exports = router;
