import React from 'react'
import './style/homepage.css';


const HomePage = () => {
  return (
    // <div>
    //     <p>You are logged to the home page</p>
    // </div>
    <div>
      <section className="hero-image">
        <div className="hero-text">
          <h2>Discover Your Next Adventure</h2>
          <p>Find the perfect destination for your next trip.</p>
        </div>
      </section>

      <section className="cards-container">
        <div className="card left">
          <img src="images/trips/London.jpg"/>
          <div className="card-content">
            <a className='card-content'>Explore</a>
            <p>Discover new destinations and plan your trip with our travel guides.</p>
          </div>
        </div>
        <div className="card center">
          <img src="images/homepage/book.jpg"/>
          <div className="card-content">
            <a className='card-content'>Book</a>
            <p>Book flights, hotels, and activities with ease.</p>
          </div>
        </div>
        <div className="card right">
          <img src="deals.jpg"/>
          <div className="card-content">
            <a className='card-content'>Deals</a>
            <p>Save money by finding the best deals on flights and hotels.</p>
          </div>
        </div>
      </section>

      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination">
          <img src="https://source.unsplash.com/MV7k-1cPCr8/400x300" alt="London"/>
          <h3>London</h3>
        </div>
        <div className="destination">
          <img src="https://source.unsplash.com/ekcu3qV7da8/400x300" alt="Paris"/>
          <h3>Paris</h3>
        </div>
        <div className="destination">
          <img src="https://source.unsplash.com/2YkFY1c1x-A/400x300" alt="New York"/>
          <h3>New York</h3>
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