import React from 'react'
import './PaperRequests.css'
import axios from "axios"
import { useState, useEffect } from 'react'

const PaperRequests = () => {

    const [papers, setPapers] = useState([])

    const sendNotification = (userID, title, authors, status) => {
        
        axios.get(`http://localhost:3001/users/getUser/${userID}`).then((response) => {
            response.data.notifications.push(`Your request for paper titled ${title} by ${authors} has been ${status}`)
            console.log(response.data.notifications)

            axios.put(`http://localhost:3001/users/updateUser/${userID}`, {
                notifications: response.data.notifications
            }).then((response) => {
            console.log(response)
            })
        });
    }

    const handleApprove = (paperID, userID, title, authors) => {
        axios.post(`http://localhost:3001/requests/approveRequest/${paperID}`).then((response) => {
            console.log(response.data)
        });

        sendNotification(userID, title, authors, "approved")
    }

    const handleReject = (paperID, userID, title, authors) => {
        axios.delete(`http://localhost:3001/requests/deleteRequest/${paperID}`).then((response) => {
            console.log(response.data)
        });

        sendNotification(userID, title, authors, "rejected")
    }

    useEffect(() => {
        axios.get("http://localhost:3001/requests/getAllRequests").then((response) => {
            setPapers(response.data);
        });
    }, [papers])



  return (
    <div className='addPapers'>
        <h2>Paper Requests</h2>
        <div className="container">
            {papers.map((paper) => (              
                <div className='paper' key={paper._id}>
                    <div className='paperinfo'>
                        <h3>{paper.title}</h3>
                        <h4>{paper.authors}</h4>
                        <p><b>Publish date:</b> {paper.date.split("T")[0]}</p>
                        <p><b>Category:</b> {paper.category}</p>
                    </div>
                    <div className="buttons">
                        <button className='addPaperButton' id="accept" onClick={() => handleApprove(paper._id, paper.userID, paper.title, paper.authors)}>Approve</button> 
                        <button className='addPaperButton' id="reject" onClick={() => handleReject(paper._id, paper.userID, paper.title, paper.authors)}>Reject</button> 
                    </div>                     
                </div>
            ))}
        </div>    
    </div>
  )
}

export default PaperRequests