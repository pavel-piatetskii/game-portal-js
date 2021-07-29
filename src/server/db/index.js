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
  },


  reset: () => {
    
    const runSchemaFiles = () => {
      console.log(`-> Loading Schema Files ...`);
      const schemaFiles = fs.readdirSync('./src/server/db/schema');

      return Promise.all(schemaFiles.map(file => {
        const sql = fs.readFileSync(`./src/server/db/schema/${file}`, 'utf8');
        console.log(`---> Running ${file}`);
        return pool.query(sql)
      }))
        .then(res => console.log('Schemas loaded'))
        .catch(e => console.log(e))
    };

    const runSeedsFile = () => {
      console.log(`-> Loading Seeds Files ...`);
      const seedsFiles = fs.readdirSync('./src/server/db/seeds');

      return Promise.all(seedsFiles.map(file => {
        const sql = fs.readFileSync(`./src/server/db/seeds/${file}`, 'utf8');
        console.log(`---> Running ${file}`);
        return pool.query(sql)
      }))
        .then(res => console.log('Seeds loaded'))
        .catch(e => console.log(e))
    };

    try {
      // First run schema file, only after that seeds
      runSchemaFiles()
        .then(res => runSeedsFile())
    } catch (e) {
      console.log(e);
    }
  },

  xyz: () => console.log('123'),
  
}