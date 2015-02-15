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
            var player = new Player("zogzog", "shaman", "healer");
            raid.register(new Inscription(player, [new Date()], null));
            var exception;
            try {
                raid.register(new Inscription(player, [new Date()], null));
            }
            catch (err) {
                exception = err;
            }
            exception.should.be.exactly("Player already registered");
        })

        it('fails if has a date before raid begining', function() {
            var today = new Date();
            var raid = new Raid(today);
            var player = new Player("zogzog", "shaman", "healer");
            
            var exception;
            try {
                raid.register(new Inscription(player, [new Date(today - 1000*60*60*24)], null));
            }
            catch (err) {
                exception = err;
            }
            exception.should.be.exactly("Inscription not in raid days");
        })
    })
})
