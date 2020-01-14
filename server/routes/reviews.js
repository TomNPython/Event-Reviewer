const router = require('express').Router();

const db = require('../queries')

router.get('/', db.getReviews)

module.exports = router