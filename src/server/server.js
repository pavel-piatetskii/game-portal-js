const express = require('express');
const path = require('path');

const app = express();

//app.use("/", express.static("dist"));
app.use("/", express.static("dist"));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'../../../dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => 
  console.log(`Server listening on port ${process.env.PORT || 8080}`)
);