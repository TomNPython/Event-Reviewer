import React from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom'
const { useState, useEffect } = React

export default function ReviewHome() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => { //may need reviews as dependency if it breaks? probably not
        axios.get('http://localhost:3000/reviews')
            .then(res => {
                setReviews(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(reviews)

    return (
        <div className='container'>
            <img src={require('../assets/writing-bg.jpg')} alt='pen and paper background'></img>
            <div className='intro-text'>
                <h1>Event Reviewer</h1>
                <p>Read and write reviews of recent sportings events. Stay up to date with the latest goings on from sport around
                    the world. Read reviews and ratings from viewers to check if you've missed anything exciting!
                </p>
                <p>Recent Reviews:</p>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Sport</th>
                            <th>Event</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {reviews.map(review => 
                    <tr key={review.id}>
                        <td>{review.date.split('T')[0]}</td>
                        <td>{review.sport}</td>
                        <td>{review.event}</td>
                        <td><Link to={'/reviews/' + review.id} review={review}>Read review</Link></td>
                    </tr>
                )}
                
                    </tbody>
                </table>
            </div>
        </div>
    )
}
