import React, { useState } from 'react'
import './Request.css'

const Request = () => {

    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [category, setCategory] = useState();
    const [abstract, setAbstract] = useState();
    const [link, setLink] = useState();

    const userView = () => {
        return (
            <div className='req'>
                <div className='reqCard'>
                <h2 >Request A Paper</h2>
                <form className='reqForm'>
                    <div className="reqField">
                        <label>Paper Title</label>
                        <input type="text" required
                            onChange={(e) => {
                            setTitle(e.target.value);
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
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
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
                    <button>Submit Request</button>
                </form>
                </div>
            </div>
        )
    }

    return (
        <div className='req'>{userView()}</div>
  )
}

export default Request