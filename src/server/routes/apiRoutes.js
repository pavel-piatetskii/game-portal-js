module.exports = (router, db) => {

  router.get('/users', (req, res) => {
    db.getAllUsers()
      .then(data => res.send({data}))
      .catch(e => {console.log(e); res.send(e)})
  })

};