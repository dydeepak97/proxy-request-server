const express = require('express');
const path = require('path');
const request = require('request');

const app = express();

// /fetch?url=http://www.google.com

app.get('/fetch', function(req, res) {  
  request(req.query.url, function (error, response, body) {
    if (response && response.statusCode && response.statusCode === 200) {
      res.status(200).send(body);
    } else {
      res.status(500).send();
    }
  });
});


app.listen(process.env.PORT || 8080, () => console.log('Running ...'));
