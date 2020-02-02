const router = require('express').Router();

const db = require('../queries')

router.post('/create', db.createReview);
router.put('/edit', db.editReview)

module.exports = router