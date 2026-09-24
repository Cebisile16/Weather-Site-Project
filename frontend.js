function validateCity(city) {
  return city.trim() !== "";
}

function getWeatherMessage(data) {
  return {
    city: data.name,
    temperature: data.main.temp,
    weather: data.weather[0].description,
    humidity: data.main.humidity,
  };
}

function getErrorMessage() {
  return "Unable to find weather for this city.";
}

module.exports = {
  validateCity,
  getWeatherMessage,
  getErrorMessage,
};
