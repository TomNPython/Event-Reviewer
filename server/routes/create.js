const router = require('express').Router();

const db = require('../queries')

router.post('/create', db.createReview);
router.put('/edit/:id', db.editReview)

module.exports = router