import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Modal from 'react-modal'
import './PaperDetails.css'
import { FiStar } from 'react-icons/fi';
import axios from "axios"
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const PaperDetails = () => {

  const {id} = useParams();

  const [rate, setRate] = useState(0)
  const [hover, setHover] = useState()
  const [star, setStar] = useState()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [comment, setComment] = useState()
  const [reviews, setReviews] = useState([])
  const [saved, setSaved] = useState()
  const [savedPapers, setSavedPapers] = useState()
  const [paper, setPaper] = useState([])
  const [isBanned, seIsBanned] = useState()
  const [userRatings, setUserRatings] = useState()
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo"))

    const writeReview = () => {
      paper.reviews.push({userID: userInfo._id, date: new Date().toJSON().slice(0,10).replace(/-/g,'/') , username: userInfo.username, comment: comment})
      axios.put(`http://localhost:3001/papers/updatePaper/${paper._id}`, {
          reviews: paper.reviews
        }).then((response) => {
          console.log(response)
      })
    }

    const modalHandler = () => {
      writeReview()
      setModalIsOpen(false)
    }

    useEffect(() => {
      axios.get(`http://localhost:3001/papers/getPaper/${id}`).then((response) => {
        setPaper(response.data);
        setReviews(paper.reviews)
        });
        
      axios.get(`http://localhost:3001/users/getUser/${userInfo._id}`).then((response) => {
        seIsBanned(response.data.isBanned);

        if(response.data.ratings.filter(paper => {return paper.paperID === id}).length === 0) {
          setStar(true)
          setUserRatings(response.data.ratings)
        } else{
          setStar(false)
          response.data.ratings.map((paper, i) => {
            if(paper.paperID === id){
              setRate(response.data.ratings[i].rate)
            }
            return ""
          })
        }

        if(response.data.savedPapers.filter(paper => {return paper.paperID === id}).length === 0) {
          setSaved(false)
          setSavedPapers(response.data.savedPapers)
        } else{
            setSaved(true)
        }

        });  
      return () => {}
    }, [id, userInfo._id, paper.reviews])
    

    const rateSubmit = () => {
        userRatings.push({paperID: id, rate:rate})
        axios.put(`http://localhost:3001/users/updateUser/${userInfo._id}`, {
          ratings: userRatings
        }).then((response) => {
          console.log(response)
      })
    }

    // const reRate = () => {
    //   setStar(true)
    //   setRate(0)
    // }

  const handleSave = () => {
    savedPapers.push({paperID: id, title: paper.title, authors: paper.authors, category: paper.category})
    axios.put(`http://localhost:3001/users/updateUser/${userInfo._id}`, {
      savedPapers: savedPapers
      }).then((response) => {
        if(!response.data.message){
          alert("This paper is saved")
        } else {
          console.log(response.data.message)
        }
      })
  }


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

    <main className='paperDetailsMain'>

    <div className='paperDetails'>

        <div className="paperDetailsContent">
          <h2>{paper.title}</h2>
          <h3>Written by {paper.authors}</h3>
          <h4>Publish Date: {paper.date && paper.date.split("T")[0]}</h4>
          <h4>Category: {paper.category}</h4>
          <div className="content">
            <div className='abstract'>
              <h4>Abstract</h4>
              <p>{paper.abstract}</p>
            </div>
          </div>
          {saved ? <div className='saveBtn'><FaBookmark style={{ fill: '#3f37c9' }} fontSize="2em"/>  <b>This paper is saved</b></div> : <div className='saveBtn'><FaRegBookmark style={{ fill: '#3f37c9' }} fontSize="2em" cursor="pointer" onClick={(handleSave)}/>  <b>Save Paper</b></div>}
        </div>
      

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
          {/* <button className='button' onClick={reRate}>Re-rate</button> */}
        </div>}
     


      <h2>Comments</h2>

      {!isBanned ? 
        <>
          <button className='writeReviewBtn' onClick={() => setModalIsOpen(true)}>Write review</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
          style={openmodal} ariaHideApp={false}>
            <div className="modal">
              <h2>Leave A Review!</h2>
              <textarea className='modalText' onChange={(e) => setComment(e.target.value)}/>
              <div className="modalButton">
                <button className='button' onClick={modalHandler}>Submit</button>
                <button className='button' onClick={() => setModalIsOpen(false)}>Cancel</button>
              </div>
            </div>
          </Modal>
          </>
        : <button className='writeReviewBtn'> You are banned</button>}




       <div className='commentSection'>
          {
            reviews &&
            <>
            {
              reviews.map((comment) => (
                <div className="comments" key={comment.userid}>
                  <h3>{comment.username}</h3>
                  <h5>{comment.date && comment.date.split("T")[0]}</h5>
                  <hr/>
                  <p>{comment.comment}</p>
                </div>
              ))
            }</>
          }
        </div> 

    </div>
    </main>
  )
}

export default PaperDetails