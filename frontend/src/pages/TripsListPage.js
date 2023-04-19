import React, {useState, useEffect, useContext} from 'react'
import DisplayTrip from '../components/DisplayTrip'
import { getAllTrips } from '../api/api'
import AuthContext from '../context/AuthContext'
import './style/trip.css';

const TripsListPage = () => {

    let [trips, setTrip] = useState([])

    let {authTokens, user} = useContext(AuthContext)

    let getTrips = () => {
        getAllTrips(authTokens).then(trip => {
            setTrip(trip)
        })
    }

    useEffect(() => {
        getTrips()
    }, [])

    console.log('>>>' + trips)

    return (
        <div>
            <div className='trips-list'>
                {trips.map((trip, index) => (
                    <DisplayTrip key={index} trip={trip} />
                ))}
            </div>
        </div>
    )
}

export default TripsListPage