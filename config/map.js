var Config = require('nconf');

Config.argv().env();

Config.file('map', './config/map.json');

module.exports = Config;