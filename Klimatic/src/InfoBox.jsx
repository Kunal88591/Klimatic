import "./InfoBox.css";
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider
} from '@mui/material';

const InfoBox = ({ Result }) => {
  if (!Result) return null; // ✅ Prevent rendering if Result is undefined

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: 'auto',
        mt: 4,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: '#f5f5f5',
        padding: 2
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          🌦️ Weather in {Result.location}, {Result.sys.country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Updated at: {formatTime(Result.timestamp)}
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle2">🌡️ Temperature</Typography>
            <Typography>Current: {Result.temperature.current}°C</Typography>
            <Typography>Feels Like: {Result.temperature.feels_like}°C</Typography>
            <Typography>Min: {Result.temperature.min}°C</Typography>
            <Typography>Max: {Result.temperature.max}°C</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2">🌬️ Wind</Typography>
            <Typography>Speed: {Result.wind.speed} m/s</Typography>
            <Typography>Gust: {Result.wind.gust} m/s</Typography>
            <Typography>Direction: {Result.wind.degree}°</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2">💧 Humidity & Pressure</Typography>
            <Typography>Humidity: {Result.temperature.humidity}%</Typography>
            <Typography>Pressure: {Result.temperature.pressure} hPa</Typography>
            <Typography>Sea Level: {Result.temperature.sea_level} hPa</Typography>
            <Typography>Ground Level: {Result.temperature.ground_level} hPa</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2">🌧️ Rain & Clouds</Typography>
            <Typography>Rain (1h): {Result.rain.last_1h_mm} mm</Typography>
            <Typography>Cloud Cover: {Result.clouds.coverage}%</Typography>
            <Typography>Weather: {Result.weather.main}</Typography>
            <Typography>Description: {Result.weather.description}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">🌇 Sunrise / Sunset</Typography>
            <Typography>
              Sunrise: {formatTime(Result.sys.sunrise)} | Sunset: {formatTime(Result.sys.sunset)}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2">📍 Coordinates</Typography>
            <Typography>Lat: {Result.coordinates.lat}</Typography>
            <Typography>Lon: {Result.coordinates.lon}</Typography>
            <Typography>Visibility: {Result.visibility} meters</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
