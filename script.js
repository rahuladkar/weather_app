let API_KEY = "a0cb72f16993b7c81d15319a8ea60d22";
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

// const url = `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}&units=metric`;

// const img = `https://openweathermap.org/img/wn/${}@2x.png`

const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
    <div id="dets">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <h1>${data.main.temp}&deg;C</h1>
        <h4> ${data.weather[0].main}</h4>
        <h3>${data.name}</h3>
    </div>
    <div id="footer">
        <div id="left">
            <i class="ri-water-percent-fill"></i>
            <h3>${data.main.humidity}% <span>Humidity</span></h3>
        </div>
        <div id="right">
            <i class="ri-windy-line"></i>
            <h3>${data.wind.speed} Km/hr <span>Wind Speed</span></h3
        </div>
    </div>
    `
}

form.addEventListener("submit", function (event) {
    getWeather(search.value)
    event.preventDefault();
}
)