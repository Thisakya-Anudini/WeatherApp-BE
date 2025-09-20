import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file

// Fetch weather data for a specific city (using CityCode)
export async function getWeather(req, res) {
  const cityCode = req.params.cityCode;  // Get the CityCode from URL parameter

  try {
    // Make the API request to OpenWeatherMap
    const weatherData = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        id: cityCode,  // CityCode (City ID)
        appid: process.env.API_KEY, // API Key from .env file
        units: 'metric'  // To get temperature in Celsius
      }
    });

    // Return the weather data to the frontend as a JSON response
    res.json({
      city: weatherData.data.name,
      temperature: weatherData.data.main.temp,
      weather: weatherData.data.weather[0].description,
      cityCode: cityCode  // Return the CityCode for frontend use
    });
  } catch (error) {
    console.error('Error in getWeather:', error);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
}
