import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import ReviewHome from './components/review-home';
import Navbar from './components/navbar';
import CreateReview from './components/create-review';
import Contact from './components/contact';
import ShowReview from './components/show-review';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={ReviewHome} />
      <Route path='/create' component={CreateReview} />
      <Route path='/contact' component={Contact} />
      <Route path='/reviews/:id' component={ShowReview} />
    </Router>
  );
}

export default App;
