import React, { useState } from 'react'
import './Home.css'
import { FaSearch, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { Link } from 'react-router-dom'

const Home = () => {

    //Fetch from database

    const papers = [
        {id:"1", title: "Rumor Detection on Social Media: Datasets, Methods and Opportunities", category: "Machine Learning", rating: 4.5, date:"15th June, 2020"},
        {id:"2", title: "Remote sensing image denoising", category: "Image Processing", rating: 3, date:"10th August, 2021"},
        {id:"3", title: "Public Safety Networks: Enabling Mobility", category: "Deep Learning", rating: 3.5, date:"10th August, 2021"},
        {id:"4", title: "Switch Fabric Technology", category: "Speech Recognition", rating: 2, date:"10th August, 2021"}
    ]

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

    const filterCategory = (value) => {
        setFilter(value)
        setAction("filter")
    }

    if(action === 'sort'){
        data = papers.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
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

            <button className='searchbtn'><FaSearch style={{ fill: '#edecff' }} fontSize="1em" onClick={() => window.location.reload()}/></button>
            
            <button className='filterbtn'><FaFilter style={{ fill: '#edecff' }} fontSize="0.9em"/>           
                <div className="dropdown">
                    <p id="ml" onClick={() => filterCategory(document.getElementById("ml").innerHTML)}>Machine Learning</p>
                    <p id="dl" onClick={() => filterCategory(document.getElementById("dl").innerHTML)}>Deep Learning</p>
                    <p id="ip" onClick={() => filterCategory(document.getElementById("ip").innerHTML)}>Image Processing</p>
                    <p id="sr" onClick={() => filterCategory(document.getElementById("sr").innerHTML)}>Speech Recognition</p>
                </div>
            </button>

            <button className='sortbtn'><FaSortAmountDown style={{ fill: '#edecff' }} fontSize="0.9em" onClick={() => setAction('sort')}/></button>
        </div>

        <div className='papers'>

            {data.map((paper) => (
                
                <div className='paper' key={paper.id}>

                    <h3>{paper.title}</h3>

                    <div className='paperInfo'>
                        <div className='left'>
                            <p><b>Publish date:</b> {paper.date}</p>
                            <p><b>Category:</b> {paper.category}</p>
                        </div>
                        <div className='right'>
                            <p>{paper.rating}</p>
                            <button className='save'><FiBookmark style={{ fill: 'none', stroke: "#3f37c9", strokeWidth: "2.5"}} fontSize="2em" /></button>
                        </div>
                    </div>

                        <Link to={`/paper/${paper.id}`}>
                            <button className='button'>View</button>
                        
                        </Link>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Home