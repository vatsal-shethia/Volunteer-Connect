import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetails({ events, onSignUp, signedUpEvents }) {
  const { id } = useParams();
  const event = events.find(event => event.id.toString() === id);

  if (!event) return <h2>Event not found</h2>;

  return (
    <div className="container">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <button 
        className="btn btn-success"
        onClick={() => onSignUp(event.id)}
        disabled={signedUpEvents.includes(event.id)}
      >
        {signedUpEvents.includes(event.id) ? "Signed Up" : "Sign Up"}
      </button>
    </div>
  );
}

export default EventDetails;
