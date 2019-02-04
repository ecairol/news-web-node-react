import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

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
    console.log(">",featured);

    if (error) {
      // TODO: use <Error> component
      return <div>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </div>
    }
  
     return (
      <div className="c-news">
        <div className="c-news__featured">
          {featured.map((n) => 
            <div className="featured" key={n._id}>
              {n.title} <small>{n.humanDate}</small>
            </div>
          )}
        </div>

        <div className="c-news__list">
          {list.map((n) => 
            <div className="thumbnail" key={n._id}>
              {n.title} <small>{n.humanDate}</small>
            </div>
          )}
        </div>
      </div>
     )
   }
 }
 
 export default NewsFeed