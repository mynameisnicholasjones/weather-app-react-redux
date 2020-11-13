import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// NOTE: Whenever you call an action from a component, you have to import that action
import { getWeatherForecastAction } from '../../actions/forecastActions';
import { setAlertAction } from '../../actions/alertActions';

const Search = ({ getWeatherForecastAction, setAlertAction }) => {
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
      setAlertAction('Please enter a location', 'danger');
    } else {
      // Get the weather forecast
      getWeatherForecastAction(searchText);

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

// NOTE: Since mapStateToProps is not used in this component, the
// first arguement for connect is null.
export default connect(null, { getWeatherForecastAction, setAlertAction })(Search);
