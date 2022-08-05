import React, { useState } from 'react'
import './Request.css'

const Request = () => {

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [date, setDate] = useState();
    const [category, setCategory] = useState();
    const [abstract, setAbstract] = useState();
    const [link, setLink] = useState();

    //userType
    let user = "admin"

    const view = (header, button) => {
        return (
            <div className='req'>
                <div className='reqCard'>
                <h2 >{header}</h2>
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
                            setAuthor(e.target.value);
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
                                <option value="volvo">Machine Learning</option>
                                <option value="saab">Deep Learning</option>
                                <option value="mercedes">Image Processing</option>
                                <option value="audi">Speech Recognition</option>
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
                    <button>{button}</button>
                </form>
                </div>
            </div>
        )
    }

    return (
        <div className='req'>
            {user==="admin" ? 
            <>{view("Add A Paper", "Add")}</> : 
            <>{view("Request A Paper", "Submit Request")}</>}
        </div>               
  )
}

export default Request