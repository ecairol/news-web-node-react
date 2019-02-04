import React, { Component } from 'react'
import axios from 'axios';
import {API_URL} from '../constants.js';

class News extends Component {
  state = {
     news: [],
     error: "",
     isLoading: false
   }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    return axios.get(`${API_URL}/news`)
      .then((response) => {
        const news = response.data;
        this.setState({ isLoading: false, news});
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
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
        {news.map((n) => 
          <p key={n._id}>
            {n.title}
          </p>
        )}
       </div>
     )
   }
 }
 
 export default News