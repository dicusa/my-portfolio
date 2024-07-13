import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
