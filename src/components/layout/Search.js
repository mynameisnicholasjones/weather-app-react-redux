import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showAlert, getWeatherForecastData }) => {
  // Component level state used in search input form.
  const [searchText, setSearchText] = useState('');

  // Whenever the user types into the searchText input, the searchText state is set to the inputted value
  const onChangeSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmitSearchText = (event) => {
    // Prevent the default behavior of submitting the user input to a file
    event.preventDefault();

    if (searchText === '') {
      // Show alert
      showAlert('Please enter a location', 'danger');
    } else {
      // Get the weather forecast
      getWeatherForecastData(searchText);

      setSearchText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitSearchText}>
        <input
          type="text"
          name="searchText"
          placeholder="Enter a location to search for weather"
          value={searchText}
          onChange={onChangeSearchText}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

Search.propTypes = {
  showAlert: PropTypes.func.isRequired,
  getWeatherForecastData: PropTypes.func.isRequired,
}

export default Search;
