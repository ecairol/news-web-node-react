import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@inject('store')

@observer
class NewsForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const { newsStore } = this.props; 
    newsStore.setError('');
    await newsStore.onUpdateForm();
    this.props.history.push('/admin/news');
  }

  render () {
    const { newsStore } = this.props;
    const { title, description, date, image } = newsStore.state.selected;
    
    return (
      <form onSubmit={this.onSubmit} className="c-news-form">
        <div className="form-control">
          <input placeholder="News Title" type="text" name="title" value={title} onChange={(e) => newsStore.onFieldChange(e.target.name, e.target.value)} />
        </div>

        <div className="form-control">
          <input placeholder="Description" type="text" name="description" value={description} onChange={(e) => newsStore.onFieldChange(e.target.name, e.target.value)} />
        </div>

        <div className="form-control">
          <input placeholder="Date" type="text" name="date" value={date} onChange={(e) => newsStore.onFieldChange(e.target.name, e.target.value)} />
        </div>

        <div className="form-control">
          <input placeholder="Image" type="text" name="image" value={image} onChange={(e) => newsStore.onFieldChange(e.target.name, e.target.value)} />
        </div>

        <div className="form-control">
          <button type="submit">Save</button>
        </div>

        <p className="error">{newsStore.state.error}</p>
      </form>
    )
  }
}

export default withRouter(NewsForm);