"use strict";

function Raid(firstDay) {
    this.firstDay = firstDay;
    this.inscriptions = new Array();
    
    this.register = Raid.register;
    this.failsIfAlreadyRegistered = Raid.failsIfAlreadyRegistered;
    this.failsIfNotMatchingRaidDays = Raid.failsIfNotMatchingRaidDays;
}

Raid.register = function(inscription) {
    this.failsIfAlreadyRegistered(inscription);
    this.failsIfNotMatchingRaidDays(inscription);
    this.inscriptions.push(inscription);
}

Raid.failsIfAlreadyRegistered = function(inscription) {
    this.inscriptions.forEach(function(element) {
       if (element.player === inscription.player) {
           throw "Player already registered";
       }
    });
}

Raid.failsIfNotMatchingRaidDays = function(inscription) {

}

module.exports = Raid;