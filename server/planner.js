var express = require('express');
var bodyParser = require('body-parser');
var Players = require('./players.js');


var router = express();
var players = new Players();

router.use(bodyParser.json());

router.get('/player', function(req, res) {
    res.send(JSON.stringify(players.list()));
});

router.post('/player', function(req, res) {
    req.accepts('application/json');
    var player = req.body;
    players.add(player);
    res.send("ok");
});


router.listen(process.env.PORT);