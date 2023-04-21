import React from 'react';

const TripDetails = (trip) => {
  console.log(trip);
  return (
    <div className="destination">
      <img src="/path/to/image.jpg" alt="Destination" />
      <h2>Destination Name</h2>
      <p className="punchline">The perfect getaway</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
        nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      </p>
    </div>
  );
};

export default TripDetails;
