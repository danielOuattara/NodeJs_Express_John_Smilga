const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');


//logger middleware active for every routes
app.use([logger, authorize]);

//logger middleware active for '/api' route and any other route below it , like /api/***etc 
// app.use('/api', logger);


// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  // test for: /api/items?user=daniel
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
