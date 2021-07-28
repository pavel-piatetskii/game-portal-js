const { query } = require('./index');

const getAllUsers = () => {
  const queryString = 'SELECT * FROM users;';

  return query(queryString)
    .then(res => res.rows);
};
exports.getAllUsers = getAllUsers;