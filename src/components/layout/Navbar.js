import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const onClickToggleActiveForcastButton = (event) => {
    const currentDayForcastBtn = document.getElementById(
      'current-day-forcast-btn'
    );
    const fiveDayForcastBtn = document.getElementById('five-day-forcast-btn');

    if (event.target.id === 'current-day-forcast-btn') {
      currentDayForcastBtn.className = 'btn btn-active';
      fiveDayForcastBtn.className = 'btn btn-not-active';

      console.log('The Current Day Forcast Button is Active');
    } else {
      fiveDayForcastBtn.className = 'btn btn-active';
      currentDayForcastBtn.className = 'btn btn-not-active';

      console.log('The Five Day Forcast Button is Active');
    }
  };

  return (
    <header className="bg-primary">
      <div className="navbar-container">
        <h1 className="logo">
          <img
            src="../../.././appIcons/CloudsIcon.png"
            alt="Cloud Icon"
            className='logo__cloudIcon'
          />
          <div className='logo__weatherAppName'>
            Weather App
          </div>
        </h1>

        <nav className="forcast-type-nav">
          <Link
            id="five-day-forcast-btn"
            to="/"
            className="btn btn-active"
            onClick={onClickToggleActiveForcastButton}
          >
            Five-Day Forcast
          </Link>
          <Link
            id="current-day-forcast-btn"
            to="/current-day-forcast"
            className="btn btn-not-active"
            onClick={onClickToggleActiveForcastButton}
          >
            Current-Day Forcast
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
