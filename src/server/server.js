const express = require('express');
const path = require('path');

const db = require('./db/queries')
const apiRoutes = require('./routes/apiRoutes')

const app = express();

// Set middleware JSON body parser
app.use(express.json());

app.use('/', express.static("dist"));

// app.get('/api/users', (req, res) => res.send('GET handler'));

const apiRouter = express.Router();
apiRoutes(apiRouter, db);
app.use('/api', apiRouter);

// app.post('/api/users', (req, res) => {
//   console.log(req.body);
//   res.sendStatus(200);
// });



app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'../../../dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => 
  console.log(`Server listening on port ${process.env.PORT || 8080}`)
);