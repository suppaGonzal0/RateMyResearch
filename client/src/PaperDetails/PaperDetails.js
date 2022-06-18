import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import './PaperDetails.css'
import { FiStar } from 'react-icons/fi';

const PaperDetails = (paper) => {

  const [rate, setRate] = useState()

    const {id} = useParams();

    //dummy abstract:
    const abstract = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    //get data by id:
    const [papers, setPapers] = useState([
      {id:"1", title: "Rumor Detection on Social Media: Datasets, Methods and Opportunities", abstract: abstract, category: "ML", rating: "4.5/5", date:"15th June, 2020"},
      {id:"2", title: "Remote sensing image denoising ", abstract: abstract, category: "IP", rating: "3/5", date:"10th August, 2021"},
      {id:"3", title: "Remote sensing image denoising ", abstract: abstract, category: "IP", rating: "3/5", date:"10th August, 2021"},
      {id:"4", title: "Remote sensing image denoising ", abstract: abstract, category: "IP", rating: "3/5", date:"10th August, 2021"}
  ])

  return (
    <div className='paperDetails'>

      {papers.filter(paper => paper.id === id).map(filteredPaper => (
        <div>
          <h2>{filteredPaper.title}</h2>
          <h4>Publish Date: {filteredPaper.date}</h4>
          <h4>Category: {filteredPaper.category}</h4>
          <div className="content">
            <div className='abstract'>
              <h4>Abstract</h4>
              <p>{filteredPaper.abstract}</p>
            </div>
            <div className="besideAbstract">
              <h3>Rating: 4/5</h3>
              <button className='button'>Comment</button>
              <button className='button'>Rate</button>
              <button className='button'>Save</button>
            </div>
          </div>
        </div>
      ))}

      {/* <div className='rating'>
        <FiStar className='star' onClick={() => setRate(1)}
        style={{ stroke: '#3f37c9'}} fontSize="2.2em" 
        onMouseOver={({target})=>target.style.fill="orange"}
        onMouseOut={({target})=>target.style.fill="white"}/>
        <FiStar className='star' style={{ stroke: '#3f37c9'}} fontSize="2.2em"
        onMouseOver={({target})=>target.style.fill="orange"}
        onMouseOut={({target})=>target.style.fill="white"} />
        <FiStar className='star' style={{ stroke: '#3f37c9'}} fontSize="2.2em"
        onMouseOver={({target})=>target.style.fill="orange"}
        onMouseOut={({target})=>target.style.fill="white"} />
        <FiStar className='star' style={{ stroke: '#3f37c9'}} fontSize="2.2em"
        onMouseOver={({target})=>target.style.fill="orange"}
        onMouseOut={({target})=>target.style.fill="white"} />
        <FiStar className='star' style={{ stroke: '#3f37c9'}} fontSize="2.2em"
        onMouseOver={({target})=>target.style.fill="orange"}
        onMouseOut={({target})=>target.style.fill="white"} />
      </div> */}
      
      <h2>Comments</h2>

    </div>

  )
}

export default PaperDetails