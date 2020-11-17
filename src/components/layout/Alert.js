import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alertReducerStateAsAProp: { alert } }) => {
  // If the alert prop is null or undefined then return null,
  // else, return a styled div with the alert_text and alert_type.
  if (alert === null || alert === 'undefined') {
    return null;
  } else {
    return (
      <div className={`alert alert-${alert.alertType}`}>
        <i className="fas fa-info-circle" /> {alert.alertText}
      </div>
    )
  }
};

Alert.propTypes = {
  alert: PropTypes.object,
}

const mapStateToProps = (state) => ({
  alertReducerStateAsAProp: state.alertReducerState,
});

export default connect(mapStateToProps)(Alert);
