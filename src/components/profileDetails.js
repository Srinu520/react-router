import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

function ProfileDetails() {
    const [user, setUser] = useState([])
    const {id} = useParams()
    const location = useLocation()
    const history = useHistory()
    console.log(location)
    //const isAtProfileDetails = false
    useEffect(()=>{
        axios.get(`https://gorest.co.in/public-api/users/${id}`)
        .then((res)=>setUser(res.data.data))
    },[id])
    const backClickHandler = ()=>{
        history.goBack()
    }
    return (
        <div>
            <h1>profile Details</h1>
            <p>id:{user.id}</p>
            <p>name:{user.name}</p>
            <p>email:{user.email}</p>
            <p>gender:{user.gender}</p>
            <p>status:{user.status}</p>
            <button onClick={backClickHandler}>Back</button>
        </div>
    )
}

export default ProfileDetails
