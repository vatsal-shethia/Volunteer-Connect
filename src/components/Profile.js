import React from 'react';

function Profile({ signedUpEvents }) {
  return (
    <div className="container">
      <h2>Your Signed-Up Events</h2>
      {signedUpEvents.length > 0 ? (
        <ul className="list-group">
          {signedUpEvents.map(event => (
            <li key={event} className="list-group-item">Event ID: {event}</li>
          ))}
        </ul>
      ) : (
        <p>You haven't signed up for any events yet.</p>
      )}
    </div>
  );
}

export default Profile;
