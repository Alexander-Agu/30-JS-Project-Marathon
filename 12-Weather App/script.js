// When a user inputs the name of the city
// It will fetch data from a weather API and display its current conditions 
// If they enter an unknown city they'll be corrected to enter the correct details
//

// CONSTANT VARIABLES
const searchBTN = document.getElementById('search-btn');
const locationInput = document.getElementById('location-input');
const date = document.getElementById('date');
const locationName = document.getElementById('location-name');
const degree = document.getElementById('degree');
const highs = document.getElementById('highs');
const lows = document.getElementById('lows');
const weatherDetailsContainer = document.querySelector('.weather-details');
const image = document.getElementById('weather-img');

// When the search button is clicked it shouold display the current conditions for the desired location
searchBTN.addEventListener('click', () => {
    console.log(locationInput.value)
    loadWeatherDetails()
    displayWeather()
});

// Create current date
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

// Display html for the current weather
const displayWeather = (desc, temp, humidity, pressure) => {
    return weatherDetailsContainer.innerHTML = `
    <!-- Displays the location -->
    <div class="location-img">
        <div class="location-details">
            <p id="date">${month} ${day}, ${year}</p>

            <h1 id="location-name">${locationInput.value}</h1>
        </div>

        <img src='' id="weather-img">

        <div>
            <h2>${desc}</h2>
            <h2 id="degree">${temp}°C</h2>
        </div>

    </div>

    <!-- Displays extra information -->
    <div class="extra-info">
        <div class="highs">
            <h2>Humidity</h2>
            <h3 id="highs">${humidity}°C</h3>
        </div>
        <div class="lows">
            <h2>Pressure</h2>
            <h3 id="lows">${pressure}°C</h3>
        </div>
    </div>
    `
};

// Fetch Data from a weather API
const loadWeatherDetails = async () => {
    try {

        // Fetch data from an API
        const fetchWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&APPID=73675e5492539232cfe4995e6257db87`, {
            headers: {
                Accept: "application/json"
              }
        });

        const weatherData = await fetchWeatherData.json();
        console.log(weatherData)


        // Aassign vimportand values to variables
        const description = await weatherData.weather[0].description;
        const temperature = await weatherData.main.temp;
        const humidity = await weatherData.main.humidity;
        const pressure = await weatherData.main.pressure;

        displayWeather(description, temperature, humidity, pressure)
        

    } catch (error) {
        console.log(error)
    }
};