module.exports = (router, db) => {

  router.get('/users', (req, res) => {
    db.getAllUsers()
      .then(data => res.send({data}))
      .catch(e => {console.log(e); res.send(e)});
  });

  router.post('/users', (req, res) => {
    db.addUser(req.body)
      .then(data => res.sendStatus(200))
      .catch(e => {console.log(e); res.send(e)});
    // db.getAllUsers()
    //   .then(data => res.send({data}))
    //   .catch(e => {console.log(e); res.send(e)})
  });

};