import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import TripDetailsPage from "../pages/TripDetailsPage";


const DisplayTrip = ({trip}) => {

  const imagePath = `images/trips/${trip.destination.name}.jpg`;
  
  return (
    <div>
      <div className='trip-card'>
          <img src={imagePath} alt={trip.destination.name}></img>
          <h2>{trip.destination.name}</h2>
          <h3>{trip.start_date}</h3>
          <p>{trip.destination.punchline}</p>
          <Link to={{pathname:'/tripDetails', state: trip}}>
            <button>View Details</button>
          </Link>
        </div>
    </div>
  )
}

export default DisplayTrip