import React, { useEffect, useState } from "react";
import { Search, Droplets, Wind, Sun, Cloud, CloudRain } from "lucide-react";

function Weather() {
  const allIcon = {
    "01d": <Sun size={80} />,
    "01n": <Sun size={80} />,
    "02d": <Cloud size={80} />,
    "02n": <Cloud size={80} />,
    "09d": <CloudRain size={80} />,
    "09n": <CloudRain size={80} />,
  };

  const [weatherData, setWeatherData] = useState(null);
const [city, setCity] = useState("");


  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      const icon = allIcon[data.weather[0].icon] || <Sun size={80} />;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search ("lahore");
  }, []);

  return (
    <div className="container">
      {weatherData && (
        <div className="inpp">
          <div className="ii">
            <input type="text" placeholder="Search" value = {city} onChange={(e) => {
              setCity(e.target.value)
             onkeydown((e) => 
              {
                if (e.key === "Enter") search(city)
              })
            }} />
            <button onClick={() => {
search(city)
            }}>
              <Search size={22} />
            </button>
          </div>

          <div className="iii">
            {weatherData.icon}

            <h2>{weatherData.temperature}°C</h2>
            <h3>{weatherData.location}</h3>
          </div>

          <div className="bottom">
            <div className="b1">
              <Droplets size={22} />
              <p>{weatherData.humidity}%</p>
              <p>Humidity</p>
            </div>

            <div className="b2">
              <Wind size={22} />
              <p>{weatherData.windSpeed} km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;