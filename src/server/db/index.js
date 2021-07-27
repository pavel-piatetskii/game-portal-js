const { Pool } = require('pg');

const pool = new Pool ({
  user: 'portalserver',
  password: 'testpassword',
  host: 'localhost',
  database: 'gameportal'
});

module.exports = {

  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
  
}