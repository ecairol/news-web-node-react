import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';
//import './App.css';
import News from './news/News';
import Login from './login/Login';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import store from "./stores";

@observer
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <main className="app">
            <nav className="app__main-nav">
              <div className="container">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
              </div>
            </nav>
            <div className="app__main-content">
              <div className="container">
                <Route exact path="/" component={News} />
                <Route exact path="/login" component={Login} />
              </div>
            </div>
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App