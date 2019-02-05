import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import NewsFeatured from '../NewsFeatured/component';
import NewsList from '../NewsList/component';

@inject('store')

@observer
class NewsFeed extends Component {
  state = {
     news: [],
     error: "",
     isLoading: false
   }

  componentDidMount() {
    const newsStore = this.props.store.news;
    newsStore.findAll();
  }

   render () {
    const { list, error } = this.props.store.news.state;
    const { featured } = this.props.store.news;

    if (error) {
      // TODO: use <Error> component
      return <div>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </div>
    }
  
     return (
      <div className="c-news-feed">
        <NewsFeatured news={featured} />
        <NewsList news={list} />
      </div>
     )
   }
 }
 
 export default NewsFeed