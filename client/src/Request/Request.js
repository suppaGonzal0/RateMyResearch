import axios from 'axios';
import React, { useState } from 'react'
import './Request.css'

const Request = ({admin}) => {

    const [title, setTitle] = useState();
    const [authors, setAuthors] = useState();
    const [date, setDate] = useState();
    const [category, setCategory] = useState();
    const [abstract, setAbstract] = useState();
    const [link, setLink] = useState();

    const handleReq = (e) => {
        e.preventDefault()
        const userInfo = JSON.parse(window.localStorage.getItem("userInfo"))
        axios.post("http://localhost:3001/papers/addPaper", {
            title: title,
            authors: authors,
            category: category,
            date: date,
            link: link,
            abstract: abstract,
            userID: userInfo._id,
            }).then((response) => {
                if(response.data.message) {
                console.log(response.data.message)
                } else {
                console.log(response.data)
                alert(response.data)
                }
            }); 
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const userInfo = JSON.parse(window.localStorage.getItem("userInfo"))
        axios.post("http://localhost:3001/requests/sendRequest", {
            title: title,
            authors: authors,
            category: category,
            date: date,
            link: link,
            abstract: abstract,
            userID: userInfo._id,
            email: userInfo.email,
            username: userInfo.username
            }).then((response) => {
                if(response.data.message) {
                console.log(response.data.message)
                } else {
                console.log(response.data)
                alert(response.data)
                }
            });
    }


    return (
        <div className='req'>
                <div className='reqCard'>
                {admin ? <h2 >Add a paper</h2> : <h2 >Request a paper</h2>}
                <form className='reqForm'>
                    <div className="reqField">
                        <label>Paper Title</label>
                        <input type="text" required
                            onChange={(e) => {
                            setTitle(e.target.value);
                            }} />
                    </div>
                    <div className="reqField">
                        <label>Authors</label>
                        <input type="text" required
                            onChange={(e) => {
                            setAuthors(e.target.value);
                            }} />
                    </div>
                    <div className='dateNcat'>
                        <div className="reqField">
                            <label>Publish Date</label>
                            <input type="date" required
                                onChange={(e) => {
                                setDate(e.target.value);
                                }} />
                        </div>
                        <div className="reqField">
                            <label>Paper Category</label>
                            <select required onChange={(e) => {
                                setCategory(e.target.value);
                                }}>
                                <option value="">Choose a category</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="Deep Learning">Deep Learning</option>
                                <option value="Image Processing">Image Processing</option>
                                <option value="Speech Recognition">Speech Recognition</option>
                            </select>
                        </div>
                    </div>
                    <div className="reqField">
                        <label>Paper Abstract</label>
                        <textarea type="text" required
                            onChange={(e) => {
                            setAbstract(e.target.value);
                            }} />
                    </div>
                    <div className="reqField">
                        <label>Paper Link</label>
                        <input type="text" required
                            onChange={(e) => {
                            setLink(e.target.value);
                            }} />
                    </div>
                    {admin ? <button onClick={(e) => handleReq(e)}>Add paper</button> 
                    : <button onClick={(e) => handleAdd(e)}>Send request</button>}
                </form>
                </div>
            </div>          
  )
}

export default Request