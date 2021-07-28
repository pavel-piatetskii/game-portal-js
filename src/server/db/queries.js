const { query } = require('./index');


const getAllUsers = () => {
  const queryString = 'SELECT * FROM users;';

  return query(queryString)
    .then(res => res.rows);
};
exports.getAllUsers = getAllUsers;


const addUser = (user) => {
  const values = [user.login, user.password]
  const queryString = `
  INSERT INTO users (login, password)
  VALUES ($1, $2);
  `;
  return query(queryString, values)
    .then(res => res.rows[0]);
}
exports.addUser = addUser;
