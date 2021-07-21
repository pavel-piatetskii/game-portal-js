const express = require('express');

const app = express();

app.listen(process.env.PORT || 8080, () => 
  console.log(`Server listening on port ${process.env.PORT || 8080}`)
);