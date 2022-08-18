import React, { useState, useEffect } from 'react'
import './Home.css'
import { FaAlignJustify, FaFilter, FaSortAmountDown, FaSortAmountUp, FaCalendarPlus, FaCalendarMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import axios from "axios"

const Home = ({admin}) => {

    const [papers, setPapers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/papers/getAllPapers").then((response) => {
            setPapers(response.data);
        });
    }, [papers])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/papers/deletePaper/${id}`).then((response) => {
            console.log(response.data)
        });
    }
    

    const [searchedPaper, setSearchedPaper] = useState('');
    const [action, setAction] = useState('title');
    const [filter, setFilter] = useState();

    let data = papers.filter((paper) => {
        if(action === 'title'){
            if(searchedPaper === "") {
                return paper
            } else if (paper.title.toLowerCase().includes(searchedPaper.toLowerCase())){
                return paper
            }
        } else if (action === 'filter'){
            return paper.category === filter
        }
    })

    if(action === 'sortRatingDes'){
        data = papers.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
    } else if(action === 'sortRatingAsc'){
        data = papers.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
    } else if(action === 'sortDateDes'){
        data = papers.sort((a, b) => (a.date < b.date) ? 1 : -1)
    } else if(action === 'sortgDateAsc'){
        data = papers.sort((a, b) => (a.date > b.date) ? 1 : -1)
    }

    const filterCategory = (value) => {
        setFilter(value)
        setAction("filter")
    }



  return (
    
    <div className='home'>

        <h2>Explore scientific, technical, and medical researches</h2>

        <div className='search'>
            <input type="text" placeholder='search a paper'
                onChange={(event) => {
                    setSearchedPaper(event.target.value)
                    setAction("title")
                }}/>
            
            <div className="icons">

                <button onClick={() => window.location.reload()}><FaAlignJustify style={{ fill: '#edecff' }} fontSize="1em"/></button>

                <button className='filterbtn'><FaFilter style={{ fill: '#edecff' }} fontSize="0.9em"/>           
                    <div className="dropdown">
                        <p id="ml" onClick={() => filterCategory(document.getElementById("ml").innerHTML)}>Machine Learning</p>
                        <p id="dl" onClick={() => filterCategory(document.getElementById("dl").innerHTML)}>Deep Learning</p>
                        <p id="ip" onClick={() => filterCategory(document.getElementById("ip").innerHTML)}>Image Processing</p>
                        <p id="sr" onClick={() => filterCategory(document.getElementById("sr").innerHTML)}>Speech Recognition</p>
                    </div>
                </button>

                <button onClick={() => setAction('sortRatingDes')}><FaSortAmountDown style={{ fill: '#edecff' }} fontSize="0.9em"/></button>
                    
                <button onClick={() => setAction('sortRatingAsc')}><FaSortAmountUp style={{ fill: '#edecff' }} fontSize="0.9em"/></button>
                
                <button onClick={() => setAction('sortDateDes')}><FaCalendarPlus style={{ fill: '#edecff' }} fontSize="0.9em"/></button>
                    
                <button onClick={() => setAction('sortgDateAsc')}><FaCalendarMinus style={{ fill: '#edecff' }} fontSize="0.9em"/></button>
            
            </div>

        </div>

        <div className='papers'>

            {data.map((paper) => (
                
                <div className='paper' key={paper._id}>

                    <h3><a href={paper.link} target="_blank" rel="noreferrer">{paper.title}</a></h3>
                    <h4>Written by {paper.authors}</h4>

                    <div className='paperInfo'>
                        <div className='left'>
                            <p><b>Publish date:</b> {paper.date.split("T")[0]}</p>
                            <p><b>Category:</b> {paper.category}</p>
                        </div>
                        <div className='right'>
                            <p>{paper.rating}/5</p>
                        </div>
                    </div>
                    {admin ? 
                        <div className="homeBtn">
                            <Link to={`/paper/${paper._id}`}>
                                <button className='button'>View</button>
                            </Link>
                            <button className='button' onClick={() => handleDelete(paper._id)}>Delete</button>
                        </div> :
                        <Link to={`/paper/${paper._id}`}>
                        <button className='button'>View</button>
                        </Link>
                    }
                    
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Home