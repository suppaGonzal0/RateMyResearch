import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Modal from 'react-modal'
import './PaperDetails.css'
import { FiStar } from 'react-icons/fi';

const PaperDetails = (paper) => {

  const [rate, setRate] = useState(0)
  const [hover, setHover] = useState()
  const [star, setStar] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)

    const {id} = useParams();

    const rateSubmit = () => {
      setStar(false)
    }

    const reRate = () => {
      setStar(true)
      setRate(0)
    }

    //dummy abstract:
    const abstract = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    const authors = "Poga, piga, puma"

    //get data by id:
    const [papers, setPapers] = useState([
      {id:"1", title: "Rumor Detection on Social Media: Datasets, Methods and Opportunities", authors: authors, abstract: abstract, category: "ML", rating: "4.5/5", date:"15th June, 2020"},
      {id:"2", title: "Remote sensing image denoising ", abstract: abstract, category: "IP", authors: authors, rating: "3/5", date:"10th August, 2021"},
      {id:"3", title: "Remote sensing image denoising ", abstract: abstract, category: "IP", authors: authors, rating: "3/5", date:"10th August, 2021"},
      {id:"4", title: "Remote sensing image denoising ", abstract: abstract, category: "IP", authors: authors, rating: "3/5", date:"10th August, 2021"}
  ])

  const comments = [
    {userid:"1", name:"poger123" ,body: "Great work", date:"15th June, 2020"},
    {userid:"2", name:"akkas_mama" ,body: "Nobs", date:"13th July, 2021"}
  ]

  const openmodal = {
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: '1em',
      width: '40%',
      position: 'relative',
    },
    overlay: 
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }

  return (
    <div className='paperDetails'>

      {papers.filter(paper => paper.id === id).map(filteredPaper => (
        <div key={filteredPaper.id}>
          <h2>{filteredPaper.title}</h2>
          <h4>Publish Date: {filteredPaper.date}</h4>
          <h4>Category: {filteredPaper.category}</h4>
          <div className="content">
            <div className='abstract'>
              <h4>Abstract</h4>
              <p>{filteredPaper.abstract}</p>
            </div>
          </div>
        </div>
      ))}

      
        {star ? <div className="ratingDiv">
          <div className='rating'>
        {[...Array(5)].map((star, i) => { 
          const ratingValue = i + 1

          return (
            <label>
              <input type="radio" name='rating' value={ratingValue} 
              onClick={() => setRate(ratingValue)}/>
              <FiStar className='star' size={40} stroke={"#3f37c9"}
              fill = {ratingValue <= (hover || rate) ? "#ffc107" : "white"} 
              onMouseEnter={()=> setHover(ratingValue)}
              onMouseLeave={()=> setHover(null)}/>
            </label>
          )
        })}
      </div>
      <button className='button' onClick={() => rateSubmit()}>Submit</button>
      
        </div> : 
        <div className="ratingDiv">
           <h3>You rated this paper {rate} out of 5!</h3>
          <button className='button' onClick={reRate}>Re-rate</button>
        </div>}
     

      <h2>Comments</h2>
      <button className='writeReviewBtn' onClick={() => setModalIsOpen(true)}>Write review</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
      style={openmodal}>
        <div className="modal">
          <h2>Leave A Review!</h2>
          <textarea className='modalText'/>
          <div className="modalButton">
            <button className='button'>Submit</button>
            <button className='button' onClick={() => setModalIsOpen(false)}>Cancel</button>
          </div>
        </div>
      </Modal>

       <div className='commentSection'>
          {
            comments.map((comment) => (
              <div className="comments" key={comment.userid}>
                <h3>{comment.name}</h3>
                <h5>{comment.date}</h5>
                <hr/>
                <p>{comment.body}</p>
              </div>
            ))
          }
        </div> 

    </div>

  )
}

export default PaperDetails