const router = require('express').Router();

const db = require('../queries')

router.get('/', db.getReviews)
router.get('/:id', db.getReviewById)
router.delete('/:id', db.deleteReview)

module.exports = router