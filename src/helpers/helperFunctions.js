import React from 'react';

let OpenWeatherMapDotOrgApiKey;

// Determine if the environment is in production or development and use the corresponding API key for OpenWeatherMap.org.
if (process.env.NODE_ENV === 'production') {
  OpenWeatherMapDotOrgApiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_DOT_ORG_API_KEY_PRODUCTION;
} else {
  OpenWeatherMapDotOrgApiKey =
    process.env.REACT_APP_OPEN_OPEN_WEATHER_MAP_DOT_ORG_API_KEY_DEVELOPMENT;
}

// This function returns the API call value used for accessing weather data from OpenWeatherMap.org
// NOTE: This function always returns the API call value for the Five-Day Forcast regardless of input type. This is because the current day weather values can be retrieved from the first weather object of the Five-Day Forcast. This obviates the need to have seperate API call values for Current-Day and Five-Day Forcast, keeping helperFunctions.js 'DRY'.
// @Param1: searchText => The city; city, state; city, country; or zip of the location to retrieve weather for.
// Example: New York, US
export const getAPICallValueForOpenWeatherMapDotOrg = (searchText) => {
  const apiKey = OpenWeatherMapDotOrgApiKey;

  // Create API call strings
  let weatherAPICallUsingZipCode =
    `https://api.openweathermap.org/data/2.5/forecast?zip=` +
    searchText +
    ',us&units=imperial&appid=' +
    apiKey;

  let weatherAPICallUsingCity =
    `https://api.openweathermap.org/data/2.5/forecast?q=` +
    searchText +
    ',us&units=imperial&appid=' +
    apiKey;

  // Determine if searchText is a number or a string
  let isSearchTextANumber = !isNaN(searchText);

  // If searchText is a number then, return the API Call Value for zip,
  // Else,
  // If the searchText is a string then, return the API Call Value for city,
  if (isSearchTextANumber) {
    return weatherAPICallUsingZipCode;
  } else {
    return weatherAPICallUsingCity;
  }
};