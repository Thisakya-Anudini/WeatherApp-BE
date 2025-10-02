import express from 'express';
import { getWeather, getCityCodes } from '../controllers/weatherController.js';
import jwt from '../middleware/jwt.js';

const weatherRouter = express.Router();

// Route to get all CityCodes from cities.json
weatherRouter.get("/cities",jwt, getCityCodes);  // New route for fetching CityCodes

// Route to get weather data for a specific city using CityCode
weatherRouter.get("/:cityCode",jwt, getWeather);

export default weatherRouter;
