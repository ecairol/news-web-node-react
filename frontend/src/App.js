import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import store from "./stores";
import Login from './views/Login';
import Admin from './views/Admin';
import NewsFeed from './views/NewsFeed';

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
                <Link to="/admin/news">Admin</Link>
              </div>
            </nav>
            <div className="app__main-content">
              <div className="container">
                <Route exact path="/" component={NewsFeed} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/admin/news/:id?" component={Admin} />
              </div>
            </div>
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App