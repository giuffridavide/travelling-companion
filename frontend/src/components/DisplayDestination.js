import React, {useState} from 'react'


const DisplayDestination = ({destination}) => {

  const imagePath = `images/trips/${destination.img_name}.jpg`;
  console.log(destination);
  
  return (
    <div>
      <div className='destination-card'>
          <img src={imagePath} alt={destination.name}></img>
          <h2 className='destination-card'>{destination.name}</h2>
          <p className='destination-card'>{destination.punchline}</p>
        </div>
    </div>
  )
}

export default DisplayDestination