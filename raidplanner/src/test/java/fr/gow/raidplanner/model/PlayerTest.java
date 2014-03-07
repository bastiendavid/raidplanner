package fr.gow.raidplanner.model;

import org.fest.assertions.api.Assertions;
import org.junit.Ignore;
import org.junit.Test;
import org.mockito.Mockito;

/**
 * Created with IntelliJ IDEA.
 * User: BDA10262
 * Date: 30/09/13
 * Time: 13:44
 * To change this template use File | Settings | File Templates.
 */
public class PlayerTest {

    @Test
    @Ignore
    public void markAsAvailable() {
        // Given
        Player player = new Player("Player name");
        RaidingDay raidingDay = Mockito.mock(RaidingDay.class);

        // When
        player.markAsAvailableOn(raidingDay);
        boolean available = player.isAvailableOn(raidingDay);

        // Then
        Assertions.assertThat(available).isTrue();
    }
}
