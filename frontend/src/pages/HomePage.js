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
      <section className="features">
        <div className="feature">
          <img src="https://source.unsplash.com/1m1FPmYxcWw/400x300" alt="Explore"/>
          <h3>Explore</h3>
          <p>Discover new destinations and plan your trip with our travel guides.</p>
        </div>
        <div className="feature">
          <img src="https://source.unsplash.com/oznE58nWgRY/400x300" alt="Book"/>
          <h3>Book</h3>
          <p>Book flights, hotels, and activities with ease.</p>
        </div>
        <div className="feature">
          <img src="https://source.unsplash.com/f4vKZJ6eZf0/400x300" alt="Save"/>
          <h3>Save</h3>
          <p>Save money by finding the best deals on flights and hotels.</p>
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