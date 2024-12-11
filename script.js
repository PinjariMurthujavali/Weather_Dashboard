let isCelsius = true;
let favorites = [];

function getWeather() {
    const city = document.getElementById('city-input').value.trim();
    if (!city) {
        alert('Please enter a city');
        return;
    }

    // Static weather data for demonstration purposes
    const weatherData = {
        temperature: isCelsius ? 22 : 72, // Example temperature
        humidity: '60%', // Example humidity
        windSpeed: isCelsius ? '15 km/h' : '9 mph', // Example wind speed
        condition: 'Clear sky', // Example weather condition
        icon: 'https://openweathermap.org/img/wn/01d@2x.png' // Example weather icon
    };
    displayWeather(city, weatherData);
}

function displayWeather(city, data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h3>Current Weather in ${city}</h3>
        <p>Temperature: ${data.temperature}°${isCelsius ? 'C' : 'F'}</p>
        <p>Humidity: ${data.humidity}</p>
        <p>Wind Speed: ${data.windSpeed}</p>
        <p>Condition: ${data.condition}</p>
        <img src="${data.icon}" alt="${data.condition}">
    `;
}

function toggleUnits() {
    isCelsius = !isCelsius;
    document.getElementById('unit-toggle').textContent = isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius';
}

function saveToFavorites() {
    const city = document.getElementById('city-input').value.trim();
    if (!city || favorites.includes(city)) {
        alert('City is already in favorites or invalid!');
        return;
    }

    favorites.push(city);
    document.getElementById('favorites').textContent = favorites.join(', ');
}
