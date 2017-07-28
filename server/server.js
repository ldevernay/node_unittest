const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Bob',
      age: 34
    },
    {
      name: 'Jesus',
      age: 33
    }]);
  })

  app.get('/help', (req, res) => {
    res.status(404).send({
      error: "Help not found.",
      name: "Busy"
    });
  });

  app.listen(3000);

  module.exports.app = app;
