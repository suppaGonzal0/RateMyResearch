import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'

const Saved = ({userID}) => {

  let navigate = useNavigate();

  const [papers, setPapers] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/users/getUser/${userID}`).then((response) => {
      setPapers(response.data.savedPapers);
        });
    }, [userID, papers])

    const handleUnsave = (paper) => {
      const updatedSavePapers = papers.filter(filteredPaper => { return filteredPaper._id !== paper._id})
      axios.put(`http://localhost:3001/users/updateUser/${userID}`, {
          savedPapers: updatedSavePapers
        }).then((response) => {
          console.log(response)
      })
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
                      <button className='addPaperButton' onClick={() => handleUnsave(paper)}>Unsave</button> 
                    </div>                     
                </div>
            ))}
      </div>
    </div>
  )
}

export default Saved