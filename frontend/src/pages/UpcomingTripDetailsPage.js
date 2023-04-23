import { useLocation } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import './style/tripDetails.css';
import AuthContext from '../context/AuthContext'
import { getAllUsers, getNearbyCities, updateTrip } from '../api/api'

const UpcomingTripDetails = () => {

  let {authTokens, user} = useContext(AuthContext)
  const loggedUserID = user.user_id;
  
  const {state} = useLocation();
  const trip = state;
  const imagePath = `images/trips/${trip.destination.img_name}.jpg`;
  const [departureDate, setDepartureDate] = useState(trip.start_date);
  const [returnDate, setReturnDate] = useState(trip.end_date);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedPassengers, setSelectedPassengers] = useState([]);
  const [stops, setStops] = useState([]);
  const [cost, setCost] = useState(0);

  let [adventurers, setAdventurer] = useState([])
  let getUsers = () => {
    getAllUsers().then(users => {
      users = users.filter(function(item) {
      return item.id != loggedUserID
      })
      setAdventurer(users)
    })
  }
  useEffect(() => {
    getUsers()
  }, [])


  let [cities, setCity] = useState([])
  let foo = () => {
    getNearbyCities(trip.destination.name).then(nearbies => {
        setCity(nearbies)
    })
  }
  useEffect(() => {
    foo()
  }, [])



  const handlePassengerChange = (e, index) => {
    const newPassengers = [...selectedPassengers];
    newPassengers[index] = e.target.value;
    setSelectedPassengers(newPassengers);
  };

  const handleAddStop = () => {
    setStops([...stops, '']);
  };

  const handleStopChange = (e, index) => {
    const newStops = [...stops];
    newStops[index] = e.target.value;
    setStops(newStops);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitted = {departureDate, returnDate, selectedPassengers, stops, cost, trip, user};
    let success = updateTrip(submitted);
  };

  return (
    <div className="container">
      <div className="destination">
        <div className="destination-image">
          <img src={imagePath} alt={trip.destination.name} />
        </div>
        <div className="destination-details">
          <h1>{trip.destination.name}</h1>
          <p>{trip.destination.punchline}</p>
          <p>{trip.destination.description}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label htmlFor="departure-date">Departure:</label>
          <input
            type="date"
            id="departure-date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="return-date">Return:</label>
          <input
            type="date"
            id="return-date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="passengers">Add other adventurers:</label>
          {selectedPassengers.map((passenger, index) => (
            <div key={index} className="passenger-input">
              <select value={passenger} onChange={(e) => handlePassengerChange(e, index)}>
                <option value="">Select an adventurer</option>
                {adventurers.map((p) => (
                  <option key={p.id} value={p.username}>
                    {p.username}
                  </option>
                ))}
                </select>
        </div>
      ))}
      <button type="button" onClick={() => setSelectedPassengers([...selectedPassengers, ''])}>
        Add adventurer
      </button>
    </div>
    <div className="form-section">
      <label htmlFor="stops">Stops:</label>
      {
      stops.map((stop, index) => (
        <div key={index} className="stop-input">
          <select value={stop} onChange={(e) => handleStopChange(e, index)}>
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city.idx} value={city.idx}>
                {city.city_name}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button type="button" onClick={handleAddStop}>
        Add stop
      </button>
    </div>
    <div className="form-section">
      <label htmlFor="cost">Cost estimation:</label>
      <input
        type="number"
        id="cost"
        value={cost}
        onChange={(e) => setCost(parseInt(e.target.value))}
      />
    </div>
    <button type="submit">Save</button>
  </form>
</div>);
}

export default UpcomingTripDetails;
