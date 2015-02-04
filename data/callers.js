var couchdb = require('../services/couchdb');
var CallersData = {};

CallersData.db = couchdb.database('fishcenter_callers');

module.exports = CallersData;