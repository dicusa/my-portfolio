import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <nav className="navbar">
          <ul className="navbar-list">
            <li><NavLink exact to="/" className="nav-link" activeClassName="active-link">Home</NavLink></li>
            <li><NavLink to="/contact" className="nav-link" activeClassName="active-link">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
