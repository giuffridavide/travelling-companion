import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";


function compareDates(d1, d2){
  let today = new Date(d1).getTime();
  let trip_date = new Date(d2).getTime();

  let res = null;

  if (trip_date <= today) {
    res = true;
  }
  else{
    res = false;
  }

  return res;
}

const DisplayTrip = ({trip}) => {

  const imagePath = `images/trips/${trip.destination.img_name}.jpg`;
  const navigate = useNavigate();

  const handleClick = () => {
    if (compareDates(currentDate, trip.end_date)) {
      navigate('/pastTripDetails', {state: trip});
    }
    else{
      navigate('/upcomingTripDetails', {state: trip});
    }
  };

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;
  
  return (
    <div>
      <div className='trip-card'>
          <img src={imagePath} alt={trip.destination.name}></img>
          <h2>{trip.destination.name}</h2>
          <h3>{trip.start_date}</h3>
          <p>{trip.destination.punchline}</p>
          <button onClick={handleClick}>View Details</button>
        </div>
    </div>
  )
}

export default DisplayTrip