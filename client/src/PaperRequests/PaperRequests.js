import React from 'react'
import './PaperRequests.css'
import axios from "axios"
import { useState, useEffect } from 'react'

const PaperRequests = () => {

    const [papers, setPapers] = useState([])

    const handleApprove = (id) => {
        console.log(id)
        axios.post(`http://localhost:3001/requests/approveRequest/${id}`).then((response) => {
            console.log(response.data)
        });
    }

    const handleReject = (id) => {
        axios.delete(`http://localhost:3001/requests/deleteRequest/${id}`).then((response) => {
            console.log(response.data)
        });
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
                        <p><b>Publish date:</b> {paper.date}</p>
                        <p><b>Category:</b> {paper.category}</p>
                    </div>
                    <div className="buttons">
                        <button className='addPaperButton' id="accept" onClick={() => handleApprove(paper._id)}>Accept</button> 
                        <button className='addPaperButton' id="reject" onClick={() => handleReject(paper._id)}>Reject</button> 
                    </div>                     
                </div>
            ))}
        </div>    
    </div>
  )
}

export default PaperRequests