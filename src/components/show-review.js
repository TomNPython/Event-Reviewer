import React from 'react';
import axios from 'axios';
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

    console.log(review)
    console.log(review[0])
    return (
        <div className='show-review'>
            {review.map(rev => 
                <div key={rev.id}>
                    <label>Event:</label>
                    <p>{rev.event}</p>
                    <label>Review:</label>
                    <p>{rev.review}</p>
                    <p><em>By {rev.reviewer || 'anonymous'} on {rev.date.split('T')[0]}</em></p>
                </div>
            )}
        </div>
    )
}
