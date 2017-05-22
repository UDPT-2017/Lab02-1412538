var pg = require('pg');

const config = {
  user: 'admin', //env var: PGUSER
  database: 'TT Message', //env var: PGDATABASE
  password: 'admin', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 100, // max number of clients in the pool
  idleTimeoutMillis: 10000, // how long a client is allowed to remain idle before being closed
};

module.exports = config;
