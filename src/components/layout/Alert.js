import React from 'react';

const Alert = ({ alert }) => {
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

export default Alert;
