const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res, next) => {
  res.send('Home Page');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
