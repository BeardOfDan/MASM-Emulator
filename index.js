const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

const publicPath = path.join(__dirname, './public/');
app.use(express.static(publicPath));

app.get('/', (req, res, next) => {
  res.send('Home Page');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
