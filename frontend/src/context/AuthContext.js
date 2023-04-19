import {createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import { loginUser } from '../api/api'

const AuthContext = createContext()

export default AuthContext;



// Provider

export const AuthProvider = ({children}) => {

    // If we want to use the version in API. But we would need to pass the event
    // let [authTokens, setAuthTokens] = useState(null)
    // let [user, setUser] = useState(null)
    // let loginUser = () => {
    //     loginUser().then(user => {
    //         setUser(user)
    //     })
    // }
    // useEffect(() => {
    //     loginUser()
    // }, [])


    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    let loginUser = async (e )=>{
        e.preventDefault()
        let response = await fetch('/api/token/',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'username': e.target.username.value,
                                    'password': e.target.password.value})
        })

        let data = await response.json()
        
        if (response.status===200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
        }
        else{
            alert('Something went wrong!')
        }
    }

    let contextData = {
        user:user,
        loginUser:loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}