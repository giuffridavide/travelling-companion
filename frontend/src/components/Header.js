import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import './style/header.css';

const Header = () => {
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
		      <Link to="/" className="nav-link">Home</Link>
        </li>

        <li className="nav-item">
        {user ? (
                  <a onClick={logoutUser} className='nav-link'>Logout</a>
                ):
                (
                  <Link to="/login" className='nav-link'>Login</Link>
                )
        }
        </li>

        <li className="nav-item">
        {user ? (
                  <Link to="/booking" className='nav-link'>Booking</Link>
                ):
                (
                  <Link to="/login" className='nav-link'>Booking</Link>
                )
        }
        </li>

        {user && <Link to="/dashboard" className='nav-link'>Dashboard</Link>}

    </ul>
    
    {user && <p className="greeting">Hello {user.username}</p>}

    </div>
  )
}

export default Header