import { useState } from 'react';
import Searchbox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="weather-app-wrapper">
      <div className="weather-app-container">
        <h1 className="app-title">🌤️ Weather Forecast</h1>

        <Searchbox 
          onResult={(data) => {
            setWeatherData(data);
            setError(null);
          }}
          onLoading={setLoading}
          onError={setError}
        />

        {loading && (
          <div className="status-message loading-indicator">
            Fetching weather data...
          </div>
        )}

        {error && (
          <div className="status-message error-message">
            ❌ Error: {error}
          </div>
        )}

        {weatherData && !loading && (
          <InfoBox Result={weatherData} />
        )}

        {!weatherData && !loading && !error && (
          <div className="welcome-message">
            <p>Enter a city to get started</p>
            <div className="weather-icon">⛅</div>
          </div>
        )}
      </div>
    </div>
  );
}
