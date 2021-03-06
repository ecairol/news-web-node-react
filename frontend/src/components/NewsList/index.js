import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { observer } from "mobx-react";

@observer
class NewsList extends Component {

  render() {
    return (
      <div className="c-news-list">
        {this.props.news.map((n) => 
          <div className="c-news-list__box" key={n._id}>
            <div className="c-news-list__box-image">
              <img src={n.image || 'https://www.dike.lib.ia.us/images/sample-1.jpg/image'} />
            </div>
            <div className="c-news-list__box-content">
              <h3 className="featured">{n.title}</h3>
              <small>{n.humanDate}</small>
              <p>{n.description}</p>
              {this.props.editable &&
                <Link className="btn btn--small" to={`/admin/news/${n._id}`}>Edit</Link>
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default NewsList;