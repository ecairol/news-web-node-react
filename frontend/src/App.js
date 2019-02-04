import React, { Component } from 'react';
//import './App.css';
import News from './news/News';
import Login from './login/Login';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="app">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          <Route exact path="/" component={News} />
          <Route exact path="/login" component={Login} />
        </main>
      </BrowserRouter>
    )
  }
}

export default App