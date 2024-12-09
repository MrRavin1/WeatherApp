// const apiUrl = "https://openweathermap.org";
const apiKey = "911acb2a3487ffafd6f479fa1cb5cfab";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`

const findWeatherByCity = async (query) => {
  const res = await fetch(`${apiUrl}&q=${query}`)
 const data = await res.json();

 if(res.status === 200) {
    const city = data;
    const location = city.name;
    const weather = city.weather[0];
    const temperature = city.main;

    console.log(temperature)

    document.getElementById("temperature").innerHTML = temperature.temp + "&deg;C";

    document.getElementById("location").innerText = location + ", "+city.sys.country;
    document.getElementById("weather-desc").innerText = weather.description;

    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

    document.getElementById("feelsLike").innerHTML = temperature.feels_like + "&deg;C";
    
    document.getElementById("humidity").innerHTML = temperature.humidity + "%";

    document.getElementById("pressure").innerHTML = temperature.pressure + " hPa";

    document.getElementById("Wind").innerHTML = temperature.speed + " m/s";

    const timestamp = Math.floor(Date.now() / 1000) + data.timezone ;
    const date = new Date(timestamp * 1000);
    const localDateTime = date.toLocaleString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'UTC'
    });
document.getElementById("date-time").textContent = localDateTime;

 }
}

const querySearch = window.location.href;
const urlParams = new URL(querySearch);
const q = urlParams.searchParams.get("q");
findWeatherByCity(q ?? "braintree");