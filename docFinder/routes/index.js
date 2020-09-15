var express = require('express');
var router = express.Router();
//home page for docFinder
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
