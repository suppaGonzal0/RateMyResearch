import React, { useState } from 'react'
import './Home.css'
import { FaSearch, FaFilter } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { Link } from 'react-router-dom'

const Home = () => {

    //Fetch from database

    const [papers, setPapers] = useState([
        {id:"1", title: "Rumor Detection on Social Media: Datasets, Methods and Opportunities", category: "ML", rating: "4.5/5", date:"15th June, 2020"},
        {id:"2", title: "Remote sensing image denoising ", category: "IP", rating: "3/5", date:"10th August, 2021"},
        {id:"3", title: "Remote sensing image denoising ", category: "IP", rating: "3/5", date:"10th August, 2021"},
        {id:"4", title: "Remote sensing image denoising ", category: "IP", rating: "3/5", date:"10th August, 2021"}
    ])

  return (
    <div className='home'>

        <h2>Explore scientific, technical, and medical researches</h2>

        <div className='search'>
            <input type="text" placeholder='search a paper'/>
            <button className='searchbtn'><FaSearch style={{ fill: '#edecff' }} fontSize="1em" /></button>
            <button className='filterbtn'><FaFilter style={{ fill: '#edecff' }} fontSize="0.9em" /></button>
        </div>

        <div className='papers'>
            {papers.map((paper) => (
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