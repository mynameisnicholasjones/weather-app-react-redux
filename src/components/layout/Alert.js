import React from 'react';

const Alert = ({ alert }) => {
  return (
    // If the alert prop is not null or undefined, then output a styled div with the alert_text and alert_type
    alert !== null || 'undefined' (
      <div className={`alert alert-${alert.alertType}`}>
        <i className="fas fa-info-circle" /> {alert.alertText}
      </div>
    )
  );
};

export default Alert;
