const {
  validateCity,
  getWeatherMessage,
  getErrorMessage,
} = require("../frontend");

test("accepts a city name", () => {
  expect(validateCity("Johannesburg")).toBe(true);
});

test("rejects empty city input", () => {
  expect(validateCity("   ")).toBe(false);
});

test("gets weather information from API data", () => {
  const data = {
    name: "Johannesburg",
    main: {
      temp: 25,
      humidity: 60,
    },
    weather: [
      {
        description: "clear sky",
      },
    ],
  };

  const result = getWeatherMessage(data);

  expect(result.city).toBe("Johannesburg");
  expect(result.temperature).toBe(25);
  expect(result.weather).toBe("clear sky");
  expect(result.humidity).toBe(60);
});

test("returns the weather error message", () => {
  expect(getErrorMessage()).toBe("Unable to find weather for this city.");
});
