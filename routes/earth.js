var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('earth', { title: 'FishCenter Map' });
});

module.exports = router;
