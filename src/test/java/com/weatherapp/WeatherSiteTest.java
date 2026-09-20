package com.weatherapp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class WeatherSiteTest {

    @Test
    void testWeatherAppName() {
        String appName = "Weather App";

        assertEquals("Weather App", appName);
    }
}