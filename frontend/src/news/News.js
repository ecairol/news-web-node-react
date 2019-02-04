import React, { Component } from 'react'
import axios from 'axios';
import { API_URL } from '../constants.js';
import { observer, inject } from 'mobx-react';

@inject('news')
@observer
class News extends Component {
  state = {
     news: [],
     error: "",
     isLoading: false
   }

  componentDidMount() {
    //this.fetchNews();
    const newsStore = this.props.news;
    newsStore.findAll();
  }

   render () {
    let { news, error } = this.state;

    if (error) {
      // TODO: use <Error> component
      return <div>
          <h2>Oops! Something went wrong</h2>
          <p>{this.state.error}</p>
        </div>
    }
    
     return (
       <div className="component-news">
        <h1>News</h1>
        {this.props.news.map((n) => 
          <p key={n._id}>
            {n.title} <small>{n.humanDate}</small>
          </p>
        )}
       </div>
     )
   }
 }
 
 export default News