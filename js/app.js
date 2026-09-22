const button = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

button.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    weatherResult.innerHTML = "<p>Please enter a city.</p>";
    return;
  }

  weatherResult.innerHTML = "<p>Loading weather...</p>";

  fetch(`http://127.0.0.1:5000/api/weather?city=${encodeURIComponent(city)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }

      return response.json();
    })
    .then((data) => {
      weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
    })
    .catch((error) => {
      console.log(error);
      weatherResult.innerHTML = "<p>Unable to find weather for this city.</p>";
    });
});

console.log("Weather app loaded successfully");
