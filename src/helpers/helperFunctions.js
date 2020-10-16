import React from 'react';

let OpenWeatherMapDotOrgApiKey;

// Determine if the environment is in production or development and use the corresponding API key for OpenWeatherMap.org.
if (process.env.NODE_ENV === 'production') {
  OpenWeatherMapDotOrgApiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_DOT_ORG_API_KEY_PRODUCTION;
} else {
  OpenWeatherMapDotOrgApiKey =
    process.env.REACT_APP_OPEN_OPEN_WEATHER_MAP_DOT_ORG_API_KEY_DEVELOPMENT;
}