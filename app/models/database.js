var pg = require('pg');
var config = require('../../config/database');
const pool = new pg.Pool(config);
module.exports = pool;
