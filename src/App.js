import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

// Data
import eventData from "./data/eventData";

function App() {
  // State management
  const [events] = useState(eventData);
  const [signedUpEvents, setSignedUpEvents] = useState([]);

  // Function to handle event sign-ups
  const handleSignUp = (eventId) => {
    if (!signedUpEvents.includes(eventId)) {
      setSignedUpEvents([...signedUpEvents, eventId]);
      return true;
    }
    return false;
  };

  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventList events={events} />} />
          <Route
            path="/events/:id"
            element={
              <EventDetails
                events={events}
                onSignUp={handleSignUp}
                signedUpEvents={signedUpEvents}
              />
            }
          />
          <Route path="/profile" element={<Profile signedUpEvents={signedUpEvents} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
