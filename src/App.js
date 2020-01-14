import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import ReviewHome from './components/review-home';

function App() {
  return (
    <Router>
      <Route path='/' exact component={ReviewHome} />
    </Router>
  );
}

export default App;
