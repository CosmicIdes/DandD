// Express server
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

router.get('/', function (req, res, next) {
    res.status(200).send("dragon");
});

app.use('/api/', router);

app.use(cors());

var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000..');
});

