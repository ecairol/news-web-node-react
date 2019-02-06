import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { isAuthenticated, logout } from '../../services/authentication';
import { withRouter } from 'react-router-dom';
import NewsList from '../../components/NewsList';
import NewsEdit from '../../components/NewsEdit';

@inject('store')

@observer
class Admin extends Component {

   componentDidMount() {
    const newsStore = this.props.store.news;
    newsStore.findAll();
  }
  
  componentDidUpdate(prevProps) {
    const newsStore = this.props.store.news;
    if (prevProps.match.params.id !== this.props.match.params.id) {
      if (!this.props.match.params.id) {
        newsStore.findAll();
      }
    }
  }

   doLogout = () => {
    if (isAuthenticated()) {
      logout();
      this.props.history.push('/login');
    }
   }

   render () {
     const { props } = this;
     const { list } = props.store.news.state;

     return (
      <div className="c-admin page">
        <header className="c-admin__header">
          <h1 className="page__title">Admin</h1>
          <button className="btn btn--link" onClick={this.doLogout}>Logout</button>
        </header>
        <p className="page__ctas">
          <Link className="btn btn--small" to="/admin/news">New</Link>
        </p>

        <Route
          path={'/admin/news/:id'} 
          component={NewsEdit} />

        <Route
          exact
          path={'/admin/news'}
          render={() => <NewsList news={list} editable={true} />}
        />

      </div>
     )
   }
 }
 
 export default withRouter(Admin)