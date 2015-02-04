var express = require('express');
var router = express.Router();

var CallersController = require('../controllers/callers');

/* GET all callers. */
router.get('/', CallersController.getCallers);
router.get('/', function (req, res) {
    res.send({ callers: req.callers });
});

router.post('/', CallersController.saveCaller);
router.post('/', function (req, res) {
    res.send( req.caller );
});

router.delete('/:id', CallersController.deleteCaller);
router.delete('/:id', function (req, res) {
    res.send({ caller: req.caller });
});

module.exports = router;