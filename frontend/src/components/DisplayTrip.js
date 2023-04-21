import React from 'react'

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
  const imagePath = `images/trips/${trip.destination.name}.jpg`;
  
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  const past = compareDates(currentDate, trip.end_date);
  const classDivPast = past? `trip-card past-trip` : `trip-card`;
  return (
    <div className={classDivPast}>
      <img src={imagePath} alt={trip.destination.name}></img>
      <h2>{trip.destination.name}</h2>
      <h3>{trip.start_date}</h3>
      <p>{trip.destination.punchline}</p>
      <a href="#">View Details</a>
    </div>
  )
}

export default DisplayTrip