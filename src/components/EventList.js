import React from 'react';
import { Link } from 'react-router-dom';

function EventList({ events }) {
  return (
    <div className="container">
      <h2 className="mt-4">Available Events</h2>
      <ul className="list-group">
        {events.map(event => (
          <li key={event.id} className="list-group-item">
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
