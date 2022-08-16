import React from 'react'
import './UserList.css'

const UserList = () => {

  const users = [
    {id: 1, name: "poger", email: "dsadsadas"},
    {id: 2, name: "pondo", email: "wffgsdf"},
    {id: 3, name: "pipola", email: "gvdvscvsd"}
  ]

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
                        <div className="user" key={user.id}>
                            <div className="userow">
                                <p>{user.id}</p>
                            </div>
                            <div className="userow">
                                <p>{user.name}</p>
                            </div>
                            <div className="userow">
                                <p>{user.email}</p>
                            </div>
                            <div className="userow">
                                <h4>Ban {user.name}</h4>
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