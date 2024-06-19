// Create web server
const express = require('express');
const app = express();
// Create a route
app.get('/comments', (req, res) => {
  res.send('Hello from comments.js');
});
// Export the route
module.exports = app;