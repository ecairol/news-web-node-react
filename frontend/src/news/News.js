import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject('store')

@observer
class News extends Component {
  state = {
     news: [],
     error: "",
     isLoading: false
   }

  componentDidMount() {
    //this.fetchNews();
    const newsStore = this.props.store.news;
    newsStore.findAll();
  }

   render () {
    let { list, error } = this.props.store.news.state;

    if (error) {
      // TODO: use <Error> component
      return <div>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </div>
    }
  
     return (
       <div className="component-news">
        <h1>News</h1>
        {list.map((n) => 
          <p key={n._id}>
            {n.title} <small>{n.humanDate}</small>
          </p>
        )}
       </div>
     )
   }
 }
 
 export default News