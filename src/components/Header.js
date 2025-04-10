import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">VolunteerConnect</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/events">Events</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
