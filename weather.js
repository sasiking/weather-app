
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city)=>{
    const URL = "https://api.openweathermap.org/data/2.5/weather";

    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    
    const weatherPromise = fetch(FULL_URL);

    return weatherPromise.then((response)=>{
        return response.json();
    })
}

searchCity = () => {
    const city = document.getElementById('city-input').value;
    // CODE GOES HERE
    getWeatherData(city)
        .then((response)=>{
            showWeatherData(response);
        }).catch((error)=>{
            console.log(error);
        })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
    //CODE GOES HERE
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.weather[0].main;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}


