import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ onResult, onLoading, onError }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "644e73ad662368d3cbb1406ec1cbf8a9";

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!city.trim()) {
      onError("Please enter a valid city name.");
      return;
    }

    try {
      onLoading(true);
      onError(null);

      const response = await fetch(
        `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        onError(jsonResponse.message || "City not found.");
        onLoading(false);
        return;
      }

      const result = {
        location: jsonResponse.name,
        coordinates: {
          lat: jsonResponse.coord.lat,
          lon: jsonResponse.coord.lon,
        },
        temperature: {
          current: jsonResponse.main.temp,
          feels_like: jsonResponse.main.feels_like,
          min: jsonResponse.main.temp_min,
          max: jsonResponse.main.temp_max,
          pressure: jsonResponse.main.pressure,
          sea_level: jsonResponse.main.sea_level,
          ground_level: jsonResponse.main.grnd_level,
          humidity: jsonResponse.main.humidity,
        },
        weather: {
          main: jsonResponse.weather[0]?.main,
          description: jsonResponse.weather[0]?.description,
          icon: jsonResponse.weather[0]?.icon,
        },
        clouds: {
          coverage: jsonResponse.clouds?.all,
        },
        rain: {
          last_1h_mm: jsonResponse.rain?.["1h"] || 0,
        },
        wind: {
          speed: jsonResponse.wind?.speed,
          degree: jsonResponse.wind?.deg,
          gust: jsonResponse.wind?.gust,
        },
        visibility: jsonResponse.visibility,
        sys: {
          country: jsonResponse.sys?.country,
          sunrise: jsonResponse.sys?.sunrise,
          sunset: jsonResponse.sys?.sunset,
        },
        timezone: jsonResponse.timezone,
        base: jsonResponse.base,
        timestamp: jsonResponse.dt,
        code: jsonResponse.cod,
      };

      onResult(result);
    } catch (error) {
      onError("Failed to fetch data. Please check your internet connection.");
    } finally {
      onLoading(false);
      setCity("");
    }
  };

  return (
    <div className="search-box">
      <p className="search-subtitle">Enter a city to get the forecast</p>

      <form onSubmit={handleSubmit} className="search-form">
        <TextField
          label="City Name"
          variant="outlined"
          fullWidth
          required
          value={city}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" className="search-button">
          Search
        </Button>
      </form>

      {!city.trim() && (
        <div className="welcome-message-inline">
          <p>Enter a city name to begin</p>
          <div className="weather-icon">⛅</div>
        </div>
      )}
    </div>
  );
}
