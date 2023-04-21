import './style/homepage.css';
import React, {useState, useContext, useEffect} from 'react'
import AuthContext from '../context/AuthContext'
import { getAllDestinations } from '../api/api.js'
import DisplayDestination from '../components/DisplayDestination'

const HomePage = () => {

  let {user, logoutUser} = useContext(AuthContext)

  const href_book = user? `/booking` : `/login`;
  console.log(href_book);

  let [destinations, setDestination] = useState([])
  let getDestinations = () => {
    getAllDestinations().then(trip => {
        setDestination(trip)
    })
  }
  useEffect(() => {
      getDestinations()
  }, [])



  return (
    <div>
      <section className="hero-image">
        <div className="hero-text">
          <h2>Discover Your Next Adventure</h2>
          <p>Find the perfect destination for your next trip.</p>
        </div>
      </section>

      <section className="cards-container">
        {/* <Link to={href_book}> */}
        <div className="card left">
          <img src="images/trips/london.jpg"/>
          <div className="card-content">
            <a className='card-content' href='#'>Explore</a>
            <p>Discover new destinations and plan your trip with our travel guides.</p>
          </div>
        </div>
        {/* </Link> */}
        <div className="card center">
          <img src="images/homepage/book.jpg"/>
          <div className="card-content">
            <a className='card-content' href={href_book}>Book</a>
            <p>Book flights, hotels, and activities with ease.</p>
          </div>
        </div>
        <div className="card right">
          <img src="images/homepage/spa.jpg"/>
          <div className="card-content">
            <a className='card-content' href='#'>Deals</a>
            <p>Save money by finding the best deals on flights and hotels.</p>
          </div>
        </div>
      </section>

      <section className="popular-destinations">
      <div className='destinations-container'>
          {destinations.map((destination, index) => (
              <DisplayDestination key={index} destination={destination} />
              ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <img src="https://source.unsplash.com/20BWp1xrFz8/150x150" alt="User"/>
          <p>"This app is amazing! It helped me plan the perfect trip to Italy."</p>
          <h4>Jane Doe</h4>
        </div>
        <div className="testimonial">
          <img src="https://source.unsplash.com/20BWp1xrFz8/150x150" alt="User"/>
          <p>"I always use this app to find the best deals on flights and hotels. Highly recommend!"</p>
          <h4>John Smith</h4>
        </div>
      </section>

    </div>
  )
}

export default HomePage