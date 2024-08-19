// When a user inputs the name of the city
// It will fetch data from a weather API and display its current conditions 
// If they enter an unknown city they'll be corrected to enter the correct details
//

// CONSTANT VARIABLES
const searchBTN = document.getElementById('search-btn');
const locationInput = document.getElementById('location-input');
const dateEl = document.getElementById('date');
const temperatureEl = document.getElementById("temp");
const locationEl = document.getElementById('location');
const pressureEl = document.getElementById('pressure');
const humidityEl = document.getElementById('humidity');
const descriptionEl = document.getElementById("description");
const image = document.getElementById('weather-img');
const southAfricaCapitals =["Cape Town", "Pretoria", "Bloemfontein"]
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// When the search button is clicked it shouold display the current conditions for the desired location
searchBTN.addEventListener('click', async () => {
    let details = await loadWeatherDetails(locationInput.value);
    if(!details){
     return;
    }
   displayWeather(details);
});

const getDate =() =>{
  let dateObj = new Date();
  let month = monthNames[dateObj.getUTCMonth()];
  let day = dateObj.getUTCDate() - 1;
  let year = dateObj.getUTCFullYear();
  let today = `${day} ${month} ${year}`
  return  today;
}

// Display html for the current weather
const displayWeather = ({loc,desc,temp,humidity,pressure}) => {
  console.log(loc,desc,temp,humidity,pressure);
  locationEl.innerText = loc;
  dateEl.innerText = getDate();
  descriptionEl.innerText = desc.charAt(0).toUpperCase() + desc.slice(1);
  temperatureEl.innerText = temp.toFixed();
  humidityEl.innerText = humidity.toFixed();
  pressureEl.innerText = pressure.toFixed();
};

// Fetch Data from a weather API
const loadWeatherDetails = async (location) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=73675e5492539232cfe4995e6257db87&units=metric`;
    try {
        // Fetch data from an API
        const fetchWeatherData = await fetch(url, {
            headers: {
                Accept: "application/json"
              }
        });

        const weatherData = await fetchWeatherData.json();
        console.log(weatherData);
        if(weatherData.cod != 200){
          window.alert(weatherData.message);
          throw new Error(weatherData.message);
        }; 
        return {
          loc: await weatherData.name,
          desc: await weatherData.weather[0].description,
          temp: await weatherData.main.temp,
          humidity: await weatherData.main.humidity,
          pressure: await weatherData.main.pressure
        }
        
    } catch (error) {
        console.error(error)
    }
}

const main =async()=>{
  const randomNumber = Math.floor(Math.random()*3);
  const capital = southAfricaCapitals[randomNumber];
  locationInput.value = capital;
  let details = await loadWeatherDetails(capital);
  displayWeather(details);
  locationInput.focus();
};

main();
