// Express server
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
  app.get('/json/', (req, res) => {
    request(
      { url: 'https://localhost:5000' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });

router.get('/', function (req, res, next) {
    res.status(200).send("dragon");
});

app.use('/api/', router);

var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000..');
});

