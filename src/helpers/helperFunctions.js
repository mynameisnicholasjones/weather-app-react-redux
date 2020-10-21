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
// NOTE: This function always returns the API call value for the Five-Day Forecast regardless of input type. This is because the current day weather values can be retrieved from the first weather object of the Five-Day Forecast. This obviates the need to have seperate API call values for Current-Day and Five-Day Forecast, keeping helperFunctions.js 'DRY'.
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

// This function shows the specific weather image based on weather type string passed to it.
// For example: if weatherTypeString = 'Clouds', then the image for Clouds.png will be returned.
export const getWeatherImage = (weatherTypeString) => {
  switch (weatherTypeString) {
    case 'Ash':
      return <img src="/weatherImages/Ash.png" alt="Ash" />;

    case 'Clear':
      return <img src="/weatherImages/Clear.png" alt="Clear" />;

    case 'Clouds':
      return <img src="/weatherImages/Clouds.png" alt="Clouds" />;

    case 'Drizzle':
      return <img src="/weatherImages/Drizzle.png" alt="Drizzle" />;

    case 'Dust':
      return <img src="/weatherImages/Dust.png" alt="Dust" />;

    case 'Fog':
      return <img src="/weatherImages/Fog.png" alt="Fog" />;

    case 'Haze':
      return <img src="/weatherImages/Haze.png" alt="Haze" />;

    case 'Mist':
      return <img src="/weatherImages/Mist.png" alt="Mist" />;

    case 'Rain':
      return <img src="/weatherImages/Rain.png" alt="Rain" />;

    case 'Sand':
      return <img src="/weatherImages/Sand.png" alt="Sand" />;

    case 'Smoke':
      return <img src="/weatherImages/Smoke.png" alt="Smoke" />;

    case 'Snow':
      return <img src="/weatherImages/Snow.png" alt="Snow" />;

    case 'Squall':
      return <img src="/weatherImages/Squall.png" alt="Squall" />;

    case 'Thunderstorm':
      return <img src="/weatherImages/Thunderstorm.png" alt="Thunderstorm" />;

    case 'Tornado':
      return <img src="/weatherImages/Tornado.png" alt="Tornado" />;

    default:
      console.log(
        `The icon for weather type [${weatherTypeString}] was not found.`
      );
      break;
  }
};
