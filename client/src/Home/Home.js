import React, { useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    //Fetch from database

    const [papers, setPapers] = useState([
        {title: "Rumor Detection on Social Media: Datasets, Methods and Opportunities", category: "ML", rating: "4.5/5", date:"15th June, 2020"},
        {title: "Remote sensing image denoising ", category: "IP", rating: "3/5", date:"10th August, 2021"},
        {title: "Remote sensing image denoising ", category: "IP", rating: "3/5", date:"10th August, 2021"},
        {title: "Remote sensing image denoising ", category: "IP", rating: "3/5", date:"10th August, 2021"}
    ])

  return (
    <div className='home'>

        <h2>Explore scientific, technical, and medical researches</h2>

        <div className='search'>
            <input type="text" placeholder='search a paper'/>
            <button className='searchbtn'><FontAwesomeIcon icon={faSearch} /></button>
            <button className='filterbtn'><FontAwesomeIcon icon={faFilter} /></button>
        </div>

        <div className='papers'>
            {papers.map((paper) => (
                <div className='paper'>
                    <h3>{paper.title}</h3>
                    <div className='paperInfo'>
                        <div className='left'>
                            <p><b>Publish date:</b> {paper.date}</p>
                            <p><b>Category:</b> {paper.category}</p>
                        </div>
                        <div className='right'>
                            <p>{paper.rating}</p>
                            <button className='save'>+</button>
                        </div>
                    </div>
                    <button className='read'>Read</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home