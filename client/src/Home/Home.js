import React, { useState } from 'react'
import './Home.css'
import { FaSearch, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { Link } from 'react-router-dom'

const Home = () => {

    //Fetch from database

    const papers = [
        {id:"1", title: "Rumor Detection on Social Media: Datasets, Methods and Opportunities", category: "ML", rating: "4.5/5", date:"15th June, 2020"},
        {id:"2", title: "Remote sensing image denoising", category: "IP", rating: "3/5", date:"10th August, 2021"},
        {id:"3", title: "Public Safety Networks: Enabling Mobility", category: "DL", rating: "3.5/5", date:"10th August, 2021"},
        {id:"4", title: "Switch Fabric Technology", category: "SR", rating: "2/5", date:"10th August, 2021"}
    ]

    const [searchedPaper, setSearchedPaper] = useState('');
    const [action, setAction] = useState('title');

    let data = papers.filter((paper) => {
        if(action === 'title'){
            if(searchedPaper === "") {
                return paper
            } else if (paper.title.toLowerCase().includes(searchedPaper.toLowerCase())){
                return paper
            }
        } else if (action === 'filter'){
            return paper.category === "ML"
        }
        return papers
    })

    if(action === 'sort'){
        data = papers.filter((paper) => {
            return paper.category === "IP"
        })
    }

    if (action === "all"){
        data = papers
    }


  return (
    <div className='home'>

        <h2>Explore scientific, technical, and medical researches</h2>

        <div className='search'>
            <input type="text" placeholder='search a paper'
                onChange={(event) => {
                    setSearchedPaper(event.target.value)
                }}/>
            <button className='searchbtn'><FaSearch style={{ fill: '#edecff' }} fontSize="1em" onClick={() => setAction('all')}/></button>
            <button className='filterbtn'><FaFilter style={{ fill: '#edecff' }} fontSize="0.9em" onClick={() => setAction('filter')}/></button>
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