import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default function CreateReview() {

    const [date, setDate] = useState(new Date());
    const [sport, setSport] = useState('hi');
    const [event, setEvent] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewer, setReviewer] = useState('');

    console.log(sport)
    console.log(date)

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
            .then(res => console.log(res.data))
            .catch(err => console.log('Error: ' + err))

    }

    return (
        <div>
            <p>Create Review</p>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Sport:</label>
                    <input type='text' 
                    name='sport'
                    className='form-control'
                    onChange= {e =>{setSport(e.target.value)}}>   
                    </input>

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
                    <input type='text' 
                    name='review'
                    className='form-control'
                    onChange= {e =>{setReview(e.target.value)}}>   
                    </input>

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
                    <label>Reviewer:</label>
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