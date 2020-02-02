require('dotenv').config();

const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,  // NEEDS OWN KEYS TO RUN ELSEWHERE 
    port: 5432
})

const getReviews = (req, res) => {
    pool.query('SELECT * FROM reviews ORDER BY date DESC', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const getReviewById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM reviews WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const createReview = (req, res) => {
    const {sport, event, review, rating, date, reviewer} = req.body

    pool.query('INSERT INTO reviews (sport, event, review, rating, date, reviewer) VALUES ($1, $2, $3, $4, $5, $6)', 
    [sport, event, review, rating, date, reviewer], (err, results) => {
        if (err) {
            throw err
            
        }
        res.status(201).send(`Review added with id: ${results} `)
    })
}

const deleteReview = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM reviews WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).send(`Review with id ${id} deleted.`)
    })
}

const editReview = (req, res) => {
    const id = parseInt(req.params.id);
    const {sport, event, review, rating, date, reviewer} = req.body

    pool.query(
        'UPDATE reviews SET sport = $1, event = $2, review = $3, rating = $4, date = $5, reviewer = $6 WHERE id = $7',
        [sport, event, review, rating, date, reviewer, id], 
        (err, results) => {
            if (err) {
                throw err
            }

            response.status(200).send(`Review ${review} updated!`)
        }
    )
}

module.exports = {
    getReviews, 
    getReviewById, 
    createReview, 
    deleteReview, 
    editReview
}