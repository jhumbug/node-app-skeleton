var _ = require('lodash');
var moment = require('moment');
// _.str = require('underscore.string');
// var async = require('async');
// var fs = require('fs');
// var gm = require('gm');
// var Imagemin = require('imagemin');
// var moment = require('moment');

// var FTPController = require('../controllers/ftp');

var Config = require('../config/map');
var CallersData = require('../data/callers');

var controller = {};

/* Middlewares */

controller.getCallers = function (req, res, next) {
    CallersData.db.view('callers/all', { descending: true }, function (err, doc) {
        if (err) return next(err);
       
        var callers = [];

        _.forEach(doc, function(caller) { 
            callers.push(caller.value); 
        });

        req.callers = callers;
        
        next();
    });
}

controller.saveCaller = function (req, res, next) {
    var time = moment().unix();

    var callerObj = {
        "created": time,
        "modified": time
    };

    var callerObj = _.extend(req.body, callerObj)


    CallersData.db.save(callerObj, function(err, newCaller) {
        // if err 
        if (err) res.status(500).json({ message: err.message }); 
        // we're all done
        req.caller = newCaller;

        next();
    });
}

controller.deleteCaller = function (req, res, next) {
    if (!req.params.id) return next();
    CallersData.db.remove(req.params.id, function (err, doc) {
        req.caller = doc;

        next();
    });
}

exports = module.exports = controller;
