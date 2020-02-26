import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


export default function EditReview(props) {

    const [date, setDate] = useState(new Date());
    const [sport, setSport] = useState('');
    const [event, setEvent] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewer, setReviewer] = useState('');

useEffect(() => {
    axios.get('http://localhost:3000/reviews/' + props.match.params.id)
        .then(res => {
            console.log(res.data)
            setSport(res.data[0].sport)
            setEvent(res.data[0].event)
            setReview(res.data[0].review)
            setRating(res.data[0].rating)
            setReviewer(res.data[0].reviewer)
        })
        .catch(err => console.log('Error: ' + err))
        
    }, [])

    const onSubmit = () => {
        const fullReview = {
            sport: sport,
            event: event,
            review: review,
            rating: rating,
            date: date,
            reviewer: reviewer
        }
        axios.put('http://localhost:3000/edit/'+ props.match.params.id, fullReview)
            .then(res => {
                console.log(res.data)
                window.location='/'
            })
            .catch(err => console.log('Error: ' + err))
    }

    return (
        <div>
            <h2>Edit Review: {event}</h2>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Sport:</label>
                    <input type='text' 
                    name='sport'
                    placeholder={sport}
                    className='form-control'
                    onChange= {e =>{setSport(e.target.value)}}>   
                    </input>

                </div>
                <div className='form-group'>
                    <label>Event:</label>
                    <input type='text' 
                    name='event'
                    placeholder={event}
                    className='form-control'
                    onChange= {e =>{setEvent(e.target.value)}}>   
                    </input>

                </div>
                <div className='form-group'>
                    <label>Review:</label>
                    <br/>
                    <p><em>Current Review: {review}</em></p>
                    <textarea rows='6' 
                    name='review'
                    className='form-control'
                    onChange= {e =>{setReview(e.target.value)}}>   
                    </textarea>

                </div>
                <div className='form-group'>
                    <label>Rating (1-5):</label>
                    <select className='form-control' 
                    placeholder={rating}
                    name='rating'
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
                    placeholder={reviewer}
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
                    <input type='submit' value='Edit Review' className='btn btn-primary'></input>
                </div>
            </form>
        </div>
    )
}
