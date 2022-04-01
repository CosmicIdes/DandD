// Express server
const express = require('express');
const app = express();
const router = express.Router();


router.get('/', function (req, res, next) {
    res.status(200).send("dragon");
});

app.use('/api/', router);

var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000..');
});

app.get("https://www.dnd5eapi.co/api/spells/", (req, res) => {
    console.log('name');
});