export async function getAllTrips(authTokens) {

    try {
        let response = await fetch('/api/trips/',
                        {method:'GET',
                        headers:{
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + String(authTokens.access)
                        }})
        return await response.json()
        
    } catch (error) {
        console.log('>>>TRIPS<<<' + error)
        return []
    }
}


export async function createTrip(data) {
    try {
            await fetch(`/api/newTrip/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(data)
        })
        return true
    } catch (error) {
        console.log('>>>createTrip<<<' + error)
        return false
    }
}


export async function updateTrip(data) {
    try {
            await fetch(`/api/updateTrip/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(data)
        })
        return true
    } catch (error) {
        console.log('>>>updateTrip<<<' + error)
        return false
    }
}


export async function getAllDestinations(authTokens) {

    try {
        let response = await fetch('/api/destinations/')
        return await response.json()
        
    } catch (error) {
        console.log('>>>DESTINATIONS<<<' + error)
        return []
    }
}


export async function getAllUsers() {
    try {
        let response = await fetch('/api/users/')
        return await response.json()
        
    } catch (error) {
        console.log('>>>USERS<<<' + error)
        return []
    }
}


export async function getNearbyCities(dest) {
    try {
        let response =  await fetch('/api/nearbyDestinations/',
                            {
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({'dest_name': dest})
                            })
        return await response.json()
        
    } catch (error) {
        console.log('>>>NEARBY<<<' + error)
        return []
    }
}

// export async function loginUser(e) {
//     try {
//         e.preventDefault()
//         let response = await fetch('/api/token/',
//                             {
//                                 method: 'POST',
//                                 headers: {'Content-Type': 'application/json'},
//                                 body: JSON.stringify({'username': e.target.username.value,
//                                                         'password': e.target.password.value})
//                             })

//         let data = await response.json()
//         console.log('data:', data)
//     } catch (error) {
//         console.log("Si è spaccato tutto LOGIN")
//         return []
//     }
// }