import React, {useState, useEffect} from 'react'
import DisplayUser from '../components/DisplayUser'
import { getAllUsers } from '../api/api'

const UsersListPage = () => {

    let [users, setUser] = useState([])

    let getUsers = () => {
        getAllUsers().then(user => {
            setUser(user)
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <div className='users-list'>
                {users.map((user, index) => (
                    <DisplayUser key={index} user={user} />
                ))}
            </div>
        </div>
    )
}

export default UsersListPage