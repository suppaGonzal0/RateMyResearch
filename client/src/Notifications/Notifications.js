import React from 'react'
import "./Notifications.css"
import axios from "axios"
import { useState, useEffect } from 'react';

const Notifications = () => {

    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"))

    const [notifications, setNotifications] = useState([])

    useEffect(() => {        
        axios.get(`http://localhost:3001/users/getUser/${userInfo._id}`).then((response) => {
            setNotifications(response.data.notifications);
        })
        
    }, [userInfo._id])

    // for(let i=0; i<notifications.length; i++){
    //     console.log(notifications[i])  
    // }

  return (
    <main className='notifMain'>
        <h1>Notifications</h1>
        {
            notifications.map((notif, index) => (
                <div className='notif' key={index}>{notif}</div>
            ))
        }
    </main>
  )
}

export default Notifications