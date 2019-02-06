import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import NewsForm from '../NewsForm';

@inject('store')

@observer
class NewsEdit extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    const newsStore = this.props.store.news;
    newsStore.load(id);
  }

  render () {
    const { selected } = this.props.store.news.state;

    return (
      <div className="c-news-edit page">
        <header className="c-admin__header">  
        <h2 className="page__title">Edit News</h2>
        <Link className="btn btn--small" to="/admin/news">Back</Link>
        </header>

        <NewsForm newsStore={this.props.store.news} />
      </div>
    )
  }
}
 
export default NewsEdit