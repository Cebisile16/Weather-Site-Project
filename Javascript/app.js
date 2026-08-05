const apiKey = c09e9858e678b141e53b28da37da62da;

const button = document.getElementById("searchBtn");

button.addEventListener("click", () => {

    const city = document.getElementById("cityInput").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {

            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;

        })
        .catch(error => {
            console.log(error);
        });

});