function changeCity() {
    let city = prompt("Enter a city name:");

    if (city) {
        document.getElementById("city-heading").innerHTML =
            `Currently 21° in ${city}`;
    }
}

const changeCityButton = document.querySelector(".change-city");

changeCityButton.addEventListener("click", changeCity);
console.log("Weather App Loaded!");