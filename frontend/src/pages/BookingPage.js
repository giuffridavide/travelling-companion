import React, {useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style/booking.css';
import { getAllDestinations } from '../api/api'


function BookingPage() {

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

  const handleCityChange = (event) => {
    const { value } = event.target;
    setCity(value);
    setShowSuggestions(value !== '');
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setShowSuggestions(false);
  };

  const filteredCities = destinations.filter((d) =>
    d.name.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <div className="form-container">
      <form>
        <h1>Choose your destination!</h1>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
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
          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">End Date</label>
          <DatePicker
            id="end-date"
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingPage;
