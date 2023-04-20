import React, {useState, useEffect, useContext } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style/booking.css';
import { getAllDestinations, createTrip } from '../api/api'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


function BookingPage() {

  // let {loginUser} = useContext(AuthContext)
  let {user, logoutUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const [destinations, setDestination] = useState([])

    let getTrips = () => {
        getAllDestinations().then(trip => {
            setDestination(trip)
        })
    }

    useEffect(() => {
        getTrips()
    }, [])

    console.log(destinations);


  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setShowSuggestions(false);
  };

  const filteredCities = destinations.filter((d) =>
    d.name.toLowerCase().includes(city.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      'destination': event.target.elements.city.value,
      'start_date': event.target.elements.startDate.value,
      'end_date': event.target.elements.endDate.value,
      'user_id': user.user_id
    }
    let success = createTrip(data);
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Plan your trip</h1>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          {showSuggestions && (
            <ul className="suggestions">
              {filteredCities.map((c) => (
                <li key={c.name} onClick={() => handleCitySelect(c.name)}>
                  {c.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <DatePicker
            id="startDate"
            value={startDate}
            selected={startDate}
            dateFormat="yyyy-MM-dd"
            required
            onChange={(e) => setStartDate(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <DatePicker
            id="endDate"
            value={endDate}
            selected={endDate}
            dateFormat="yyyy-MM-dd"
            required
            onChange={(e) => setEndDate(e)}
          />
        </div>
        <button type="submit">Book now</button>
      </form>
    </div>
  );
}

export default BookingPage;
