"use strict";

function Players() {

    this.add = Players.add;
    this.list = Players.list;
    this.players = new Array();
}

Players.add = function(player) {
    this.players.push(player);
};

Players.list = function() {
    return this.players;
};

module.exports = Players;