const router = require('express').Router();

const db = require('../queries')

router.post('/create', db.createReview)

module.exports = router