import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const TripsListPage = () => {

    let [trips, setTrip] = useState([])

    useEffect(()=> {
        getTrips()
    }, [])

    // await means let's wait until you don't have the response
    let getTrips = async () =>{
        let response = await fetch('/api/trips/')
        let data = await response.json()
        setTrip(data)
    }

    return (
        <div>
            <div className='trips-list'>
                {trips.map((trip, index) => (
                    <ListItem key={index} trip={trip} />
                ))}
            </div>
        </div>
    )
}

export default TripsListPage