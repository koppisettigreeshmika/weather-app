const apiKey = "YOUR_API_KEY";

async function getWeather(){

    const city = document.getElementById("city").value;
    const weatherDiv = document.getElementById("weather");

    if(city===""){
        weatherDiv.innerHTML="<p>Please enter a city name.</p>";
        return;
    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod=="404"){
            weatherDiv.innerHTML="<p>City not found!</p>";
            return;
        }

        weatherDiv.innerHTML=`
        <h2>${data.name}</h2>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>☁ Weather: ${data.weather[0].main}</p>
        `;

    }
    catch(error){
        weatherDiv.innerHTML="<p>Error fetching weather data.</p>";
    }

}
