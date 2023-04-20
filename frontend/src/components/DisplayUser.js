import React from 'react'

const DisplayUser = ({user}) => {
  return (
    <div>
        <h3>{user.username}</h3>
    </div>
  )
}

export default DisplayUser