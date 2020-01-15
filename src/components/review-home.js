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
        <div className='container'>
            <img src={require('../assets/writing-bg.jpg')}></img>
            <div className='intro-text'>
                <h1>Event Reviewer</h1>
                <p>Read and Write reviews of recent sportings events. Stay up to date with the latest goings on from sport around
                    the world. Read reviews and ratings from viewers to check if you've missed anything exciting!
                </p>
                <p>Recent Reviews:</p>
                <div className='intro-reviews'>{reviews.map(review => 
                    <div key={review.id} className='padded-review'>{review.event}</div>
                )}
                </div>
            </div>
        </div>
    )
}
