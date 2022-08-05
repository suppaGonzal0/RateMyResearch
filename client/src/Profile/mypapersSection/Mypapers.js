import React from 'react'
import './Mypapers.css' 

const Mypapers = () => {

  const papers = [
    {id:"1", title: "Rumor Detection on Social Media: Datasets, Methods and Opportunities", category: "Machine Learning", rating: 4.5, date:"15th June, 2020"},
    {id:"2", title: "Remote sensing image denoising", category: "Image Processing", rating: 3, date:"10th August, 2021"},
    {id:"3", title: "Public Safety Networks: Enabling Mobility", category: "Deep Learning", rating: 3.5, date:"10th August, 2021"},
    {id:"4", title: "Switch Fabric Technology", category: "Speech Recognition", rating: 2, date:"10th August, 2021"},
    {id:"5", title: "Switch Fabric Technology", category: "Speech Recognition", rating: 2, date:"10th August, 2021"},
    {id:"6", title: "Switch Fabric Technology", category: "Speech Recognition", rating: 2, date:"10th August, 2021"},
    {id:"7", title: "Switch Fabric Technology", category: "Speech Recognition", rating: 2, date:"10th August, 2021"}
  ]

  return (
    <div className='myPapersCard'>
      <div className="myPapers">
      {papers.map((paper) => (              
                <div className='paper' key={paper.id}>
                    <div className='paperinfo'>
                        <h3>{paper.title}</h3>
                        <p><b>Publish date:</b> {paper.date}</p>
                        <p><b>Category:</b> {paper.category}</p>
                    </div>
                    <div className="buttons">
                        <button className='addPaperButton'>View</button> 
                        <button className='addPaperButton'>Delete</button> 
                    </div>                     
                </div>
            ))}
      </div>
    </div>
  )
}

export default Mypapers