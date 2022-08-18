import React from 'react'
import './Mypapers.css' 
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Mypapers = ({userID}) => {

  let navigate = useNavigate();

  const [papers, setPapers] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/papers/getPapersByUserID/${userID}`).then((response) => {
      setPapers(response.data);
        });
    }, [userID, papers])

    const handleDelete = (paperId) => {
      axios.delete(`http://localhost:3001/papers/deletePaper/${paperId}`).then((response) => {
            console.log(response.data)
        });
    }


  return (
    <div className='myPapersCard'>
      <div className="myPapers">
      {papers.map((paper) => (              
                <div className='paper' key={paper._id}>
                    <div className='paperinfo'>
                        <h3>{paper.title}</h3>
                        <p><b>Publish date:</b> {paper.date}</p>
                        <p><b>Category:</b> {paper.category}</p>
                    </div>
                    <div className="buttons">
                        <button className='addPaperButton' onClick={() => navigate(`/paper/${paper._id}`)}>View</button> 
                        <button className='addPaperButton' onClick={() => handleDelete(paper._id)}>Delete</button> 
                    </div>                     
                </div>
            ))}
      </div>
    </div>
  )
}

export default Mypapers