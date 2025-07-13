import "./InfoBox.css";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

const InfoBox = ({ result }) => {
  if (!result) return null;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 700,
        margin: "2rem auto",
        borderRadius: 4,
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        backgroundColor: "#fdfdfd",
        padding: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: "#1565c0", textAlign: "center" }}>
          ⛅ Weather in {result.location}, {result.sys.country}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: "center" }}>
          Last updated: {formatTime(result.timestamp)}
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          {/* Temperature */}
          <Grid item xs={12} md={6}>
            <div className="info-subcard">
              <Typography variant="subtitle2">🌡️ Temperature</Typography>
              <Typography>Current: {result.temperature.current}°C</Typography>
              <Typography>Feels Like: {result.temperature.feels_like}°C</Typography>
              <Typography>Min: {result.temperature.min}°C</Typography>
              <Typography>Max: {result.temperature.max}°C</Typography>
            </div>
          </Grid>

          {/* Wind */}
          <Grid item xs={12} md={6}>
            <div className="info-subcard">
              <Typography variant="subtitle2">🌬️ Wind</Typography>
              <Typography>Speed: {result.wind.speed} m/s</Typography>
              <Typography>Gust: {result.wind.gust} m/s</Typography>
              <Typography>Direction: {result.wind.degree}°</Typography>
            </div>
          </Grid>

          {/* Humidity & Pressure */}
          <Grid item xs={12} md={6}>
            <div className="info-subcard">
              <Typography variant="subtitle2">💧 Humidity & Pressure</Typography>
              <Typography>Humidity: {result.temperature.humidity}%</Typography>
              <Typography>Pressure: {result.temperature.pressure} hPa</Typography>
              <Typography>Sea Level: {result.temperature.sea_level} hPa</Typography>
              <Typography>Ground Level: {result.temperature.ground_level} hPa</Typography>
            </div>
          </Grid>

          {/* Rain & Clouds */}
          <Grid item xs={12} md={6}>
            <div className="info-subcard">
              <Typography variant="subtitle2">☁️ Rain & Clouds</Typography>
              <Typography>Rain (1h): {result.rain.last_1h_mm} mm</Typography>
              <Typography>Cloud Cover: {result.clouds.coverage}%</Typography>
              <Typography>Weather: {result.weather.main}</Typography>
              <Typography>Description: {result.weather.description}</Typography>
            </div>
          </Grid>

          {/* Sunrise & Sunset */}
          <Grid item xs={12} sm={6}>
            <div className="info-subcard">
              <Typography variant="subtitle2">🌅 Sunrise & Sunset</Typography>
              <Typography>Sunrise: {formatTime(result.sys.sunrise)}</Typography>
              <Typography>Sunset: {formatTime(result.sys.sunset)}</Typography>
            </div>
          </Grid>

          {/* Coordinates */}
          <Grid item xs={12} sm={6}>
            <div className="info-subcard">
              <Typography variant="subtitle2">📍 Coordinates & Visibility</Typography>
              <Typography>Lat: {result.coordinates.lat}</Typography>
              <Typography>Lon: {result.coordinates.lon}</Typography>
              <Typography>Visibility: {result.visibility} meters</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
