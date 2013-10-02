package fr.gow.raidplanner.model;

import java.util.Date;

public class Player {
    private String name;

    public Player(String name) {
        this.name = name;
    }

    public void markAsAvailableOn(RaidingDay raidingDay) {

    }

    public void markAsUnavailableOn(RaidingDay raidingDay) {

    }

    public boolean isAvailableOn(RaidingDay raidingDay) {
        return false;
    }
}