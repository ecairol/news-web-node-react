import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import NewsFeatured from '../../components/NewsFeatured';
import NewsList from '../../components/NewsList';

@inject('store')

@observer
class NewsFeed extends Component {
  componentDidMount() {
    const newsStore = this.props.store.news;
    newsStore.findAll();
  }

   render () {
    const { error } = this.props.store.news.state;
    const { featured, nonFeatured } = this.props.store.news;

    if (error) {
      // TODO: use <Error> component
      return <div>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </div>
    }
  
     return (
      <div className="c-news-feed page">
        <NewsFeatured news={featured} />
        <NewsList news={nonFeatured} />
      </div>
     )
   }
 }
 
 export default NewsFeed