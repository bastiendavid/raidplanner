"use strict";

var assert = require("assert");
var should = require('should');
var Player = require("../common/player.js");
var Inscription = require("../common/inscription.js");
var Raid = require("../common/raid.js");

describe('Raid', function() {
    describe('inscription', function() {
        it('fails if player already registered', function() {
            var raid = new Raid(new Date());
            var player = new Player("player", "shaman", "healer");
            var inscription = new Inscription(player, null, null);
            raid.register(inscription);
            var inscription2 = new Inscription(player, null, null);
            var exception;
            try {
                raid.register(inscription2);
            }
            catch (err) {
                exception = err;
            }
            exception.should.be.exactly("Player already registered");
        })
    })
})
