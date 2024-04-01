
const apikey = "332280245bdf0f36199be40e41f042e1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "imagess/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "imagess/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "imagess/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "imagess/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "imagess/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "imagess/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
