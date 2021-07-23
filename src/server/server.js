const express = require('express');
const path = require('path');

const app = express();

// Set middleware JSON body parser
app.use(express.json());

app.use('/', express.static("dist"));

app.get('/api/users', (req, res) => res.send('GET handler'));

app.post('/api/users', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});



app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'../../../dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => 
  console.log(`Server listening on port ${process.env.PORT || 8080}`)
);