import React from 'react'
// import Bergen from '../images/trips/Bergen.png'
// import Malta from '../images/trips/Malta.png'
// import Monaco from '../images/trips/Monaco.png'
// import spezia from '../images/trips/Spezia.png'

const DisplayTrip = ({trip}) => {
  const imagePath = `images/trips/${trip.main_destination}.png`;
  return (

    <div className="trips-list">
      <img src={imagePath} alt={trip.main_destination}></img>
      <h3>{trip.main_destination}</h3>
      <p>Descrizione breve della destinazione.</p>
      <a href="link/to/destination">Scopri di più</a>
    </div>
  )
}

export default DisplayTrip