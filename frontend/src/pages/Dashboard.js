import React, {useState, useEffect, useContext} from 'react'
import DisplayTrip from '../components/DisplayTrip'
import { getAllTrips } from '../api/api'
import AuthContext from '../context/AuthContext'
import './style/dashboard.css';

function compareDates(d1, d2){
    let today = new Date(d1).getTime();
    let trip_date = new Date(d2).getTime();
  
    let res = null;
  
    if (trip_date <= today) {
      res = true;
    }
    else{
      res = false;
    }
  
    return res;
  }

const Dashboard = () => {

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


    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
  
    let pastTrips = []
    let upcomingTrips = []
    trips.forEach(trip => {
        let past = compareDates(currentDate, trip.end_date);
        if (past) {
            pastTrips.push(trip)
        }
        else{
            upcomingTrips.push(trip)
        }
    });

    console.log('Past:', pastTrips);
    console.log('Upcoming:', upcomingTrips);

    return (
        <div>
            {upcomingTrips.length>0? 
            <div className='upcoming'>
                <h2 className='upcoming'>Upcoming adventures!</h2>
                <div className='trips-container'>
                    {upcomingTrips.map((trip, index) => (
                        <DisplayTrip key={index} trip={trip} />
                        ))}
                </div>
            </div>
            
            :    (<div className='upcoming'>
                    <a href='/booking' className='upcoming'>Book now your next adventure!</a>
                </div>)
            }
            {
                pastTrips.length>0? (
                <div className='past'>
                    <h2 className='past'>Relive your past experiences</h2>
                    <div className='trips-container'>
                    {pastTrips.map((trip, index) => (
                        <DisplayTrip key={index} trip={trip} />
                        ))}
                    </div>
                </div>
                ) : <></>}
        </div>
    )
}

export default Dashboard