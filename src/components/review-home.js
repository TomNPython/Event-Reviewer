import React from 'react'
import axios from 'axios';
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
        <div>
            <h1>Event Reviewer</h1>
            <div>{reviews.map(review => 
                <div key={review.id}>{review.event}</div>
            )}
            </div>
        </div>
    )
}
