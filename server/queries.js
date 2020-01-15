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
    pool.query('SELECT * FROM reviews ORDER BY id ASC', (err, results) => {
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

module.exports = {
    getReviews, 
    getReviewById
}