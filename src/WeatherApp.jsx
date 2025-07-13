import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './WeatherApp.css';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResult = (data) => {
    setWeatherData(data);
    setError(null);
  };

  return (
    <section className="weather-app-wrapper">
      <div className="weather-app-container">
        <h1 className="app-title">🌤️ Klimatic</h1>

        <SearchBox
          onResult={handleResult}
          onLoading={setLoading}
          onError={setError}
        />

        {loading && (
          <div className="status-message loading">
            🔄 Fetching weather data...
          </div>
        )}

        {error && (
          <div className="status-message error">
            ❌ {error}
          </div>
        )}

        {!loading && weatherData && (
          <InfoBox result={weatherData} />
        )}
      </div>
    </section>
  );
}
