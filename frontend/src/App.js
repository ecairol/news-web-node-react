import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';
//import './App.css';
import NewsFeed from './components/NewsFeed/component';
import Login from './components/Login/component';
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
                <Link to="/">News</Link>
                <Link to="/login">Login</Link>
              </div>
            </nav>
            <div className="app__main-content">
              <div className="container">
                <Route exact path="/" component={NewsFeed} />
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