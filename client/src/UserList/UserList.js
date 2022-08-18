import React from 'react'
import './UserList.css'
import { useState, useEffect } from 'react'
import axios from "axios"

const UserList = () => {

    const [users, setUsers] = useState([])

    const handleBan = (_id, isBanned) => {
        axios.put(`http://localhost:3001/users/updateBanStatus/${_id}`, {
            isBanned: !isBanned
          }).then((response) => {
            console.log(response)
          })
    }

    useEffect(() => {
        axios.get("http://localhost:3001/users/getAllUsers").then((response) => {
            setUsers(response.data);
        });
    
      return () => {}
    }, [users])


  return (
    <main className="userListMain">
        <div className='userListContainer'>
            <h2>User List</h2>
            
            <div className="userList">
                <div className="listColumn">
                    <div className="userow">
                        <h3>ID</h3>
                    </div>
                    <div className="userow">
                        <h3>Name</h3>
                    </div>
                    <div className="userow">
                        <h3>Email</h3>
                    </div>
                    <div className="userow">
                        <h3>Action</h3>
                    </div>
                </div>
                {
                    users.map((user) => (
                        <div className="user" key={user._id}>
                            <div className="userow">
                                <p>{user._id}</p>
                            </div>
                            <div className="userow">
                                <p>{user.username}</p>
                            </div>
                            <div className="userow">
                                <p>{user.email}</p>
                            </div>
                            <div className="userow">
                                <h4 onClick={() => handleBan(user._id, user.isBanned)}>{!user.isBanned ? "Ban" : "Unban"} {user.username}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </main>
  )
}

export default UserList