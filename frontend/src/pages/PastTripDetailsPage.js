import { useLocation } from 'react-router-dom';
import React from 'react';
import './style/tripDetails.css';

const UpcomingTripDetails = () => {  
  const {state} = useLocation();
  const trip = state;
  const imagePath = `images/trips/${trip.destination.img_name}.jpg`;

  return (
    <div className="container">
      <div className="destination">
        <div className="destination-image">
          <img src={imagePath} alt={trip.destination.name} />
        </div>
        <div className="destination-details">
          <h1>{trip.destination.name}</h1>
          <p>{trip.start_date}-{trip.end_date}</p>
          <p>{trip.destination.punchline}</p>
          <p>{trip.destination.description}</p>
        </div>
      </div>
    </div>);
}

export default UpcomingTripDetails;
