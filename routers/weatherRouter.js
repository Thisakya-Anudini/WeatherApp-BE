import express from 'express';
import { getWeather } from '../controllers/weatherController.js';

const weatherRouter = express.Router();

// Route to get weather data for a specific city using CityCode
weatherRouter.get("/:cityCode", getWeather);

export default weatherRouter;
