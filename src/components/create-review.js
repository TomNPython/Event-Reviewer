import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default function CreateReview() {

    const [date, setDate] = useState(new Date());
    const [sport, setSport] = useState('');
    const [event, setEvent] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewer, setReviewer] = useState('');


    const onSubmit = () => {
        const fullReview = {
            sport: sport,
            event: event,
            review: review,
            rating: rating,
            date: date,
            reviewer: reviewer
        }
        axios.post('http://localhost:3000/create', fullReview)
            .then(res => {
                console.log(res.data)
                window.location='/'
            })
            .catch(err => console.log('Error: ' + err))
    }

    return (
        <div>
            <h2>Create Review</h2>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Sport:</label>
                    <select 
                    name='sport'
                    className='form-control'
                    onChange= {e =>{setSport(e.target.value)}}>
                        <option value="Football">Football</option>
                        <option value="Rugby">Rugby</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Boxing">Boxing</option>
                        <option value="Baseball">Baseball</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Darts">Darts</option>
                        <option value="Other">Other</option>   
                    </select>

                </div>
                <div className='form-group'>
                    <label>Event:</label>
                    <input type='text' 
                    name='event'
                    className='form-control'
                    onChange= {e =>{setEvent(e.target.value)}}>   
                    </input>

                </div>
                <div className='form-group'>
                    <label>Review:</label>
                    <textarea rows='6' 
                    name='review'
                    className='form-control'
                    onChange= {e =>{setReview(e.target.value)}}>   
                    </textarea>

                </div>
                <div className='form-group'>
                    <label>Rating (1-5):</label>
                    <select className='form-control' name='rating'
                    onChange={e => setRating(e.target.value)}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                </div>
                <div className='form-group'>
                    <label>Reviewer (optional):</label>
                    <input type='text' 
                    name='reviewer'
                    className='form-control'
                    onChange= {e =>{setReviewer(e.target.value)}}>   
                    </input>

                </div>
                <div className='form-group'>
                    <label>Date:</label>
                    <DatePicker selected={date}
                    name='date'
                    onChange= {e =>{setDate(e)}} />   
                </div>
                <div className='form-group'>
                    <input type='submit' value='Create Review' className='btn btn-primary'></input>
                </div>
            </form>
        </div>
    )
}
