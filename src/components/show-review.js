import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const { useState, useEffect } = React; 

export default function ShowReview(props) {
    
    const [review, setReview] = useState([])

    useEffect(() => {
    axios.get('http://localhost:3000/reviews/' + props.match.params.id)
        .then(res => {
            console.log(res.data)
            setReview(res.data)
        })
        .catch(err => console.log('Error: ' + err))
        
    }, [])

    const deleteReview = (id) => {
        axios.delete('http://localhost:3000/reviews/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='show-review'>
            {review.map(rev => 
                <div key={rev.id}>
                    <label>Event:</label>
                    <p>{rev.event}</p>
                    <label>Review:</label>
                    <p className='review-box'>{rev.review}</p>
                    <p><em>By {rev.reviewer || 'anonymous'} on {rev.date.split('T')[0]}</em></p>
                    <a href='/' onClick={() => deleteReview(rev.id)}>Delete Review | </a>
                    <Link to={'/edit/'+rev.id}>Edit Review</Link>
                </div>
            )}
        </div>
    )
}
