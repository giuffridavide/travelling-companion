import React from 'react'
// import Bergen from '../images/trips/Bergen.png'
// import Malta from '../images/trips/Malta.png'
// import Monaco from '../images/trips/Monaco.png'
// import spezia from '../images/trips/Spezia.png'

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
  // console.log(trip)
  const imagePath = `images/trips/${trip.destination.name}.jpg`;
  
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;


// This arrangement can be altered based on how we want the date's format to appear.
  const classPast = compareDates(currentDate, trip.end_date)? `trip-card past-trip` : `trip-card`;
  return (
    <div className={classPast}>
      <img src={imagePath} alt={trip.destination.name}></img>
      <h2>{trip.destination.name}</h2>
      <p>{trip.destination.punchline}</p>
      <a href="#">View Details</a>
    </div>
  )
}

export default DisplayTrip