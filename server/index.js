const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const db = require('./queries');   Refactored into routes folder

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
  });

//app.get('/reviews', db.getReviews)

const createRouter = require('./routes/create')
const reviewsRouter = require('./routes/reviews')

app.use('/', createRouter)
app.use('/reviews', reviewsRouter)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });